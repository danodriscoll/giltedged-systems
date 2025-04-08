---
sidebar_position: 2
---

# ABMSIM

Agent-Based Model Simple (ABMSIM) is an interpretation of the first sectoral system described by Wynne Godley and Marc Lavoie (G&L) in their book Monetary Economics. View ABMSIM sectoral [accounting](https://docs.google.com/spreadsheets/d/1wZrseDCfqZvTt0uvJLbY9lYQfxmwWY9y7y75ZgukD5Q/edit?usp=sharing).

## Test Output

Visit the shareable Hugging Face space, [abmsim-test](https://danodrisc-abmsim-test.hf.space), to view the test output of agent-based model simple.

Policy variables are government expenditure (a stimulus quantity) and a government mandated taxation rate (a percentage). Changes in both expenditure and taxation determine the quantity of money (net financial assets) that flow towards or away from the non-government sector. This is the government sector fiscal balance, either in surplus (a money flow away from the non-government sector), or more typically, in deficit (a money flow toward the non-government sector).

The model and therefore the economy is defined by key policy variables and the behaviour of agents.

## Taxation

A note on ABMSIM taxation payment and how it differs from G&L's Model SIM

An ABMSIM model run test with one producer agent and one consumer agent.  In the first period the producer will employ and pay a consumer 20 units of cash (government stimulus) which the consumer is then forced to pay taxes on 20% of that, that is, it has to pay 4 units in taxes.  A consumer will then purchase services from a producer using 60% of the remaining 16 units, that is, 9.6 units, while the rest, 40% of the 16 units, will be put aside to accumulate wealth in the form of cash balances.  But the 9.6 units of consumption now generate production and an income equal to 9.6 units. Out of this income, more tax will be paid, more cash will be accumulated[^1].

In the *expected income* system described by G&L[^2] ModelSIM total tax within the same (first) period of economic activity equals 5.92 units (20% of 20 units plus 20% of 9.6 units). Within the ABMSIM test, total first period tax equals 4 units (20% of 20 units).

The additional 1.92 units not paid in tax in the first period increases income consumption spending by the exact same amount in the same period. In the following period, the 1.92 units are found in the new wage supplied to the Household agent, that is then subject to 20% tax. Over time, the amount of tax paid to the government within ABMSIM equalises with that of the G&L expected income ModelSIM and a steady state is achieved.

ABMSIM may have multiple Producer and Household agents. Tax is paid from the wages supplied to employed Households, and not at all from the equity consumption spending of Households that might be unemployed within the same period.

[^1]: G&L p.69
[^2]: G&L p.81