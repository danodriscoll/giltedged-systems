---
sidebar_position: 1
---

# Research Timelines

GEM is the organisation and exploration of the output from a highly simplified government money model and real-world historical datasets, economic and otherwise pertinent to the United Kingdom of Great Britain and Northern Ireland (UK). Visit [GiltEdged.info](https://www.giltedged.info) for a GEM background story.

## Model Run Scenarios: Past, Present & Future

Agent-Based Model [Liquidity Preference-X](/abmlp-x/abmlp-x-overview) (ABMLP-X) (the model) may consume pro rata[^1] real-world UK parameters, these being *expenditure*, *taxation* and *interest* rate time-series data (see [resource](/category/resource)).


### Model Run Durations

- Condensed annual UK economic time-series data: Beginning 1695; ending 1969.
- UK quarterly economic time-series [exploded](https://www.data-reports.net/giltedged-info/explode_quarterly_values.html) into monthly time-series from 1970 to the present: A model run may end with the latest release of economic time-series data made available from the ONS website.
- Speculative Future: A model run may end with time-series values that go beyond available [ONS](https://www.ons.gov.uk/) data - values determined by model agent logics. The latest release of ONS time-series data is typically one financial quarter behind today's date. A model run that proceeds with model generated values is an imagined journey to both the present and future. At its core the model is one of rule makers; the Government and the Central Bank who set parameters, and rule takers, Producers and Households who behave accordingly. A speculative model run future that proceeds with generated values will typically be, but doesn't have to be, a world where the guiding principle of the Government is to equalise its pure expenditures with its revenues over time (model steps). However, as the model proceeds, agent behaviours evolve - social relationships develop. The desires of Households can, if allowed, affect the logic of rule makers and the parameters they subsequently set. A simple structure becomes more nuanced and complicated.

### Model Analysis

Model run macro and agent-level outputs are wrangled and analysed. For instance, model macro output is augmented with trend change (*velocity*) and trend change in the change (*acceleration*) at which new bills are issued by the Government as a percentage of national income.

```Python
import numpy as np

# Velocity of bills issued as percentage of national income.
df_model_output["vel_bills_issued"] = (abs(vel_bills_array_diff)
                                      / df_model_output["national_income"]) * 100

acc_bills_array = np.array(df_model_output["vel_bills_issued"])
# The difference in velocity of bills issued from one period to the next.
acc_bills_array_diff = np.diff(acc_bills_array)
```

View a [UK Static Perspective](/gilt-edged-mini/uk-static-perspective) for a simple example of correlation between model system analysis and real-world UK Gilt dynamics.

### Themes

Themes include, but are not limited to:

1. The accounting arrangements of the English monetary system since the [modern turn](/gilt-edged-mini/gem-research#modern-turn).
2. Historical patterns of events that affect English public money creation.
3. How the evolving behavioural logic of agents may affect model system aggregates.

## Modern Turn

When the visibility of money as a political project faded, the way it had realigned the societies that authored it also disappeared from view. With that disappearance went compelling questions about the consequences of the transformation - including the role of fiscal action in supporting the value of money[^2].

Reconsidering its creation story suggests that *making money* is a constitutional project. In mediaeval England, silver and gold were only the beginning, not the end, of the story. They furnished the material value upon which the mediaeval world would act out a debate over how to package, pay and circulate value. That effort distributed resources. It shaped nation building. It configured new ways to represent counted value - public debt, circulating credit, and elaborate hierarchies of credit are all part of the story, as are markets, banks, securities and financial crises. The way the English made money shaped and reshaped the way people conceptualised it and the way they conducted monetary policy. As a matter engineered on a fiscal frame, enhanced by the unique cash quality it offered, and expanded for a charge, money has never been neutral[^3].

Bank (of England) notes, like bills, had been blessed from the beginning, or very close to it, by a second constitutional contrivance. Both public officials and individual holders cooperated to institutionalise them as a mode of payment by giving them a unique stature in exchange between the government and its citizens. ... The stature of the Bank's notes again set them apart from their competitors. Specie was not actually *backing* Bank issues in the sense that redemption was a significant part of the functioning system. According to the numbers in circulation, people held Bank notes rather than demanding specie. ... Freed from more laborious work, specie began assuming its modern role. First, it acted, as a kind of security, a default guarantee. If the Bank notes failed as money, people could claim specie as a back-up. Less directly, but more practically, specie was a legitimating device. The Bank's commitment to cash its demand instruments visibly limited the number it could issue. And the image offered of gold or silver in the vault gave those holding paper the sense that an anchor existed - even if the anchor was actually elsewhere, in the sound functioning of the fiscal system[^4].

[^1]: Expenditure time-series may be divided as such: The UK [population](https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/timeseries/ukpop/pop) estimate by the population of model Household agents.
[^2]: Desan, [Making Money](https://www.giltedged.info/reading#english-monetary-history), p. 22
[^3]: p. 69
[^4]: pp. 311-319