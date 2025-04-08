---
sidebar_position: 4
---

# ABMLP-X Household

All Households make decisions regarding the amount of income taxation to pay on income received in the current step (see Tax Module). A Household will then update its current wealth before deciding how much of that wealth to keep as cash money. Any remaining wealth is invested in a portfolio of interest-bearing money instruments.

:::info[**Code Gist**]

View a [code gist](https://gist.github.com/danodriscoll/66fbf56e03bb0064a7202f5247779643) of Household agent attributes.

:::

## Tax Module

The tax module provides two key functions used by household agents in the model:
1. `calculate_tax_to_pay` - Computes the base tax liability that a household owes to the government based on its income and the selected tax scheme.
2. `tax_disbursement` - Determines the final tax payment after the household applies its tax strategy. This strategy may include legal tax avoidance and, in some cases, attempted illegal evasion - with a ceiling on the penalty imposed if the evasion is detected.

The output of `calculate_tax_to_pay` is passed into tax_disbursement as the base tax liability.

### Functions

**calculate_tax_to_pay:**

1. Purpose:
Calculates the initial tax amount a household owes before any strategic adjustments. It supports three tax computation themes:

- *Flat Rate*: A straightforward percentage calculation.
- *Band Rate*: Similar to a flat rate but adjusted for household type.
- *Marginal Rate*: Uses tax brackets where different portions of income are taxed at different rates.

2. Parameters:
- amount (Decimal): The income amount on which tax is to be calculated.
- rate (Decimal): The base tax rate (in percent) supplied by the government.
- tax_theme (str): Determines the tax computation method. Options include *flat_rate*, *band_rate*, or any other value (which defaults to the *marginal rate* method).
- average_wage (Decimal): The historic average wage used in marginal rate calculations.


3. Implementation Details:
- Flat Rate Calculation:
    - Converts the supplied percentage rate into a decimal (using a helper function that avoids division by zero).
    - Multiplies the income amount by this base rate.

- Band Rate Calculation
    - Begins with the base tax rate (converted from percentage).
    - Adjusts the rate based on household type:
        - Alpha Households: Increase the rate by 10 percentage points.
        - Gamma Households: Decrease the rate by 10 percentage points.
        - Beta Households: Use the base government rate.
    - The tax is then calculated as the income amount multiplied by the adjusted rate.

- Marginal Rate Calculation
    - Bracket 0: No tax is applied on the first 50% of the historic average wage.
    - Bracket 1:
        - If the income is less than or equal to the historic average wage, the taxable amount is the difference between the income and 50% of the average wage.
        - Otherwise, the first bracket is capped at 50% of the average wage.
    - Bracket 2:
        - If the income exceeds the historic average wage, the excess is taxed at a higher rate.
        - Tax Rates:
            - 60% tax rate for the first bracket (the income between 50% and 100% of the average wage).
            - 70% tax rate for any income above the average wage.

**tax_disbursement**

1. Purpose
This function computes the actual tax paid by the household after incorporating its chosen tax strategy. The strategies account for:

- Legal Tax Avoidance: Reduction of liability by a certain percentage.
- Illegal Tax Evasion: An attempt to further reduce tax, with a risk of detection and associated penalties.
- Voluntary Overpayment: A small probability that the household pays extra.

2. Key Variables
- tax_amount: Initially, this is set to the base tax liability (stored in `self.memo_wage_taxation_fund`).
- Month-specific Adjustment: There is a placeholder check for monthly behaviour (e.g., January full payments), although currently, it uses a multiplier of 1 regardless of the month.

3. Strategy Selection
A nested function, `tax_strategy()`, selects a strategy based on the household’s type:

*Alpha* Households (Wealthiest)
- Legal Avoidance:
    - Reduces the tax liability by between 15–25%.
- Illegal Evasion:
    - Has a base 30% chance (adjusted downward by prior warnings) to attempt evasion.
- Evasion Process:
    - The household attempts to evade an extra 5–10% of the tax.
    - If detected (25% chance), a penalty is computed as 150% of the evaded amount.
- Penalty Ceiling:
    - If the computed penalty exceeds a preset maximum (stored in `self.memo_wage_rate_supplied`), the effective tax is set to this maximum instead of simply adding the penalty. This ensures that the penalty tax does not exceed a defined ceiling.
    - If not detected, the evaded amount is subtracted from the tax.
- Outcome:
    - Combines legal reduction with the potential impact of successful or detected illegal evasion.

*Beta* Households (Middle-Income)
- Legal Avoidance:
    - Reduces the tax liability by between 5–15%.
- Illegal Evasion:
    - Has a lower base chance (10%, adjusted similarly) to attempt evasion.
- Evasion Process:
    - Attempts to evade an extra 3–5% of the tax.
    - Detection chance is higher at 30%, with a similar penalty computation.
- Penalty Ceiling:
    - As with *alpha* households, if the penalty exceeds the specified ceiling, the effective tax is capped at that maximum value.
- Outcome:
    - Results in a smaller reduction in tax liability compared to alpha households, with similar controls on penalty amounts.

*Gamma* Households
- No avoidance or evasion is attempted.
- The tax paid remains equal to the base tax_amount.

4. Post-Strategy Adjustments
- Non-negative Tax:
    - If the computed tax after strategy adjustments is negative, it is set to zero.
- Voluntary Overpayment:
    - There is a 5% chance that the Household voluntarily pays extra (between 0.5% and 5% of the base tax).
    - *Real-World Note*: In the UK a voluntary donation to the government may be given via the form of a direct bank transfer. Visit https://www.gov.uk/guidance/voluntary-payments-donations-to-government.

The function returns the final calculated tax amount after all adjustments, ensuring that it is non-negative and adheres to the imposed ceiling on any penalty tax amounts. These two functions:
- First, calculate a household’s base tax liability using various tax themes.
- Then, adjust that liability based on behavioural strategies reflecting legal avoidance, potential illegal evasion (with a built-in penalty ceiling), and even voluntary overpayment.

:::info[**Code Gist**]

View code gists of Household [calculate tax to pay](https://gist.github.com/danodriscoll/309b71c6727c5541e982e292885bcd19) and [tax disbursement](https://gist.github.com/danodriscoll/cb9c886df091728258d9b106a8594f42) functions.

:::

### Comparison of Theme Extremes: Flat Tax vs Marginal Tax

A simple comparison between two of the available taxation themes is performed. In a model run with Household agents employ neither legal avoidance nor illegal evasion strategies. We compare the tax to be returned under both the flat rate and marginal rate themes.

Three example Households: The average wage for all Households at model step 6 was: **3625.31**

| Household Unique ID | Wage Supplied | Flat Rate (37%) Tax Return | Marginal Rate Tax Return |
| :------------------ | :------------ | :------------------------- | :----------------------- |
| 5                   | 4023.58       | 1488.72                    | 1366.38                  |
| 10                  | 2438.05       | 902.08                     | 375.24                   |
| 8                   | 6203.24       | 2295.20                    | 2892.14                  |

Household Agent (Unique ID 8): Marginal Tax Return Breakdown:

50% of historical average wage amount at step 6: (3625.31 / 2) = **1812.65**

- No tax on wage amount up to the first 50% of the historical average wage amount.
- Tax on wage amount that is between 50% and 100% of the historical average wage amount (1812.65 * 60%) = **1087.59**
- Tax on wage amount that exceeds 100% of the historical average wage amount ((6203.24 - 3625.31) * 70%) = **1804.55**

## The Investment Portfolio Decision

The base interest rate offered will affect the composition of a Household agent's money asset portfolio. Households now have a third financial asset in which to invest their wealth. The choice of money instrument to invest is based on each Household's bond price expectations and liquidity preferences. An allocation is made between money, bills (similar to Treasury bills) and model long-term bonds.

### Long Term Government Bonds

View a simple long-term [bond framework](https://docs.google.com/spreadsheets/d/1_3DX1j2vghMV8354_DmjBqt3wyg2AwMdvVSd2qtlaC4/edit#gid=1976813024).

> "Capital gains (CG) only have an impact in the next period, since they then appear in the wealth accumulated in previous periods. Thus, capital gains or losses feed into the consumption function with a lag, via the term in wealth ($V_{-1}$)."[^1]

$V = V_{-1} + (YD_r - C) + CG$ (Equation 5.4)

*with*

$CG = \Delta p_{bL} \times BL_{h-1}$ (Equation 5.5)

```Python showLineNumbers
"""
Disposable income, if any, includes interest payments on bills and long-term bonds.        
YDᵣ ≡ Y - T + rb₋₁ * Bₕ₋₁ + BLₕ₋₁ (5.2)        
"""
self.disposable_income = ((self.wage_rate_supplied - tax_to_pay_wage)
                         + (self.interest_from_bills - tax_on_bills_interest)
                         + (self.interest_from_bonds - tax_on_coupon_revenue))

# --- Agent Accounting ---

self.wealth = (self.wealth
               + ((self.disposable_income - total_consumption) 
               + self.capital_gains))
```

### Portfolio Decision: Bills vs Bonds vs Central Bank (Money) Deposits

We note that the portfolio decisions of households are forward-looking.

#### Household Agent Bond Price Expectations

> "When Households make their long-term bond decisions, three features matter. First, they are concerned with the price that the long-term bond fetches in the current period, for this defines the yield of the asset which will arise in the next period. Second, what also matters is the expected price of the bond in the next period, when it will be possible to sell the bond. These two prices help define what we shall call the pure expected rate of return on bonds ($ERr_{bL}$). The third factor is the confidence with which households hold their expectations about future bond prices. In a model where there may be a multiplicity of household agent opinions, it is a measure of the weight that household investors attribute to the validity of their expectations"[^2]

$$
ERr_{bL} = r_{bL} + \chi \times {(p^e_{bL} - p_{bL}) \above{2pt} p_{bL}}
$$

#### Price Expectation Approaches: Bond Price Smoothing (Partial Delay Vs Exponential Moving Average)

1. Bond Price Smoothing (Partial Delay)

In this approach we split the current step's acceleration (e.g., money creation rate) into two parts:
- An immediate fraction that updates the bond price right away.
- A delayed fraction that gets carried over to the following step(s).

The goal is to avoid an abrupt, full impact of a large shock in a single period while still ensuring that big changes eventually propagate through the system.

Key Variables
- new_acceleration: The acceleration observed or calculated at step .
- carry_over: The accumulation of delayed accelerations from previous steps.
- alpha: A sensitivity factor controlling how strongly bond prices respond to the applied acceleration.
- immediate_fraction: A value between 0 and 1 indicating how much of the current shock / acceleration is applied immediately.

Why Use Partial Delay?
- Realistic Lag: If there is a sudden spike in the acceleration of new Government bills, only part of a shock is priced in instantly; the rest takes time to unfold.
- Smooth Transitions: Prevents extreme volatility from single-step spikes in money creation.
- Each Household can hold its own carry-over, modelling heterogeneous response times.

2. Exponential Moving Average

The Exponential Moving Average (EMA) approach treats the acceleration signal as something that should be smoothed over time. Instead of applying the raw acceleration directly to the bond price, we maintain an EMA of acceleration. This smoothed value updates gradually, mitigating sudden spikes.

Why Use EMA?
- Reduces Volatility: Smooths out erratic changes in the acceleration of new Government bills, preventing large one-step jumps in bond prices.
- Continuous Decay: Big shocks still matter, but their impact tapers off exponentially over time.

```Python showLineNumbers
# Expected bond price function parameters.

# Household agent's sensitivity to the change in system acceleration in this step.
alpha = Decimal('0.05')
immediate_fraction = Decimal('0.5')        

# A household would expect the current bond price to remain the same in the next step.
freeze_expectations = False
# Use Smoothing (True) or Exponential Moving Average 
# (False) to set the expected bond price this step.
smoothing_pricing_approach = True

if freeze_expectations or len(theia.bond_price_memory) < 24:
    self.expected_bond_price = government.bond_price
else:
    if smoothing_pricing_approach:
        self.expected_bond_price, self.accel_effect_carry_over = self.bond_price_smoothing(
            expected_price_prev=self.expected_bond_price,
            new_acceleration=theia.bills_issued_accel[-1],
            carry_over=self.accel_effect_carry_over,
            alpha=alpha,
            immediate_fraction=immediate_fraction
        )
    else:            
        # 1) For the smoothed acceleration calculation, 'ema_filter', see Theia.
        # 2) Update the bond price based on the smoothed acceleration
        self.expected_bond_price = self.bond_price_ema(
            bond_price_prev=theia.bond_price_memory[-1],
            smoothed_accel=theia.bills_issued_accel_ema[-1],
            alpha=alpha
        )

# (ERrbL)
self.expected_bond_yield = government.bond_yield
                         + (self.chi
                         * zero_division(
                            self.expected_bond_price - government.bond_price, government.bond_price
                           ))

# Expected capital gains or losses.
self.expected_capital_gains = self.chi
                              * ((self.expected_bond_price - government.bond_price)
                              * self.bonds_demanded)
```

Both Partial Delay (Smoothing) and Exponential Moving Average (EMA) approaches model delayed or gradual responses in bond price expectations within the ABMLP-X framework. Each provides nuanced specifics:
- Partial Delay: More explicit, discrete splitting of shocks into *now* vs. *later*.
- EMA: A classical smoothing technique that accumulates past data exponentially.

:::info[**Code Gist**]

View code gists of Household [bond_price_smoothing](https://gist.github.com/danodriscoll/62b7f7543808aabe564389217cc07dbc) and [bond_price_ema](https://gist.github.com/danodriscoll/2ae5b9d538faddf2dc8283a851801f7c) functions.

:::

### Allocating Wealth Between Money Instruments (Bills vs Bonds)

```Python showLineNumbers
# Calculate the total interest-bearing instruments demanded in this step.
interest_instruments_demanded = self.interest_instruments(central_bank)
# Construct proportion bills vs bonds as a function of the Rate of Return
# vs Expected Rate of Return: rbL vs ERrbL.
bonds_demanded_this_step = self.proportion_bonds(interest_instruments_demanded, government)
bills_demanded_this_step = interest_instruments_demanded - bonds_demanded_this_step
```

#### Interest Instruments: A Function Description

The `interest_instruments` function is used to determine the proportion of a Household agent's wealth that will be allocated to interest-bearing money instruments. This function integrates macroeconomic changes and microeconomic conditions, specifically:

- Change in the Central Bank Base Rate:
```Python showLineNumbers
change_in_base_rate = zero_division(
    central_bank.current_base_rate - central_bank.previous_base_rate,
    central_bank.previous_base_rate
) * 100
```

All Household agents by type, *alpha*, *beta*, or *gamma*, will allocate wealth to interest bearing instruments according to a baseline:
- Alpha: 20% of wealth.
- Beta: 15% of wealth.
- Gamma: 10% of wealth.

The function adjusts these base allocations using a multiplier that accounts for:
- Central Bank Base Rate Change: The percentage change between the current and previous base rate.
- Employment History: The agent’s recent employment performance, determined by summing the employment outcomes over the last 5 steps. A threshold of 2 is used:
    - If employment count >= 2: A positive adjustment (+0.05) is applied.
    - If employment count = 0: A negative adjustment (–0.05) is applied.
    - Otherwise: No adjustment is made.

```Python showLineNumbers
recent_employment_count = sum(self.employment_history[-5:]) if self.employment_history else 0
employment_threshold = 2  # As used in Government rating.

if recent_employment_count >= employment_threshold:
    employment_effect = Decimal('0.05')
elif recent_employment_count == 0:
    employment_effect = Decimal('-0.05')
else:
    employment_effect = Decimal('0.00')
```

The function returns a value which represents the proportion of wealth that will be allocated to interest-bearing money instruments (bills and bonds).

<figure>
    ![alt text](@site/static/img/alpha_household_agents_investment_decision.jpeg)
    <figcaption>
        *Alpha* Household agents make their investment portfolio decisions.
    </figcaption>
</figure>

:::info[**Code Gist**]

View code gists of Household [interest instruments](https://gist.github.com/danodriscoll/e72e337c6373ea41d788d2843854e6dc) and [proportion bonds](https://gist.github.com/danodriscoll/3c38458735293756003190193e4bca4d) functions.

:::

## Household Rating of Government

The updated Household class now incorporates an employment history mechanism into its government rating system. The function integrates wealth-based ratings with recent employment outcomes to provide a nuanced evaluation of the government.

Each Household agent rates the government (in the current step) by considering two factors:
1. Employment History:
    - Each household maintains a list of recent employment opportunities, tracking its employment status (employed or not) for the last five steps.
    - An employment score is computed based on how many steps out of the last five the household was employed.
    - This score is combined with the wealth score to determine the overall government rating.

2. Wealth Performance:
    - A household records an *approval* rating if it achieves a new wealth high.
    - It records a *don't know* rating if its wealth is greater than that of a randomly chosen peer but no new high is achieved.
    - A *disapproval* rating is recorded if the household's wealth is less than or equal to the compared peer's wealth.

```Python showLineNumbers
def government_rating(self, other_household_wealth):
    """
    Do you approve or disapprove of the Government's record to date?
    See: https://yougov.co.uk/topics/politics/trackers/government-approval

    Computes a rating of the government that considers both:
        1. Wealth performance (new high or relative to a peer)
        2. Recent employment history over the past 5 steps.
    
    The idea is that a household that has achieved a new wealth high and has
    experienced sufficient employment opportunities will be more likely to approve
    of government.
    """
    # --- Employment Component ---
    # Count employment outcomes over the last 5 steps.
    recent_employment_count = sum(self.recent_employment_count[-5:]) if self.recent_employment_count else 0
    
    # An arbitrary employment threshold
    employment_threshold = 2
    
    # Assign an employment score:
    # +1 if the household has had at least the threshold number of employments,
    #  0 if borderline (e.g., exactly one), and -1 if none.
    if recent_employment_count >= employment_threshold:
        employment_score = 1
    elif recent_employment_count == 0:
        employment_score = -1
    else:
        employment_score = 0

    # --- Wealth Component ---
    # Compute a wealth score:
    # +1 if a new wealth high is reached,
    #  0 if wealth is greater than the randomly chosen peer,
    # -1 otherwise.
    if self.wealth > self.wealth_max:
        wealth_score = 1
    elif self.wealth > other_household_wealth:
        wealth_score = 0
    else:
        wealth_score = -1

    # --- Combine Scores ---
    total_score = wealth_score + employment_score

    # Map the total score to a discrete rating:
    if total_score > 0:
        return {'approval': 1, 'dont_know': 0, 'disapproval': 0}
    elif total_score == 0:
        return {'approval': 0, 'dont_know': 1, 'disapproval': 0}
    else:
        return {'approval': 0, 'dont_know': 0, 'disapproval': 1}
```

[^1]: G&L p.141
[^2]: G&L pp. 133-135