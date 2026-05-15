---
sidebar_position: 3
hide_table_of_contents: false
---

# ABMLP-X Agents

## Government

The government agent in ABMLP-X is the fiscal authority; a currency-issuing entity that sets taxation and spending policy. Government is not a passive fiscal backdrop but the primary initiator of monetary reality within the system. It is the source from which net financial assets enter the economy and the coordinating force that shapes the rhythm of liquidity, production, and financial structure. Its behaviour is deliberately split between decision and execution, with policy intent formed at the government level and operationalised through the TreasuryLayer, ensuring that all fiscal actions remain transparent, observable, and fully stock-flow consistent.

The government determines the scale and direction of public expenditure. In historical (exogenous) mode, it may follow imported UK time-series data, anchoring the model in real-world fiscal trajectories. In projection (endogenous) mode, however, expenditure becomes adaptive. The government evaluates deviations from internal targets \- such as spending-to-output ratios \- and adjusts via mechanisms like `delta_expenditure`, altering flows at the margin rather than resetting levels. This preserves accounting continuity while allowing policy to respond dynamically to the evolving state of the model economy.

<details>
<summary>Godley & Lavoie Insight</summary>

Godley & Lavoie (G\&L) inform us: "A key feature of all the models presented up to now is that pure government expenditures are assumed to be exogenous.. Still, there is no reason to believe that pure government expenditures are impervious to what is going on in the rest of the economy. ..What we want to underline in the present context is the sensitivity of pure government expenditures to the budget position of the government. The advocates of the *Treasury view* argue that governments ought to reduce their expenditures and the fiscal deficit in a slowdown because by doing so, the government would provide room for the private sector to collect the funds and the savings necessary for its investment expenditures \- so that it does not crowd-out the private sector." (*G\&L pp. 160-165*)

Further, G\&L elucidate the initial negative effects of higher interest rates on the Government budget deficit:

"These effects that are eventually reversed in the early models where Government expenditures were impervious to the apparition of larger budget deficits. ..But this may not necessarily be so. Atul Sood (1999) has shown that high real interest rates lead to higher Government deficits in the short run, as must obviously be the case, but he has also shown that these higher interest rates often lead to reduced primary deficits, that is to higher primary surpluses." In other words, at some point, when the deficit gets too large, the Government will aim at controlling the public deficit, and to do so will reduce its pure government expenditures.

#### G\&L Government Budget Constraint

(G&L Equation 5.14)

$$
\Delta Bs \equiv Bs - Bs_{-1} = (G + rb_{-1} \cdot Bs_{-1} + BLs_{-1}) - (T + rb_{-1} \cdot Bcb_{-1}) - \Delta BLs \cdot PbL
$$

"The bills that need to be newly issued are equal to government expenditures, including its interest payments minus the government revenues \- taxes and central bank profits \- plus the value of the newly issued long-term bonds. Needless to say, when there is a government surplus, or when the government deficit is financed by new issues of long-term bonds, the change in Treasury bills will be negative and bills will be redeemed." (*G\&L p.146*)

</details>

Every act of government spending is a monetary event. When the government undertakes expenditure \- whether discretionary procurement from firms or non-discretionary transfers to households \- its spending is executed via the central bank by debiting the government's *Consolidated Fund* and crediting reserves to the private bank, which in turn credits deposits to the receiving agents. This process expands the balance sheet of the banking system and constitutes the foundational injection of liquidity into the economy. From this single act flow all subsequent dynamics: wages, consumption, profits, and financial accumulation. In this sense, the government defines the initial conditions of each step's economic possibility set, with the scale and timing of its spending shaping the liquidity environment within which all other agents operate.

### Taxation

Balancing this injection is the government's role in taxation, which functions as a liquidity drain. Taxes reduce private sector deposits and, critically, remove reserves from the banking system via the central bank settlement layer. This establishes taxation as a core stabilisation tool within the model's monetary circuit: not financing expenditure, but regulating the level of system liquidity and, by extension, the pressure within the model's financial markets.

