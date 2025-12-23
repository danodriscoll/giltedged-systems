---
sidebar_position: 7
---

# Private Bank Class Agent

The private bank is a profit-seeking entity that facilitates almost every financial transaction in the model economy. All electronic financial flows (except for internal central bank operations) pass through its balance sheet.

## The Bank Dominates the Financial District

<figure>
    ![alt text](https://www.data-reports.net/giltedged-info/model-images/abmlp-x-private-bank-headquarter.png)
    <figcaption>
        The [headquarter](https://www.data-reports.net/giltedged-info/model-gallery/abmlp-x-private-bank-headquarter.html) of the private bank stands proud. Public and private sector agents interact. The bank's actions and behaviours are at once both essential and ominous for the model monetary system.
    </figcaption>
</figure>

## Actions and Behaviours

A simplified summary of the private bank's actions and behaviours in no particular order:

* The bank acts as the *primary-dealer* for all government debt, that is, it will purchase the long-term bonds and treasury bills issued by the debt management office. In short, it will pay for a new debt asset by creating a new, equal liability (a deposit for the government). Subsequently, the bank will sell its portfolio of government debt instruments on to the fund manager for a small, high-volume *primary dealer spread*.

* The bank is the source of all private credit in the system. It creates new deposits (money) whenever it issues a loan. The bank currently issues two types of loan. It earns a profit on the *spread* between its *base rate* and the profile sensitive (variable) rate it will charge on these loans:  
  * A *consumer loan* may be issued to a household for the purpose of either leveraging the purchase of financial assets, as in the case of wealthier households, or may be issued to a less wealthy household in order to smooth its consumption spending requirements.  
  * A *dividend loan*, in the form of a single, ongoing, variable-rate revolving line of credit, may be issued to eligible *natural monopoly* firms to finance their shareholder dividend payments. Of course, this will mean that the bank's interest income immediately rises when the central bank raises the *base rate*.  
  * The bank's `process_loan_repayments` method is the *master conductor* for the entire credit system. It is the single, authoritative method that manages the repayment process, tracks missed payments, and correctly calculates and records the interest income for itself and the interest expense for its clients.  
* The bank also functions as a full-service investment bank for the corporate equity market:  
  * As the sole underwriter for all firm IPOs, the bank will first evaluate the firm's request, and if it approves, take on the risk of the offering. The bank buys the firm's new shares (an asset) in exchange for a new cash deposit (a liability), earning a dynamic, wage-indexed *underwriting fee* for this service. It also correctly routes the IPO proceeds, sending them to the government in a *privatisation* event (for a *state-run enterprise*) or to the firm itself in a *capital raising* event (for a *private enterprise*).  
  * Subsequently, the bank acts as market maker for the secondary equity market, providing liquidity by standing ready to buy shares from the fund manager (at a *bid* price) and sell shares to the fund manager from its own inventory (at an *ask* price), earning an *equity-dealer spread* on the transactions.

* The bank operates as *custodian* to the fund manager. That is, it holds the fund manager's client cash in special custody accounts. In a multi-stage process, the bank charges the fund manager a *custody fee* for this service, but will also pay a small, lower-than-market *custody interest rate* on the cash held.

* Last, but by no means least, the bank is responsible for initiating all default and firm bankruptcy proceedings in the model. If the bank's own equity falls below zero, it is the agent that requests a bailout from the central bank.
