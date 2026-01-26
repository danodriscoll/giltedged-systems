---
sidebar_position: 6
---

# Household Class Agent

Household behaviours are both nuanced and (wealth) profile-dependent. Households undertake a number of activities in every model step. They strive for paid - wage-bargained - employment, pay tax, make complicated investment decisions and consume.

## Employment in ABMLP-X

### Profile Dependent Roles

<figure>
    ![alt text](https://www.data-reports.net/giltedged-info/model-images/abmlp-x-household-employment-day-shift.png)
    <figcaption>
        Employed households from all wealth profiles go about their paid employment tasks [day](https://www.data-reports.net/giltedged-info/model-gallery/abmlp-x-household-employment-day-shift.html) and [night](https://www.data-reports.net/giltedged-info/model-gallery/abmlp-x-household-employment-night-shift.html).
    </figcaption>
</figure>

## Tax Accounting, Strategies & the Tax Gap

A Two-Stage Tax Calculation: The household has a two-stage accounting process that sees it first calculate its disposable income based on its regular, predictable wages, interest and transfers received. At the end of the step, a household will calculate the additional tax due on its investment income, that is, any capital gains and dividends it may have received.

<details>
<summary>Households calculate their disposable income for the step</summary>

```Python showLineNumbers title="calculate_provisional_tax_liability"
def calculate_provisional_tax_liability(self):
    """
    Calculates the household's tax liability on its pre-market income
    (wages, interest, and transfers). The result is used to determine a provisional
    disposable income for the current step's consumption spending decisions.
    """
    # 1. Calculate tax on general, pre-market income.
    general_income = (self.wage_income_this_step
                        + self.interest_income_this_step
                        + self.transfer_income_this_step)

    # Use the profile-specific income tax rate.
    government = self.model.government
    if self.profile == "high_net_worth": income_tax_rate = government.top_income_tax_rate
    elif self.profile == "established": income_tax_rate = government.middle_income_tax_rate
    else: income_tax_rate = government.bottom_income_tax_rate

    general_tax_due = general_income * income_tax_rate

    # This records the theoretical tax liability before any strategies are applied.
    self.cumulative_general_tax_due += general_tax_due

    # Apply tax strategies to this portion of the income.
    final_tax_paid_on_general = self.tax_disbursement(general_tax_due, general_income)

    # Provisional liability for the step.
    self.tax_liability = final_tax_paid_on_general

    # Disposable income for consumption is now based on up-to-date pre-market income.
    self.disposable_income_this_step = general_income - self.tax_liability
```

```Python showLineNumbers title="reconcile_final_tax_liability"
def reconcile_final_tax_liability(self):
    """
    Calculates the *additional* tax due on post-market investment income
    (capital gains and financial sector dividends) and adds it to the
    total liability for the step.
    """
    # 1. Calculate tax on post-market, investment income.
    investment_income = self.business_dividends_this_step

    # Access to the government agent.
    government = self.model.government

    # Use the correct profile-specific income tax rate for dividends.
    if self.profile == "high_net_worth":
        income_tax_rate = government.top_income_tax_rate
    elif self.profile == "established":
        income_tax_rate = government.middle_income_tax_rate
    else: # 'accumulator' and 'precarious' fall into the bottom band.
        income_tax_rate = government.bottom_income_tax_rate
    
    investment_tax_due = investment_income * income_tax_rate

    # Capital gains have their own profile-specific rate.
    if self.profile == "high_net_worth": capital_gains_tax_rate = self.model.a_profile_cg_rate
    elif self.profile == "established": capital_gains_tax_rate = self.model.b_profile_cg_rate
    elif self.profile == "accumulator": capital_gains_tax_rate = self.model.c_profile_cg_rate
    else: capital_gains_tax_rate = self.model.d_profile_cg_rate
    capital_gains_tax_due = self.capital_gains_this_step * capital_gains_tax_rate

    total_investment_tax_due = investment_tax_due + capital_gains_tax_due
    self.cumulative_general_tax_due += total_investment_tax_due

    total_investment_income = investment_income + self.capital_gains_this_step

    if total_investment_tax_due > 0:
        final_tax_on_investment = self.tax_disbursement(
                                    total_investment_tax_due,
                                    total_investment_income
                                  )
        # Add the additional tax to the total liability for the step.
        self.tax_liability += final_tax_on_investment
        # Update the final disposable income to reflect this new "windfall" income.
        self.disposable_income_this_step += total_investment_income - final_tax_on_investment
    else:
        # If no investment tax, just add the income to disposable.
        self.disposable_income_this_step += total_investment_income
```
</details>

However, the final transfer of taxation owed to the government is not a passive affair, a simple settlement process. If the mood takes them, Households might seek to lower their full taxation liability by employing strategies that include both *legal avoidance* and \- at a lower probability \- *illegal evasion*. This is a strategic decision dependent on wealth profile, for which there are, of course, financial penalties for a household that is caught engaging in illegal behaviour.

### A Brief Comparison of Taxation Theme Extremes: Flat Tax vs Marginal Tax

The following is a simple comparison between two of the taxation themes that may be available within a model run. This is a model run where household agents employ neither *legal avoidance* nor *illegal evasion* strategies. We compare the tax to be returned under both the flat rate and marginal rate themes.

Three example Households: The average wage for all households at model step 6 was: **3625.31**

| Agent ID | Wage Supplied | Flat Rate (37%) Tax Return | Marginal Rate Tax Return |
| :------------------ | :------------ | :------------------------- | :----------------------- |
| agent\_005          | 4023.58       | 1488.72                    | 1366.38                  |
| agent\_010          | 2438.05       | 902.08                     | 375.24                   |
| agent\_008          | 6203.24       | 2295.20                    | 2892.14                  |

Household Agent ID agent\_008: Marginal Tax Return Breakdown

50 percent of historical average wage amount at step 6: (3625.31 / 2\) \= 1812.65

* No tax on wage amount up to the first 50% of the historical average wage amount.  
* Tax on wage amount that is between 50% and 100% of the historical average wage amount (1812.65 \* 60%) \= 1087.59  
* Tax on wage amount that exceeds 100% of the historical average wage amount ((6203.24 \- 3625.31) \* 70%) \= 1804.55

## Financial Investment Decisions

### Profile Dependent Investing

<figure>
    ![alt text](https://www.data-reports.net/giltedged-info/model-images/abmlp-x-high-end-investment.png)
    <figcaption>
        A concierge financial asset [investment service](https://www.data-reports.net/giltedged-info/model-gallery/abmlp-x-high-end-investment.html) awaits Households of either a *high net worth* or *established* profile.
    </figcaption>
</figure>

The logic of household investment, or portfolio management, first requires that each household check if it needs to sell financial assets in order to meet its cash (liquidity) requirements. Second, if the household is of either an *established* or *high net worth* profile, it may \- if happy with the trajectory of its recent wealth \- look for speculative *risk-on* opportunities. This means it will look to invest in firm equity shares \- in an IPO boom \- and will be *bullish* on its government debt instrument investing \- the caveat being that the fund manager itself is saying that it is in a *yield seeking* frame of mind. Additionally, wealthier households that are in the mood to add risk to their portfolio, as opposed to *de-risking* their investments, may also choose to increase their leverage by applying for a *speculative loan* from the private bank. This will allow wealthier households to accumulate a greater amount of government debt instruments compared to less wealthy households who may only apply for a *consumption loan* from the private bank to smooth their consumption needs.

Finally, households take their regular, passive savings and invest them according to their now *confidence-adjusted* asset allocation plan.

## Consumption Spending

Households split their spending, that is, their *profile* sensitive marginal propensity to consume from *current income* as well as *existing wealth*, into two distinct categories, simulating a simple dual economy:

1. 60 percent is allocated to *natural monopolies*, the firms initially created as *state-run enterprises* (SREs). This simulates a form of captive spending on services like water, energy and transportation.  
2. The remaining portion of spending is allocated by way of random selection to firms initially created as *private enterprises* (PEs).

Last, but by no means least, every household will rate the government agent, that is, it will say that it either *approves* or *disapproves* of the government based on two factors; its current wealth relative to one of its household *profile* peers and how often it has been employed in a defined number of recent steps.