### Debt Issuance

The third pillar of government behaviour is debt issuance, executed via the Debt Management Office (DMO). Government bonds and Treasury bills perform an asset transformation function. Debt issuance converts reserves (or deposits) into interest-bearing instruments, altering the composition of private sector portfolios and absorbing excess liquidity. The proceeds of issuance are credited to the government's *Consolidated Fund* at the central bank, which serves as the fiscal cash buffer. This account sits at the settlement layer of the system and records the government's net position as inflows from taxation and issuance are accumulated and drawn down through spending. While all private sector payments are executed via the private bank, the *Consolidated Fund* ensures that these flows remain coordinated and observable at the central bank level. It therefore acts not as a financing constraint, but as a cash management and accounting buffer, smoothing the timing of fiscal operations while preserving the underlying monetary mechanics: spending creates reserves, while taxation and primary debt issuance drain them.

Further, the government controls the split between bonds and T-bills, which has implications for duration risk, liquidity conditions, and the behaviour of other agents. In extreme configurations \- such as a zero-rate, T-bill-only regime \- this design choice reshapes the entire monetary system, as short-term government debt begins to function as near-money.

### Industrial Policy

The government also interacts with the productive economy through state-run enterprises (SREs) and privatisation pathways. It receives remittances from SRE profits and may convert public productive assets into private ones via IPO processes, influencing both fiscal flows and the distribution of financial claims across sectors.

The government does not operate in isolation. Its actions are deeply intertwined with the central bank, forming a consolidated public sector in operational terms. While institutionally distinct, their balance sheets co-evolve: government spending creates reserves; debt issuance and taxation modulate them; central bank operations stabilise the system when pressures emerge. This relationship becomes especially visible in edge cases explored by the model. That is, in situations of reserve scarcity where the sustainability of fiscal operations depends on the integrity of the settlement layer.

Simply, the government agent defines the monetary climate of ABMLP-X. It sets the pace of liquidity creation and destruction, shapes the structure of financial assets, and anchors the system's macroeconomic trajectory. What appears as economic growth, financial market behaviour, or even *volatility* is, at a deeper level, the unfolding consequence of the government's disciplined, accounting-consistent orchestration of the monetary system.

## Central Bank

The central bank is the monetary authority and settlement operator of the ABMLP-X system. It does not merely *set rates*. It constantly balances its competing mandates for price (inflation) stability, economic growth, and financial stability (bond yields). It maintains the integrity of the reserve system, enforces settlement finality, and acts as the ultimate stability backstop for both the government and the financial sector.

Like the government, the central bank will dutifully follow the historical time-series data it may consume in order to set its interest (base) rate for the economy. This is the central bank executing its exogenous logic. When consuming real-world time-series data, the central bank follows the imported **base rate path**. In this mode, it is effectively replaying observed policy decisions. Once a model run scenario enters projection mode, the central bank endogenous logic will take over. Endogenous logic settles into a complex hierarchy of priorities:

#### Endogenous Mode (Projection Logic)

Once the model enters projection mode, the central bank determines policy through a structured hierarchy of priorities:

#### 1\. Financial Stability (First Priority)

The central bank continuously monitors **bond market conditions**, particularly sharp movements in yields or stress indicators derived from issuance pressure and liquidity conditions. If instability is detected, it will:

* override all other objectives  
* stabilise conditions via rate policy and/or balance-sheet operations  
* ensure the continuity of **settlement and funding markets**

This reflects the principle that **a functioning financial system is a precondition for all other policy goals**.

#### 2\. Inflation Targeting (Primary Mandate)

If financial conditions are stable, the central bank targets **price stability**. It evaluates current inflation relative to target and **low-income wage growth** as a confirming signal. When both inflation and wage growth are elevated, policy tightening becomes more aggressive. This introduces a distribution-sensitive signal into monetary policy, rather than relying on inflation alone.

#### 3\. Employment (Secondary Mandate)

If inflation is within target bounds, the central bank adjusts policy based on labour market conditions:

