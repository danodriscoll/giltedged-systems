---
sidebar_position: 2
---

# ABMLP-X Government

:::info[**Code Gist**]

View a [code gist](https://gist.github.com/danodriscoll/bc8967e4d60ca3faf33986d9417907c9) of Government agent attributes.

:::

## Expenditures

Context: As per G&L description, the model has, if logic requires, a Deficit to GDP rule.

> "A key feature of all the models presented up to now is that pure government expenditures are assumed to be exogenous.. Still, there is no reason to believe that pure government expenditures are impervious to what is going on in the rest of the economy. ..What we want to underline in the present context is the sensitivity of pure government expenditures to the budget position of the government. The advocates of the Treasury view argue that governments ought to reduce their expenditures and the fiscal deficit in a slowdown because by doing so, the government would provide room for the private sector to collect the funds and the savings necessary for its investment expenditures - so that it does not crowd-out the private sector."[^1]

Further, G&L elucidate the initial negative effects of higher interest rates on the Government budget deficit:
> "These effects that are eventually reversed in the early models where Government expenditures were impervious to the apparition of larger budget deficits. ..But this may not necessarily be so. Atul Sood (1999) has shown that high real interest rates lead to higher Government deficits in the short run, as must obviously be the case, but he has also shown that these higher interest rates often lead to reduced primary deficits, that is to higher primary surpluses."

In other words, at some point, when the deficit gets too large, the Government will aim at controlling the public deficit, and to do so will reduce its pure government expenditures.

---

Model endogenous (Treasury View) expenditure logic is applied by the function `delta_expenditure`; a synopsis of its purpose, parameters and usage is outlined.

```Python showLineNumbers title="delta_expenditure"
def delta_expenditure(
    government_debt,
    current_deficit,
    gdp,
    bond_coupon,
    bond_price,
    bond_yield,
    extreme_event=False,
    target_deficit_to_gdp=0.03,
    extreme_event_multiplier=1.5
) -> Decimal:
    ...
```

### Overview

*delta_expenditure* calculates a change in government spending (i.e., spending) for the current model step. It does so by comparing the model's current deficit-to-GDP ratio with a target ratio (a simplified "Treasury view" rule). If the deficit is above the target, the function returns a negative delta, indicating that spending should be reduced relative to the previous step. Conversely, if the deficit is below the target, the function returns a positive delta, indicating that spending should be increased.

In addition, the function checks for an extreme event (like war, pandemic, or climate emergency) and scales the change in spending by an extreme event multiplier, reflecting the tendency of governments to boost spending in crises.

### Parameters

| Name                     | Default | Description                                                                                                                                                                                                   |
| :----------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| government_debt          | None    | The current level of model government debt (e.g., total outstanding bonds). Although not explicitly used in the basic deficit-to-GDP rule, it can be relevant for more sophisticated policy logic if desired. |
| current_deficit          | None    | The public sector borrowing requirement (deficit) for the current step. Used to compute the actual deficit-to-GDP ratio.                                                                                      |
| gdp                      | None    | Current model estimate of GDP (national income). Used as the denominator in the deficit-to-GDP ratio calculation.                                                                                             |
| bond_coupon              | None    | The coupon rate of the long-term bond (e.g., expressed as a decimal). Not directly used in the default logic but provided for potential expansions (e.g., interest-rate sensitive policy).                    |
| bond_price               | None    | The current price of the long-term bond. Similarly included for expanded logic where bond market conditions might influence spending decisions.                                                               |
| bond_yield               | None    | The yield of the long-term bond. Also provided to accommodate potential interest-rate feedback rules.                                                                                                         |
| extreme_event            | FALSE   | A flag indicating whether an extreme exogenous event (war, pandemic, climate emergency) is active during this step.                                                                                           |
| target_deficit_to_gdp    | 0.03    | The desired or target deficit-to-GDP ratio. Defaults to 0.03 (3%).                                                                                                                                            |
| extreme_event_multiplier | 1.5     | The factor by which to scale the spending adjustment if an extreme event is active. Default is 1.5, meaning a 50% increase in the magnitude of spending changes when extreme_event=True.                      |

### Returns

The change in government expenditure.

- If the returned value is **positive**, you should increase the current step’s spending relative to the previous step’s plan.
- If the returned value is **negative**, you should decrease spending for the current step.
- If the function's logic would yield a large negative value, we clamp model logic, e.g. max(0, new_spending) if negative spending is disallowed.


### How It Works

1. Calculate the deficit-to-GDP ratio:

```Python showLineNumbers
if gdp <= 1e-9:
    deficit_to_gdp_ratio = 0.0
else:
    deficit_to_gdp_ratio = current_deficit / gdp
```

2. Compare to the target:

```Python showLineNumbers
deviation = deficit_to_gdp_ratio - target_deficit_to_gdp
# Positive deviation means the deficit is above target.
# Negative deviation means the deficit is below target.
```

3. Compute baseline change:

```Python showLineNumbers
baseline_expenditure_change = -sensitivity_factor * deviation * gdp
# The negative sign ensures that if the deficit is above target,
# the function recommends cutting spending, and vice versa.
```

4. Apply extreme event multiplier (optional):

```Python showLineNumbers
if extreme_event:
    baseline_expenditure_change *= extreme_event_multiplier
# When an extreme event is flagged, the government is assumed to
# expand or contract spending more aggressively.
```

5. Clamp result if needed:

```Python showLineNumbers
new_expenditure = max(baseline_expenditure_change, 0.0)
```

## Further Notes & Extensions

**Interest Rate Logic**: We may want government spending to respond to rising yields (a sign of increasing debt-servicing costs). In this case we could incorporate the `bond_yield` into the logic. For example, imposing a rule like *cut spending more aggressively if yields surpass a threshold*.

## Summary

The government's `delta_expenditure` is a simple method that will apply a deficit-to-GDP feedback rule into the model by returning a change in spending (rather than an absolute level). We track government outlays across steps and may even further customise how strongly the government reacts to deviations from the target and how it behaves during extreme events.

### Model Run Test: 'delta_expenditure' Parameters

A model run free from interest payments on Government money.

- Model: ABMLP-X
- Model Run: Test
- Government Expenditure: See Charts
- Number of Producers: 1
- Number of Households: 1
- Taxation rate: 20% (Flat tax rate)
- Coupon Rate: 0%
- Interest Rate: 0%

### Charts

1. Government Expenditure: 20 units every step. View a [steady state system](https://www.data-reports.net/giltedged-info/abmlp-x-test-endogenous-expenditure-false.html) test run.
2. Government Expenditure: `delta_expenditure` (Treasury View logic): Starting with 20 Units. The system is now path-dependent; time-dependent between what happens in the transitional states. View a [steady state system](https://www.data-reports.net/giltedged-info/abmlp-x-test-endogenous-expenditure-true.html) test run.

:::info[**Code Gist**]

View a [code gist](https://gist.github.com/danodriscoll/c4bf8ab114ddc3cfac34ecd919e2db6a) of Government expenditure functions.

:::

## Distribute Expenditures

The outcomes from expenditure (fiscal policy choices) are distributed to Producer agents in equal measure at the beginning of every step.
```Python showLineNumbers
def distribute_fiscal_expenditures(self):
    self.services_demanded -= self.pure_expenditure
    producers = self.model.agents_by_type[Producer] # Interact with producer(s).
    expenditure_share = self.pure_expenditure / self.model.num_producer
    for producer in producers:            
        producer.government_expenditure_supplied += expenditure_share

def distribute_household_interest_payments(self, central_bank)
def distribute_central_bank_interest_payments(self, central_bank)
```

### Government Budget Constraint

Issue or redeem existing treasury bills:

(Equation 5.14)
$$
\Delta B_s \equiv B_s - B_{s-1} = (G + r_{b-1} \times B_{s-1} + BL_{s-1}) - (T + r_{b-1} \times B_{cb-1}) - \Delta BL_{s} \times p_{bL}
$$

> "The bills 'Bs' that need to be newly issued are equal to government expenditures, including its interest payments minus the government revenues - taxes and central bank profits - plus the value of the newly issued long-term bonds. Needless to say, when there is a government surplus, or when the government deficit is financed by new issues of long-term bonds, the change in Treasury bills will be negative and bills will be redeemed."[^2]

> A Story: "Suppose that households do not want to hold so many bonds, either because of a change in their liquidity preference, or because they expect a fall in the price of bonds. Households will thus offer part of their holdings of bonds for sale. We can assume that the central bank purchases the offered bonds at the previously set price, and immediately turns around, asking the Treasury to redeem the bonds so obtained, exchanging them for the new issue of bills of an equivalent amount. This story is compatible with equation (5.14) which says the government issues new bills as a response to a government deficit and as a response to changes in the value of newly issued or newly retired bonds, so that we do have `government.bonds_issued = household.bonds_demanded`, while the central bank still only holds bills."[^3]

In ABMLP-X, Household agents do not currently *buy* or *sell* government bonds. Their demands for government bonds as part of their portfolio of money assets work in the same way as do their demands for interest-bearing bills, that is, it is a sudo savings account that an agent will add part of its wealth to, or subtract part of its wealth from. There is currently no accounting for the relationship between a household agent, central bank and government in the instance that a household wishes to lower its holding of govt bonds. A household will simply adjust for its portfolio composition change in `household.bonds_demanded`, at the same time `government.bonds_issued` is adjusted (in the opposite direction) to reflect the total amount of bonds the government now has outstanding to the household sector. Bond coupon payments to households adjust in the next step.

Therefore, the final part of G&L equation 5.14, that is, $- \Delta BL_s \times p_{bL}$ (see 'value_of_new_bonds_issued'), is currently removed (set to 0) in ABMLP-X.

```Python showLineNumbers
expenditures = (self.services_demanded
                + self.interest_on_households_bills
                + self.interest_on_central_bank_bills
                + self.interest_on_bonds)

revenues = self.taxation_revenue + self.central_bank_profits

# This would be:
# (self.bonds_issued - self.bonds_issued_last_step) * self.bond_price
value_of_new_bonds_issued = Decimal('0')

self.debt = ((expenditures # A negative number.
              + revenues)
              - value_of_new_bonds_issued)

closing_debt = self.debt
change_in_debt = closing_debt - opening_debt

# Change in debt (ΔBs) is a positive amount if running a deficit, negative if surplus.
self.bills_issued += change_in_debt
self.fiscal_balance = change_in_debt
```

[^1]: G&L pp.160-165
[^2]: G&L p.146
[^3]: G&L p.147

