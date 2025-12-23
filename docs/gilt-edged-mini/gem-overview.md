---
sidebar_position: 1
---

# GEM Overview

> "In contrast to the centuries during which it had charged for the money, the (English) government now paid for the currency it enabled. - As a conceptual matter, the new system raises an interesting issue, left aside here. It seems that the payment of interest on debt that is later canceled means that the system will never 'clear'. In that sense, there appears to be an inflationary aspect to the modern strategy of liquidity creation, all else equal."
>
> — DESAN, C. (2015). *Making Money: Coin, Currency, and the Coming of Capitalism*. Oxford University Press. p. 296

## Model Development

The model is a highly simplified computational (agent-based) model of a closed, financialised, government monetary system with similarities to the English monetary system born in the [modern](#modern-turn) money revolution. A model shaped by my nascent comprehension of the wonderful books, papers and articles on the reading list. The model generates macroeconomic and agent-level behaviours and outcomes not easily observed or available in real-world data series.

## Model Evolution

Model accounting is based principally, but not only, on the sectoral accounting systems presented by Wynne Godley and Marc Lavoie (G\&L) in their book [Monetary Economics](https://www.giltedged.info/reading#monetary-economics). Incrementally sophisticated agent-based models (ABMs) include model *simple* (ABMSIM), *portfolio choice* (ABMPC) and *liquidity preference* (ABMLP). All models are structured with a minimum of class agents conceptually categorised as *rule makers*; the government and central bank and *rule takers*; and the firms (service providers) and households who behave accordingly.

Agent-based model *liquidity preference \- extended* (ABMLP-X) is a system populated by distinct agents each with its own *brain* (logic), its own behaviours (goals) and its own balance sheet. The behaviour of the model economy is the result of the interactions between agents as they pursue their own objectives. ABMLP-X supplements the minimum of class agents with the addition of a public debt management office, a commercial (private) bank, a credit agency and a financial asset fund manager.

ABMLP-X has data instruments (*json data objects*) not described by G\&L. For instance, long-term bonds in G\&L's *liquidity preference* model represent perpetuities (consols) that are never redeemed. In a simple behavioural relationship between the government and household sector, whatever bonds are demanded by households are supplied by the government. ABMLP-X, however, has a debt management office which is mandated to create (and issue) long-term government bond and treasury bill instruments in an amount sufficient to cover the government's fiscal balance (deficit). Bonds and t-bills are bought by, and subsequently sold by, the private bank \- the model's primary dealer. Should the private bank fail to purchase all of the instruments issued in the step, the central bank acts as the buyer of last resort, purchasing all unsold debt instruments.

## Calibration & Data Inputs

One reason agent-based models are useful for simulating complex systems is because they can ingest real world inputs. ABMLP-X consumes [parameters](https://gist.github.com/danodriscoll/19a3c5817871a34fb68cef1e59000c82) (inputs) best described as the *rules of the game*; rules that include, but are not limited to, government *expenditures*[^1], *taxation* and *base* rate time-series data . Agents may react to historical UK events[^2]; adding an *exogenous* realism to behaviours and output dynamics.

### Model Run Scenarios

* **Historic Mode** (Exogenous Logic): Real-world expenditure and base rate inputs may be imported from the Bank of England's [millennium](https://www.bankofengland.co.uk/statistics/research-datasets) research dataset. The series provides annual economic time-series data from the beginning of 1694 to the end of the financial year 1954\. The millennium series, first exploded into a quarterly financial time-series, and then again into a monthly series, prepends [ONS](https://www.ons.gov.uk/) provided economic time series, itself [exploded](https://www.data-reports.net/giltedged-info/explode_quarterly_values.html) from a quarterly to a monthly series beginning 1955 and ending with the latest available figures.  
* **Projection Mode** (Endogenous Logic): A model scenario *run* may proceed with model defined parameters only. ONS time-series data is typically one financial quarter behind today's date. A *run* to a date beyond the latest available data is a speculative projection to both present and future.

#### Rule Makers

1. Model government fiscal and central bank monetary *projection mode* policy logics. A model *Treasury View* to represent a core component of English statecraft.

#### Rule Takers

2. The *historic* and *projection mode* logic and strategies employed by:  
   1. Firms and households, and   
   2. the private bank and financial asset (fund) manager.

### A Brief Circuit Summary

The consolidated government sets the rules; sets the budget and makes demands. Firms hire and fire households. Households work, pay tax, invest their wealth in fund manager funds and consume. Households possess sophisticated investment decision-making logic. If satisfied with the recent trajectory of their total wealth, wealthier households of either an *established* or *high net worth* profile may, in consultation with the fund manager, may choose to apply for a speculative loan from the private bank in order to increase their investment leverage. This will, for instance, allow them to acquire a larger proportion of the government's interest-bearing money (long-term bonds). Less wealthy households of either an *accumulator* or *precarious* profile may apply for a loan in order to smooth their consumption demands.

## Primary Objective

> "The state has become a collateral factory for modern financial systems." — Alberto Giovannini (Financial Economist).

### A Cyclical Analytical Framework for Portfolio Hedging

:::note A Political Economy Context

The primary objective is to gain a better understanding of the system[^3] and behaviours that influence the price dynamics of a real-world portfolio comprising UK government interest-bearing instruments (Gilts) to effectively hedge the portfolio.

:::

The framework employs a cyclical, three-step methodology:

1. **Model and Policy Interplay**: Refine the strategies (agent logics) of the fund manager within the ABMLP-X model, examining its interaction with macroeconomic policies (logics) applied by the government and central bank, as well as the financial behaviour of households.  
2. **Integration with Reality**: Blend the data generated by the ABMLP-X model \- a closed, financialised government money system \- with real-world UK economic time series data.  
3. **Iterative Analysis**: Analyse the combined results, which then informs the continuous refinement of the agent logics and overall understanding in a loop back to the first step.

Model agent summaries and an assortment of *historic* *mode* scenario outputs are available to all. View a brief technical [architecture](https://www.data-reports.net/giltedged-info/studio-sketch/architecture.html).

Feel free to [get in touch](mailto:info@giltedged.info) if:

1. You would like to discuss *projection mode* scenario run outputs, and / or  
2. you possess the knowledge and financial resources to take the GEM project in a direction that has meaning to you.

### Modern Turn

When the visibility of money as a political project faded, the way it had realigned the societies that authored it also disappeared from view. With that disappearance went compelling questions about the consequences of the transformation - including the role of fiscal action in supporting the value of money[^4].

Reconsidering its creation story suggests that *making money* is a constitutional project. In mediaeval England, silver and gold were only the beginning, not the end, of the story. They furnished the material value upon which the mediaeval world would act out a debate over how to package, pay and circulate value. That effort distributed resources. It shaped nation building. It configured new ways to represent counted value - public debt, circulating credit, and elaborate hierarchies of credit are all part of the story, as are markets, banks, securities and financial crises. The way the English made money shaped and reshaped the way people conceptualised it and the way they conducted monetary policy. As a matter engineered on a fiscal frame, enhanced by the unique cash quality it offered, and expanded for a charge, money has never been neutral[^5].

Bank (of England) notes, like bills, had been blessed from the beginning, or very close to it, by a second constitutional contrivance. Both public officials and individual holders cooperated to institutionalise them as a mode of payment by giving them a unique stature in exchange between the government and its citizens. ... The stature of the Bank's notes again set them apart from their competitors. Specie was not actually *backing* Bank issues in the sense that redemption was a significant part of the functioning system. According to the numbers in circulation, people held Bank notes rather than demanding specie. ... Freed from more laborious work, specie began assuming its modern role. First, it acted, as a kind of security, a default guarantee. If the Bank notes failed as money, people could claim specie as a back-up. Less directly, but more practically, specie was a legitimating device. The Bank's commitment to cash its demand instruments visibly limited the number it could issue. And the image offered of gold or silver in the vault gave those holding paper the sense that an anchor existed - even if the anchor was actually elsewhere, in the sound functioning of the fiscal system[^6].

[^1]:  UK expenditure time-series may be divided as such: The ONS UK [population](https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/timeseries/ukpop/pop) estimate by the total number of model household agents.

[^2]:  Real-World financial crises, wars and pandemic(s).
[^3]:  This is a highly-simplified interpretation of the institutional and accounting arrangements as they currently exist. However, analysis may also explore the production of collateral in a system yet to exist in the real-world, that is, what the UK system might evolve to be. For instance: *Centralised Cryptocurrency Regime*: Explore state collateral production within the framework and accounting of a digital asset (cryptocurrency) reserve (fund) held within the formal government money system. *Decentralised Bank Deposit Money Regime*: Explore state collateral production within the framework and accounting of a new population of \- state regulated \- commercial (private) banks that are distributed around a highly-simplified UK [geo-region](https://mesa-geo.readthedocs.io/latest/tutorials/intro_tutorial.html) model space (districts). The banks service the productive borrowing requirements of local firms \- and only the productive borrowing requirements of firms \- organised as [sub-agents](https://mesa.readthedocs.io/latest/examples/advanced/alliance_formation.html) of a new geographically distributed agent population of Guilds, themselves sub-agents of a Local Authority agent class.
[^4]: The United Kingdom of Great Britain and Northern Ireland (UK)
[^5]: Desan, [Making Money](https://www.giltedged.info/reading#english-monetary-history), p. 22
[^6]: p. 69
[^7]: pp. 311-319