* high unemployment → lower base rate  
* excessively tight labour market → raise base rate

This provides fine-tuning once macro stability is achieved.

### Settlement Authority and Reserve Discipline

At the core of the central bank's role in ABMLP-X is the maintenance of the settlement system through the management of reserves. Reserves are the central bank's liabilities and constitute the final means of payment between the state and the banking system. When the government spends, the central bank debits the *Consolidated Fund* and credits reserves to the Private Bank; when taxes are paid or government debt is issued, reserves are drained. Reserves function as the system's primary liquidity buffer, expanding and contracting in response to fiscal flows. 

The central bank does not passively observe this process \- it enforces its integrity. All settlement ultimately resolves through reserve balances, and no payment can be completed without sufficient reserves. Settlement failure is treated as a hard constraint, not a soft condition. All reserve debits are routed through a single authoritative path: `debit_bank_reserves(...)`. Where pressures emerge, such as in low-rate or bill-dominant regimes, the central bank may intervene through defined mechanisms, such as asset purchases or T-bill conversion facilities, to restore adequate reserve conditions. In this sense, the central bank is not merely a policy setter but the operational anchor of the entire monetary system, ensuring that the flow of funds initiated by the government can be consistently transmitted through the banking layer.

### Open Market Operations (Phase 1\)

The central bank includes a limited, yet evolving, open market operations (OMO) framework. OMO phase 1 is designed as a **liquidity backstop**, not a price-targeting tool. Key characteristics include:

* Activated under conditions of **market stress**  
* Provides liquidity against high-quality collateral (Long bonds and T-Bills)  
* Applies haircuts and penalty spreads  
* Enforces a **reserve floor discipline**

This mechanism ensures that:

* temporary liquidity shortages do not become systemic failures  
* the private bank can continue to function under stress  
* the system remains operational without distorting normal pricing dynamics

### Zero-Rate T-Bill Conversion Facility

In a *zero-rate, T-bill-only* regime, the model introduces a specialised institutional mechanism: A pre-settlement conversion facility that swaps bank-held T-bills for reserves. This facility activates only under strict gating conditions:

* base rate \= 0  
* bond issuance disabled  
* conversion explicitly enabled

Operating **inside the reserve debit path**, ensuring consistency and converting T-bills into (at par) reserves **only when required for settlement**. Conceptually, this is not a standard OMO operation. It represents a **structural liquidity transformation** mechanism necessary to maintain settlement in a system where government debt behaves as **near-money but not settlement money.** Without it, the system can become **reserve-constrained despite abundant T-bill holdings**, leading to settlement failure.

### Interest on Reserves (Floor System)

The central bank operates under a floor system framework, where reserves held by the private bank earn interest from the outset of the model run. That is, the policy rate is transmitted directly via the **interest paid on reserves**; reserves function as an **interest-bearing asset**, not a zero-yield residual. Monetary policy does not rely on reserve scarcity, but on administered rates.

Operationally:

* interest payments create income for the private bank  
* and a corresponding expense for the central bank  
* feeding back into bank equity and system-wide income flows

This design removes the need for a regime transition and reflects the modern monetary system, where:  
the central bank sets the price of reserves directly, rather than indirectly through quantity constraints.

### Buyer of Last Resort and Fiscal Backstop

The central bank acts as the **ultimate absorber of government debt** not taken up by the private sector. Operationally:

* unsold bonds and T-bills are purchased onto the central bank balance sheet  
* reserves are created in the process  
* the government receives spendable balances via the banking system

This mirrors the real-world **Ways and Means** / **QE-style functionality**, though implemented via:

* asset purchases rather than explicit overdraft facilities  
* integration with the model's unified settlement framework

### Conceptual Role in ABMLP-X

The central bank is, in its actions; the issuer and manager of settlement liquidity, the guardian of system solvency and the interface between fiscal operations and financial stability. The central bank ensures that the system can always settle \- but not without consequence. Through this lens, monetary policy is not just about influencing behaviour, but about maintaining the conditions under which the system can function at all. At a structural level, the central bank maintains:

