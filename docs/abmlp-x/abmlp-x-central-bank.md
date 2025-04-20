---
sidebar_position: 6
---

# ABMLP-X Central Bank

Last, but not least, the Central Bank agent responds in every model step; setting the interest rate on interest bearing money instruments (bills). Profits on the holding of bills previously purchased, if any, are returned to the Government. New cash money supplied to Households by the Central Bank is simply equal to the amount of bills purchased by the Central Bank.

(Equation 5.15)
$$
\Delta H_s \equiv H_s - H_{s-1} = \Delta B_{cb}
$$

:::info[**Code Gist**]

View a code gist of the [Central Bank](https://gist.github.com/danodriscoll/14214d77ccaf2534c2e97275afea2a02) agent class.

:::

## Portrait from a Model Run Past

<figure>
    ![alt text](@site/static/img/central_bank_policy_meeting.jpeg)
    <figcaption>
        It was the 3rd of June 1822 and tensions were running high at the ABMLP-X Central Bank. A meeting of senior Directors was called. For one-hundred and three years the rate attached to interest-bearing bills held at 5 percent. With the gold standard recently restored, it was time for change. A recommended drop of 100 basis points. Who would inform the Governor?
    </figcaption>
</figure>
