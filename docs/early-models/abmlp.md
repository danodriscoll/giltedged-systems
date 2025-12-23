---
sidebar_position: 1
---

# ABMLP

Agent-Based Model Liquidity Preference (ABMLP) is an interpretation of the second sectoral system described by Wynne Godley and Marc Lavoie (G\&L) in their book *Monetary Economics*. View ABMLP sectoral [accounting](https://docs.google.com/spreadsheets/d/1NcpXHy4gTfRFKzN3JeQgiL39_UO8THEleTs_sAEWOxs/edit?usp=sharing).

## The Investment Portfolio Decision

The base interest rate offered will affect the composition of a Household agent's money asset portfolio. Households now have a third financial asset in which to invest their wealth. The choice of money instrument to invest is based on each Household's bond price expectations and liquidity preferences. An allocation is made between money, T-bills (similar to Treasury bills) and the long-term bonds issued by the government.

## Long-Term Government Bonds

### Bond Price Expectations

> "When Households make their long-term bond decisions, three features matter. First, they are concerned with the price that the long-term bond fetches in the current period, for this defines the yield of the asset which will arise in the next period. Second, what also matters is the expected price of the bond in the next period, when it will be possible to sell the bond. These two prices help define what we shall call the pure expected rate of return on bonds ($ERr_{bL}$)[^2]. The third factor is the confidence with which households hold their expectations about future bond prices. In a model where there may be a multiplicity of household agent opinions, it is a measure of the weight that household investors attribute to the validity of their expectations"[^1]

$$
ERr_{bL} = r_{bL} + \chi \times {(p^e_{bL} - p_{bL}) \above{2pt} p_{bL}}
$$

View a simple long-term [bond framework](https://docs.google.com/spreadsheets/d/1_3DX1j2vghMV8354_DmjBqt3wyg2AwMdvVSd2qtlaC4/edit#gid=1976813024).

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

> "Capital gains (CG) only have an impact in the next period, since they then appear in the wealth accumulated in previous periods. Thus, capital gains or losses feed into the consumption function with a lag, via the term in wealth ($V_{-1}$)."[^3]

$V = V_{-1} + (YD_r - C) + CG$ (Equation 5.4)

*with*

$CG = \Delta p_{bL} \times BL_{h-1}$ (Equation 5.5)

[^1]:  G\&L p.148

[^2]:  G\&L pp. 134

[^3]:  G\&L p.141