* the bank reserve ledger (private bank reserves)  
* the government's consolidated fund balance  
* the stock of high-powered money  
* its own asset book (government bonds and T-bills)

## Firm

The Firm is the productive core of the service-based economy. Firms provide services that are at once produced and consumed. Firms receive revenue from both the government and households; hire and fire households (based on household profile and previous employment history); pay wages, calculate their corporate profits (*revenue \- wages \- interest*), pay corporation tax and under certain conditions \- distribute regular and special dividends.

### State-Run & Private Enterprises

At creation, firms are designated either: State-run enterprises (SREs), functioning as natural monopolies, or Private enterprises (PEs). As with all firms, an SRE's financial function is to generate a profit with a portion of that profit remitted directly to the Government as a new, non-taxation revenue stream. Profit earned by PEs may (subject to IPO) be paid as dividends to its ultimate owners \- either the households invested in fund manager funds or the private bank.

### Firm Employment Process

Employment follows a profile-aware, experience-weighted process. Firms prefer candidate households with stronger employment histories within their profile category. Employment, therefore, exhibits persistence and stratification. Households with stronger employment records become more employable, reinforcing inequality dynamics.

### Privatisation

When an initial public offering (IPO) occurs, ownership structure changes, but operational logic does not. The decision for a firm to IPO, that is, to issue share equity capital, applies if it is consistently profitable and has reached a significant scale relative to the model economy (GDP this step). For an SRE, the multi-stage privatisation decision includes a check to ensure that the move does not violate the government's SRE population floor policy, that is, that there are at least a given percentage of total firms in the model operating as an SRE:

```python
# Check if this privatisation would violate the government's industrial policy "floor".
if total_firms > 0 and (current_sre_count - 1) / total_firms < self.model.sre_population_floor:
    return self._ipo_block("SRE_BLOCKED_BY_FLOOR") # The IPO is blocked by gov policy floor.
```

### Monetary Policy & Shareholder Value

Firms may not be immune to the central bank's base rate decisions. If retained earnings are insufficient, they may borrow via dividend loans from the Private Bank. This introduces leverage dynamics and monetary transmission sensitivity: rising base rates increase interest expense, affecting shareholder value and firm solvency. Thus, monetary policy affects firms through leveraged dividend expectations. Specifically, the central bank's monetary policy transmission mechanism is one where variable loan repayments might increase or decrease if:

* A firm is drawing on a working capital facility arranged with the private bank. And / or,  
* A firm, previously an SRE (natural monopoly) has undergone an IPO and is now operating a *highly leveraged* dividend policy. These firms set a much higher dividend target (also based on the *retained earnings*) and, if their available cash is not enough, they will actively borrow from the private bank (via a *dividend loan*) to meet shareholder expectations.

## Household

Household behaviours are both nuanced and profile-dependent. That is, they are economically heterogeneous actors whose behaviour depends on their wealth profile, employment history, and financial position. Households may undertake a number of activities in every model step. They strive for paid employment, pay tax, invest and consume.

### Tax Accounting, Strategies & the Tax Gap

A Two-Stage Tax Calculation: The household has a two-stage accounting process that sees it first calculate its disposable income based on its regular, predictable wages, interest and transfers received. At the end of the step, a household will calculate the additional tax due on its investment income, that is, any capital gains and dividends it may have received.

Households calculate their disposable income for the step. However, the final transfer of taxation owed to the government is not a passive affair, a simple settlement process. If the mood takes them, Households might seek to lower their full taxation liability by employing strategies that include both *legal avoidance* and \- at a lower probability \- *illegal evasion*. This is a strategic decision dependent on wealth profile, for which there are financial penalties for a household that is caught engaging in illegal behaviour. The result may lead to a 'tax gap', something that emerges from behaviour rather than being imposed exogenously.

### Financial Investment Decisions

#### Liquidity Management

