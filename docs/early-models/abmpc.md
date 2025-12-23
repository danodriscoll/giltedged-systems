---
sidebar_position: 2
---

# ABMPC

Agent-Based Model Portfolio Choice (ABMPC) is an interpretation of the second sectoral system described by Wynne Godley and Marc Lavoie (G\&L) in their book *Monetary Economics*. View ABMPC sectoral [accounting](https://docs.google.com/spreadsheets/d/1f2picRBpByjb77flxEGjCrZ9Ych3ctrqBSqy90PR6LM/edit?usp=sharing).

The model sees Household agents make a portfolio choice between non-interest bearing (high-powered cash) money and interest bearing bills akin to Government treasury bills. The interest rate offered will affect the composition of a Household agent’s asset portfolio. That is, the proportion of interest-bearing assets to cash money a Household will decide to hold.

### The Portfolio Decision

Mirroring Godley & Lavoie (G\&L) pp. 103-105.

Households make a two stage decision. In the first step, Households decide how much they will save out of their income. In the second step, households decide how they will allocate their wealth, including their newly acquired wealth. The two decisions are made within the same model step. However, the two decisions are distinct and of a hierarchical form. The consumption decision determines the size of the end of period stock of wealth; the portfolio decision determines the allocation of the stock of wealth.

How is wealth allocated between money and bonds? Two traditions have prevailed. One related to the quantity theory of money, links money balances to the flow of income and the other, of more recent vintage, makes money balances some proportion of total wealth. The latter is related to the Keynesian notion of liquidity preference. The lower is liquidity preference, the lower is the money to wealth ratio.

The transactions demand for money and the liquidity preference story may both be comprised within a single model.  Households wish to hold a certain proportion $\lambda_{0}$ of their wealth in the form of interest-bearing bills, and hence, because there is no third asset, a proportion equal to $(1 - \lambda_{0})$ in the form of money.  This proportion, however, is modulated by two elements, the rate of return on Treasury bills and the level of disposable income relative to wealth.

### Wealth Allocation Function

The ABMPC allocation function *interest\_assets* incorporates an interpretation of G\&L’s Brainard-Tobin formula, slightly amended. ABMPC may run with multiple Producers and Households. In this system, Household agents may face period(s) of unemployment with no knowledge of when they may be employed once again. If unemployed, an agent’s disposable income will fall, leading (probably) to the denominator in the *wealth to income* calculation becoming immediately smaller than the numerator; blowing up G\&L’s interpretation of Brainard-Tobin. Therefore, if unemployed, a Household agent will adjust its allocation of interest-bearing assets to money deposits based on a *wealth to system average income* calculation.

```Python showLineNumbers
def interest_assets(self, bills_held, bonds_held, central_bank, average_wage):
    """
    The proportion of wealth a household agent will allocate to
    interest-bearing money assets.
    """
    change_in_base_rate = zero_division(central_bank.current_base_rate
                                        - central_bank.previous_base_rate,
                                        central_bank.previous_base_rate) * 100
    
    current_int_assets = bills_held + bonds_held

    wealth_income_ratio = zero_division(self.wealth, self.disposable_income)
    wealth_average_income_ratio = zero_division(self.wealth, average_wage)

    if self.is_employed:        
        # Approximating the Brainard-Tobin formula, slightly amended.
        # See Godley & Lavoie, Monetary Economics, p104.
        prop_assets = ((self.wealth * (1 - wealth_income_ratio))
                        + (current_int_assets
                        * (1 + (zero_division(change_in_base_rate, 100))))) * wealth_income_ratio
    else:
        # Portfolio decision during a period (step) when unemployed.
        prop_assets = ((self.wealth * wealth_average_income_ratio)
                      * (1 + (change_in_base_rate / 100)))

    # Limit maximum prop wealth going to interest-bearing assets to whole of wealth.
    if prop_assets < self.wealth:
        prop_assets_this = prop_assets
    else:
        prop_assets_this = self.wealth

    return prop_assets_this
```

### A Rough Macro Sketch

View a sketch of ABMPC within a simple [macro-financial](https://www.data-reports.net/giltedged-info/studio-sketch/public-private-finance.html) context.
