---
sidebar_position: 1
---

# A Simple System

I built my first simple Godley inspired computational (agent-based) monetary system model (ABMSIM) in late 2016\. It was 2018 by the time I watched an Interview *on the life and work of Wynne Godley*. Two hours of wonderful content about the life of the man simply raced by. Godley discussed his family, his early career as a musician and of course, his work as economist. Towards the later part of the interview the discussion turned to the emerging \- at the time of the interview \- global financial crisis. Godley mentions briefly the response of central banks; in his opinion, central banks were moving too slowly. And then he went quiet; he paused in thought for a few seconds before saying:

> "... the world’s problems of which are serious will not be solved by market forces alone or even principally by them. *Something else* has to be done." \- Wynne Godley, *Interview on the life and work of Wynne Godley*. Filmed in May 2008 by Alan Macfarlane and edited by Sarah Harrison. Apollo \- University of Cambridge Repository. [Video](http://www.dspace.cam.ac.uk/handle/1810/198374) Part 2, \[01:03:10 \- 01:03:30\].

I listened intently to the Godley interview. What did he mean when he said central banks were moving too slowly? Moving how? I was intrigued. What had he meant when he said "..*Something else* has to be done." Maddeningly, he wasn't asked to expand on his extraordinary statement. I can only guess, bound by my nascent [reading](/reading) and learning in the years that followed, at the change Godley was alluding to.

## A Money Reinvented

The long history of a positive base rate, long bonds and Treasury bills regime:

> "In 1663, William Killigrew drafted a proposal for Parliament. It claimed to explain ‘*how this nation may be vast gainers by all the sums of money given to the Crown.*’ .. In contrast to the centuries during which it had charged for the money, the (English) government would now pay for the currency it enabled. \- As a conceptual matter, the new system raises an interesting issue, left aside here. It seems that the payment of interest on debt that is later canceled means that the system will never ‘clear’. In that sense, there appears to be an inflationary aspect to the modern strategy of liquidity creation, all else equal." \- DESAN, C. (2015). Making Money: Coin, Currency, and the Coming of Capitalism. Oxford University Press. p. 295-296

## New Bottles Old Wine

> "*The state has become a collateral factory for modern financial systems.*" Supposedly said by financial economist Alberto Giovannini.

What if it chose to be *something else*? Operationally close but not identical. An alternative zero base rate monetary regime with no bonds, only Treasury bills is explored:

**Alternative Regime Insight**: A steady-state T-bills only macro equilibrium does not imply system equilibrium for reserve balances. Even as the system achieves a steady state, the private bank can be in a slowly destabilising reserve-drain regime. Unless a mechanism exists to manage reserve scarcity before it becomes operationally binding, the private bank can fail to meet its routine settlement obligations. In short, we cannot remove bonds and run a zero base rate T-bills only system without specifying how reserves are maintained.

**An Operational Conversion Mechanism**: The private bank should be able to convert or finance T-bills into reserves before settlement failure occurs. That is, with the monetary system organised around very short (one month) duration T-bills, the central bank may operationally maintain settlement liquidity by converting private bank held T-bills into reserves outright.

### Balance Sheet Dynamics

* The Private Bank:  
  * Oscillates between T-bills and reserves.  
  * Never gets pinned at zero reserves.  
* Central Bank:  
  * Before a Private Bank reserve-draining settlement would fail, the Central Bank purchases (at par) T-bills to the amount needed to preserve settlement continuity.  
  * Accumulates T-bills over time (unless reversed in a future model enhancement)  
* Government:  
  * Mandates the debt management office (DMO) to continuously issue T-bills.

### Flow dynamics

The following `pseudo-code` offers a simple representation of how to manage the **reserve-draining operations** that matter, especially taxation settlement and primary auction settlement:

```py
def manage_reserve_settlement(required_debit, private_bank):
    """
    Implements the flow dynamics for reserve-draining operations 
    (e.g., taxation or primary auction settlement) to ensure liquidity.
    """
    
    # 1. Compute required reserve debit.
    # (The required_debit is already computed and passed to the function)
    
    current_reserves = private_bank.get_reserve_balance()
    
    # 2. Check if debit would breach zero.
    if required_debit > current_reserves:
        shortfall_amount = required_debit - current_reserves
        
        # 3. If yes, convert sufficient Private Bank held T-bills into reserves.
        # This calls the Central Bank to purchase T-bills from the Private Bank.
        reserves_gained = private_bank.convert_tbills_to_reserves(shortfall_amount)
        
        new_reserve_balance = current_reserves + reserves_gained
        
        # 4. Re-check reserve sufficiency
        if new_reserve_balance >= required_debit:
            # 5. Execute original settlement
            private_bank.execute_reserve_debit(required_debit)
            settlement_status = "Success"
        else:
            # 6. Fail only if still infeasible
            settlement_status = "Fail: Reserves Infeasible"
            private_bank.log_infeasibility(required_debit)
    else:
        # 5. Execute original settlement (Reserves are sufficient)
        private_bank.execute_reserve_debit(required_debit)
        settlement_status = "Success"
    
    return settlement_status
```

## Steady State Output

The system is a zero base rate regime in which the central bank T-bill purchase mechanism converts private bank held T-bills into *reserves* to preserve settlement functionality.

The [dashboard](https://www.data-reports.net/giltedged-systems/model-dashboard/zero-rate-t-bills-only-steady-state.html) presents an ABMLP-X test run scenario containing just two households and two firms. The government spends 20 units per step, setting the rate of taxation at 20 percent. In line with Godley-consistent lagged financing, the DMO subsequently issues one-month duration Treasury-bills to an amount that fully funds the government’s consolidated account at the central bank. The private bank purchases Treasury-bills from the DMO. Firms are funded, wages paid and taxation returned. In a model where everything comes from somewhere and every goes somewhere, a simple system moves forward for 170 steps. A steady macro equilibrium state is achieved in a managed reserve-settlement regime.