Households cannot invest what they do not have. The logic of household investment first requires that each household check if it needs to sell financial assets in order to meet its cash (liquidity) requirements. If their current balances are insufficient to meet obligations \- consumption, taxation, or debt service, they will look to redeem existing fund units.

#### Structural Allocation

Each household has a baseline asset mix across the *equity fund*, *bond fund*, *money market fund* types offered. This allocation reflects risk tolerance and wealth profile. Passive savings are deployed according to this structural rule and do not fluctuate wildly from month to month. On top of structural allocation sits a behavioural tilt. If a household is of either an *established* or *high net worth* profile, it may \- if happy with the trajectory and momentum of its recent wealth \- temporarily overweight risk assets. That is, they may lean into equity exposure, looking to invest in firm equity shares \- in an IPO boom \- or will be *bullish* on long bond holdings if the fund manager itself is signalling that it is in a *yield seeking* frame of mind. Conversely, deteriorating conditions prompt de-risking toward safer assets. This tilt does not replace the structural allocator; it modulates it.

#### Consumption Credit

Household borrowing is not monolithic. Subsistence credit exists to smooth consumption for lower-wealth *precarious* and *accumulator* households when liquidity falls short. That is, they may apply for a *consumption loan* from the private bank to smooth their consumption needs. Consumption loans are tightly constrained and priced accordingly. Discretionary credit, by contrast, allows *established* or *high-net-worth* households to leverage their consumption \- they may borrow to increase their consumption subject to profile-specific leverage limits and pricing.

#### Consumption Spending

Marginal propensity to consume depends on wealth and income, allowing the consumption function itself to evolve over time. Households split their spending, that is, their *profile* sensitive marginal propensity to consume from current income as well as existing wealth, into two distinct categories, simulating a simple dual economy:

1. 60 percent is allocated to *natural monopolies*, the firms initially created as *state-run enterprises* (SREs). This simulates a form of captive spending on services like water, energy and transportation.  
2. The remaining portion of spending is allocated by way of random selection to firms initially created as *private enterprises* (PEs).

Last, but by no means least, every household will rate the government agent, that is, it will say that it either *approves* or *disapproves* of the government based on two factors; its current wealth relative to one of its household *profile* peers and how often it has been employed in a defined number of recent steps.

## Private Bank

The private bank is a profit-seeking entity that facilitates almost every financial transaction in the model economy. All electronic financial flows (except for internal central bank operations) pass through its balance sheet. The private bank is the financial core of the ABMLP-X system. At present, the bank pays out a portion of its after-tax profit as dividends to the ultimate owners of capital (the households). Dividends are distributed to each household in proportion to their total private sector investment wealth (held by the fund manager).

### Actions and Behaviours

A summary of the private bank's actions and behaviours in no particular order:

The private bank acts as the primary dealer for government debt. It operates within the settlement framework defined by the central bank. When the DMO issues bonds or Treasury bills, the private bank acquires these instruments by exchanging reserves (or existing deposits for secondary market purchases) for government securities. This transaction represents an asset swap: the bank reduces its reserve position or deposit liabilities while increasing its holdings of government debt. The proceeds of primary issuance are credited to the government's *Consolidated Fund* at the central bank. In ABMLP-X, because the private bank is not *funding* the government, so to speak, it follows that model bond yields aren't then the *price of funding* \- they're the price of absorbing liquidity and duration.

Following primary acquisition, the private bank intermediates the distribution of government debt to the wider financial system. It sells bonds and T-bills to the fund manager earning a small, high-volume *primary dealer spread* through market-making and inventory management. In this role, the bank provides liquidity and price continuity rather than originating funding. Its balance sheet reflects a dynamic inventory of government securities, deposits, loans, and reserves, all of which must remain consistent with the constraints of central bank settlement.

In this sense, the private bank sits between the central bank's reserve system and the portfolio decisions of private agents. It does not create the net financial assets (outside money) that enter the system \- that role belongs to the government \- but it plays a critical role in redistributing those assets, managing liquidity, and ensuring that financial flows are transmitted smoothly across the economy. In short, the ABMLP-X private bank transforms liquidity created elsewhere into tradable financial assets.

