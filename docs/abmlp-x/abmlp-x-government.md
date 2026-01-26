---
sidebar_position: 3
---

# Government Class Agent

The government is the fiscal authority; a currency-issuing entity that sets policy. In the *historic mode* phase of a model scenario run, the government agent will dutifully follow the historical time-series data it consumes in order to set its spending (pure government expenditures). This is the government executing its *exogenous* logic.

<details>
<summary>G\&L Note: Pure Government Expenditures</summary>

> "A key feature of all the models presented up to now is that pure government expenditures are assumed to be exogenous.. Still, there is no reason to believe that pure government expenditures are impervious to what is going on in the rest of the economy. ..What we want to underline in the present context is the sensitivity of pure government expenditures to the budget position of the government. The advocates of the *Treasury view* argue that governments ought to reduce their expenditures and the fiscal deficit in a slowdown because by doing so, the government would provide room for the private sector to collect the funds and the savings necessary for its investment expenditures \- so that it does not crowd-out the private sector."[^1]

Further, G\&L elucidate the initial negative effects of higher interest rates on the Government budget deficit:  
> "These effects that are eventually reversed in the early models where Government expenditures were impervious to the apparition of larger budget deficits. ..But this may not necessarily be so. Atul Sood (1999) has shown that high real interest rates lead to higher Government deficits in the short run, as must obviously be the case, but he has also shown that these higher interest rates often lead to reduced primary deficits, that is to higher primary surpluses." In other words, at some point, when the deficit gets too large, the Government will aim at controlling the public deficit, and to do so will reduce its pure government expenditures.

</details>

A model run scenario entering *projection mode* will have its *endogenous* logic take over. The government adjusts its spending according to how it perceives current economic conditions, such as the *fiscal trend*, that is, it will calculate the historic *velocity* (change) and *acceleration* (change in change) of new money entering the system from one step to the next as a percentage of national income. The appraised results \- within boundaries malleable to the speculated political moment \- are used to set the amount of pure expenditure to be distributed in the current step.

However, the government is not immune to the wider sentiment, and it may adjust policy based on the monitoring of its own *approval rating*, that is, the ratings made by the household sector in each step. Unless dealing with an exogenous crisis, the government when running in *projection mode* will almost certainly attempt to lower tax rates if it becomes unpopular, but will be biased towards raising them if the fiscal balance is increasing.

To make both its mandatory and non-discretionary spending (transfer payments) the government spends from the *consolidated fund* balance it maintains at the private bank; this is the government’s main bank account \- a *hub* for all its cash inflows (taxes, bond sales, central bank profits). The *consolidated fund* is a buffer. The government will always spend from this account first. Only when this account is empty does the government finance its spending by creating new money (reserves).

:::info Government Debt Mandate

A simple example of the long-term bonds and bills mandated and subsequently issued by the debt management office DMO:

* Mandatory and non-discretionary (total) spending for the step is 1000:  
  * The portion of total spending from the *consolidated fund* is 800\.  
  * Creation of new money (reserves) is the *shortfall* of 200\.  
* DMO mandate will equate to an amount of 1000 in long-term bonds and bills.

:::

## Government Budget Constraint

<details>
<summary>G\&L Note: Issue or Redeem Existing Treasury Bills</summary>

(G&L Equation 5.14)
$$
\Delta B_s \equiv B_s - B_{s-1} = (G + r_{b-1} \times B_{s-1} + BL_{s-1}) - (T + r_{b-1} \times B_{cb-1}) - \Delta BL_{s} \times p_{bL}
$$

> "The bills that need to be newly issued are equal to government expenditures, including its interest payments minus the government revenues \- taxes and central bank profits \- plus the value of the newly issued long-term bonds. Needless to say, when there is a government surplus, or when the government deficit is financed by new issues of long-term bonds, the change in Treasury bills will be negative and bills will be redeemed."[^2]

</details>

```Python showLineNumbers title="calculate_final_fiscal_position"
def calculate_final_fiscal_position(self):
    """
    In line with G&L equation 5.14:
    Government trusts the Central Bank's own accounting for its remittable profit.
    Uses the pre-calculated interest cost for the step.
    """
    # --- 1. Calculate Revenue ---
    cb = self.model.central_bank

    # The remittable profit is the sum of the CB's tracked cash income and its tracked realised gains.
    cb_remittable_profit = cb.coupon_income_this_step + cb.realised_gains_this_step

    # --- Government total revenue streams ---
    self.revenue_this_step = (cb_remittable_profit
                                + self.tax_revenue_this_step
                                + self.sre_remittance_revenue_this_step # sre == state-run enterprise.
                                + self.privatisation_revenue_this_step)

    # The CB remits its actual, realised profit.
    cb.remit_profit_to_government(cb_remittable_profit)

    # Update the cumulative tracker with this step's tax revenue.
    self.cumulative_tax_revenue += self.tax_revenue_this_step

    # --- 2. Calculate Expenditure ---
    # The method now simply reads the definitive interest cost that was
    # calculated and stored earlier in the step.
    self.expenditure_this_step = (self.pure_expenditure +
                                    self.transfer_payments_this_step +
                                    self.interest_cost_this_step)
    
    # --- 3. Calculate Final Balance ---
    self.fiscal_balance = self.expenditure_this_step - self.revenue_this_step
```

## Image of a Model Run Future

<figure>
    ![alt text](https://www.data-reports.net/giltedged-info/model-images/abmlp-x-government-future.png)
    <figcaption>
        It's November 2035. The [government](https://www.data-reports.net/giltedged-info/model-gallery/abmlp-x-government.html), the fiscal authority, stands ready to meet global challenges.
    </figcaption>
</figure>

[^1]: G&L pp.160-165
[^2]: G&L p.146
