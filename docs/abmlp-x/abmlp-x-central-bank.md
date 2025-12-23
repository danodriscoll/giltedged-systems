---
sidebar_position: 4
---

# Central Bank Class Agent

The central bank is the monetary policy authority, constantly balancing its competing mandates for price (inflation) stability, economic growth, and financial stability (bond yields). Like the government, the central bank will dutifully follow the historical time-series data it may consume in order to set its interest (base) rate for the economy. This is the central bank executing its *exogenous* logic.

Once a model run scenario enters *projection mode*, the central bank *endogenous* logic will take over. Endogenous logic settles into a complex hierarchy of priorities:

* Financial Stability: Its first and most important job is to prevent a market panic. The central bank monitors long-term bond yields for signs of financial crisis, that is, a sudden, sharp spike in bond yields). The Bank, if it detects a crisis, will abandon all other goals and immediately act to stabilise the market by holding or decreasing the interest (base) rate under its control.

* Inflation Targeting: If the bond market is stable, it looks at its *primary mandate*: inflation (price stability). It also looks at low-income wage growth as a *confirming signal*. If both inflation and wage growth are *hot* it will be more aggressive in raising interest rates.

```Python showLineNumbers
if average_wage_growth > wage_growth_target:
    desired_rate += adjustment * Decimal('0.5')
```

* Employment: If inflation is on target, it uses its *secondary mandate* to fine-tune the economy. The central bank will now look at the overall unemployment rate, decreasing the base rate if unemployment is high and raising it if the labour market is *too tight*.

The central bank, being *history-aware*, knows that the monetary system itself has evolved. It may begin to pay interest on central bank held reserves \- reserves held by the private bank \- once the model clock has reached and passed a *floor system start step*, which will correspond to the 2008 financial crisis. The central bank payment of interest creates a new income stream for the private bank and a new expense for itself.

Last, but by no means least, the central bank acts as the buyer of last resort. An entity that will not only be the ultimate backstop for the government, that is, it will purchase any government issued debt (long-term bonds and treasury bills) not been absorbed by the *primary dealer* (private bank), but will also act to restore the solvency of the private bank itself, should that become necessary.

```Python showLineNumbers title="clear_market"
def clear_market(self):
    """
    Buys any bonds and T-bills that the private bank did not purchase,
    acting as buyer of last resort and correctly transferring the
    payment to the government.

    Purchase Government assets instead of using a `Ways & Means Facility`.
    See https://www.bankofengland.co.uk/news/2020/april/hmt-and-boe-announce-temporary-extension-to-ways-and-means-facility

    The government has a deposit account that is credited with the
    proceeds of the central bank's asset purchases. It is a functionally
    identical, though simplified, version of the real-world `Ways and Means Facility`.

    How it Mirrors the Real World:
    The Core Function: The Ways and Means Facility is essentially the
    government's overdraft account at the Bank of England.
    It's a cash buffer that allows the government to spend even if there's
    a temporary mismatch between its daily expenditures and its income
    from taxes or bond sales.

    ABMLP-X Logic: When the central bank buys unsold bonds from the DMO,
    it creates new reserves and credits the government's account at the
    private bank. This provides the government with a pool of spendable money.
    When the government then spends, it draws down this account first
    before creating new money.

    The Slight Difference: The only real difference is the institutional
    location of the account. In the real world, the Ways and Means Facility
    is the government's main account held directly at the Bank of England.
    For simplicity in ABMLP-X and to keep all private sector transactions
    flowing through the single `private bank`, the model government has been
    given a commercial bank account.
    """
    # Clear bonds
    unsold_bonds = self.model.newly_issued_bonds
    for bond in unsold_bonds:
	 # Clearing logic..
    self.model.newly_issued_bonds = []

    # Clear T-bills
    unsold_tbills = self.model.newly_issued_tbills
    for tbill in unsold_tbills:
	 # Clearing logic..
    self.model.newly_issued_tbills = []
```

## Portrait of a Model Run Past

<figure>
    ![alt text](https://www.data-reports.net/giltedged-info/model-images/abmlp-x-central-bank-directors.png)
    <figcaption>
        It's Monday the 3rd of June 1822 and passions run high at a meeting of the Bank's senior [Directors](https://www.data-reports.net/giltedged-info/model-gallery/abmlp-x-central-bank-directors.html). For one-hundred and three years the base rate held firm at 5 percent. With the gold standard recently restored, it was time for change. A recommended drop of 100 basis points. Who would inform the Governor?
    </figcaption>
</figure>

## Image of a Model Run Future

<figure>
    ![alt text](https://www.data-reports.net/giltedged-info/model-images/abmlp-x-central-bank-future-building.png)
    <figcaption>
        "Not an ordinary bank, but a great engine of state." It's November 2039 outside the newly constructed ABMLP-X central bank. Once again, the [Bank](https://www.data-reports.net/giltedged-info/model-gallery/abmlp-x-central-bank-future-building.html) stands ready to fulfil its original purpose, just as it did 345 years ago.
    </figcaption>
</figure>
