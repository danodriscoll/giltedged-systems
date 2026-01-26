---
sidebar_position: 8
---

# Fund Manager Class Agent

The fund manager is a professional agent with an evolving decision-making logic to manage the collective wealth of households in the system. It is a pure *fiduciary*, its only source of profit is the *management fee* (a percentage) it charges on its client assets. All other income (interest and dividends) are passed on to the households that have invested in the manager's funds via a higher *net asset value* (NAV).

The fund manager learns, adjusts and allocates in preemptive response to both model exogenous events and endogenous system data in order to grow and protect client portfolios, specifically, its government bond fund.

## Logic and Behaviours

A simplified summary of the fund manager's logic and behaviours in order:

1. It first checks for a general market panic, that is, it monitors for an *active liquidity shock* exogenous event in its data feed and de-risks if one is found.  
2. If there are no *active liquidity shocks* to consider, the manager will continue on with its examination of the historical correlation between government deficits (aka, the *fiscal balance*) and the central bank's interest (base) rate response. If it predicts a rate hike in response to a higher than normal current deficit, it will actively sell its long-term bonds to protect its portfolio.  
3. If there is no crisis (liquidity shock event) and no clear prediction, it falls back to a simple interest-rate trend-following strategy.

It's made clear to households that the manager does not withhold or pay tax on behalf of its clients. Instead, it acts as an information provider. At the end of the step, it calculates the gross, taxable income (coupons, dividends, interest) earned by its funds and reports the proportional share to each household, who must then handle their own taxation payments.

## Fund Manager Report Review

<figure>
    ![alt text](https://www.data-reports.net/giltedged-info/model-images/abmlp-x-fund-manager.png)
    <figcaption>
        It's Monday the 3rd of December 2029\. The ABMLP-X Central Bank Governor, just nine months into an eight year term, is to resign. The [Fund Manager](https://www.data-reports.net/giltedged-info/model-gallery/abmlp-x-fund-manager.html) is quick to analyse the replacement.
    </figcaption>
</figure>