The bank is, however, the sole source of all private credit (inside money) in the system. It creates new deposits (money) whenever it issues a loan. The bank currently issues two types of loan. Interest income accrues from the spread between funding cost and lending rate, its *base rate* and the profile sensitive (variable) rate it will charge on these loans.

* Subsistence and discretionary loans to households for the purposes of increasing the financial ability to consume.  
* A *dividend loan*, in the form of a single, ongoing, variable-rate revolving line of credit, may be issued to eligible *natural monopoly* firms to finance their shareholder dividend payments. Of course, this will mean that the bank's interest income immediately rises when the central bank raises the *base rate*.

The bank also functions as a full-service investment bank for the corporate equity market:

* As the sole underwriter for all firm IPOs, the bank will first evaluate the firm's request, and if it approves, take on the risk of the offering. The bank buys the firm's new shares (an asset) in exchange for a new cash deposit (a liability), earning a dynamic, wage-indexed *underwriting fee* for this service. It also routes the IPO proceeds, sending them to the government in a *privatisation* event (for a *state-run enterprise*) or to the firm itself in a *capital raising* event (for a *private enterprise*).  
* Subsequently, the bank acts as market maker for the secondary equity market, providing liquidity by standing ready to buy shares from the fund manager (at a *bid* price) and sell shares to the fund manager from its own inventory (at an *ask* price), earning an *equity-dealer spread* on the transactions.

The bank operates as *custodian* to the fund manager. That is, it holds the fund manager's client cash in special custody accounts. In a multi-stage process, the bank charges the fund manager a *custody fee* for this service, but will also pay a small, lower-than-market *custody interest rate* on the cash held.

Finally, the bank is responsible for initiating all default and bankruptcy procedures. The bank's `process_loan_repayments` method manages the repayment process, tracks missed payments, and calculates and records the interest income for itself and the interest expense for its clients. Loan repayment logic tracks missed payments, defaults, and recovery. Household bankruptcies are handled via coordinated liquidation of fund units. Firm bankruptcies restructure balance sheets. If the bank’s own equity falls below zero, it will request a bailout from the central bank.

## Fund Manager

If households represent a distributed economic agency in ABMLP-X, the fund manager represents financial intermediation. It aggregates household savings into three collective vehicles: an *equity fund*, a *bond fund*, and a *money market fund* (short duration T-bills). Each fund operates as a distinct sleeve with its own portfolio, custody cash accounts (at the private bank), and net asset value (NAV). The separation of sleeves is strict. Assets and cash belonging to one sleeve cannot be used to support another. This *sleeve purity* ensures that risk is not silently redistributed across investors.

### Fund Allocations

At the beginning of each step, the fund manager processes redemptions. Households wishing to exit positions are paid from sleeve cash. If cash is insufficient, assets within that sleeve are liquidated. Equity sells equity. Bonds sell bonds. Money market funds sell T-bills. There is no cross-subsidisation.

Only once liquidity demands are satisfied does investment occur. Cash held in custody accounts is deployed according to sleeve-specific logic. In the bond sleeve, investment ordering depends on strategy \- favouring duration (bonds) in yield-seeking modes, shortening duration in defensive *modes* (see [On Mode Selection](#on-mode-selection)). In the money market sleeve, T-bills are accumulated. In the equity sleeve, IPO participation and secondary market purchases are executed subject to available inventory.

#### On Mode Selection

Strategy and execution are deliberately separated. The manager first determines its bond stance: whether to favour duration or shorten it. This decision is influenced by three layers. A liquidity shock triggers immediate defensiveness. In the absence of a crisis, the manager evaluates the statistical relationship between fiscal balances and interest rate movements. Specifically, it examines the historical correlation between government deficits (aka, the *fiscal balance*) and the central bank's interest (base) rate response. If the signal is weak, it falls back to a conservative trend filter. Strategy alters purchasing bias.

### Fees

The fund manager's profit derives solely from fees in a two-part regime. A monthly fixed fee is charged per investing household, with optional annual uplift. An annual assets-under-management fee is charged once per model year at the sleeve level. Fees are funded from sleeve cash, and if necessary, sleeve-specific assets are liquidated. No sleeve subsidises another.

All other income \- dividends, bond coupons, custody interest \- belongs to the unit holders and are passed on to the households that have invested in the manager's funds via a higher *net asset value* (NAV). The fund manager calculates a NAV per unit as total market value of sleeve assets plus full custody cash \- including both current and time balances held at the private bank \- divided by units outstanding. This prevents liquidity mismeasurement when operational cash temporarily resides outside savings accounts.

The fund manager calculates gross income per unit for each sleeve and reports the proportional share to households. The payment of capital gains taxation, if any, remains the responsibility of each individual household. The fund manager is an information intermediary, not a withholding authority. The fund manager's own corporate tax obligation is paid only on management fee income. Profit is transparent and isolated from client asset performance.

## Facilitator Agents

These are simpler, more mechanical agents that provide the system *plumbing* that makes the model work.

* The **debt management office (DMO)**: It receives a debt issuable mandate from the government, the *deficit* for the step, if there is one and translates it into a supply of new long-term bond and T-bill objects, which it offers to the private bank (the *primary dealer* in the model).
* The **credit agency** is a passive agent queried by both firms and the private bank. It is the source of truth for all household employment records, that is, their employment history and loan default histories, which are crucial inputs for both firm hiring and bank lending decisions.  
* The **stock exchange's** sole job is to calculate *market prices* for all public firms, that is, firms that have undergone an IPO. It acts as the central source of price information that other agents use to value their assets and make their trading decisions.  
* The **debt recovery** agent is an internal agent of the private bank that handles the liquidation of assets from households who have defaulted on their loans. For each defaulted loan, it instructs the fund manager to redeem the defaulter's fund units, then seizes the resulting cash from the defaulter's bank account.

## Theia

<figure>
    ![alt text](https://www.data-reports.net/giltedged-systems/images/theia_model_orchestration.png)
    <figcaption>
        The Model Director: [Theia](https://www.data-reports.net/giltedged-systems/model-gallery/abmlp-x-theia.html), Goddess of Sight and Vision, [https://en.wikipedia.org/wiki/Theia](https://en.wikipedia.org/wiki/Theia).        
    </figcaption>
</figure>

Theia is not an agent within the economy. Theia is the main model step; orchestrating the behaviours and functions of all class agents in a strict order, ensuring the play unfolds in the correct sequence, that is, financial flows are logical and stocks are updated correctly.

### Main Model Step

The sequence outlined in simplified form:

Phase 1: Policy Setting: Ask the government and central Bank what their *endogenous* (internally-decided) policies would be. Check if the model is in *historical* or *projection* mode and apply the correct policies for the step. Phase 2: Reset: Wipes all *end-of-day* trackers for every agent back to zero, ensuring a clean slate for the new step (period). Phase 3: Service Provision & Payroll: The Government executes its spending and debt servicing, and firms run their main operations, which includes making employment decisions and executing their payroll.

Phase 4: Financial Markets: Theia orchestrates the model agents financial transactions in a specific order: All bond and stock prices are updated; the private bank runs its operations (issuing new loans and acting as a *primary dealer*); the debt recovery agent processes defaults; the central bank clears the primary debt market; and finally, households and the fund manager execute all their investment and portfolio management decisions. Phase 5: Consumption: Now that households have received wages and / or investment incomes (for those employed and having financial wealth), Theia instructs them to determine their spending money and consumption requirements. This is the phase that provides firms with their consumer revenue.

Phase 6: Final Accounting: In the *end-of-day* bookkeeping, Theia instructs every agent to run their final accounting methods where profits, final taxes, and dividends are all calculated and paid. Phase 7 & 8: History & Data: All agents are instructed to record their final state to their *memory* (trackers), and the data collector takes the final snapshot of the entire economy for the model's output.