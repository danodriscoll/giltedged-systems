---
sidebar_position: 2
hide_table_of_contents: true
---

# ABMLP-X Accounting

## Balance Sheet

This is a *snapshot* of the model's economy, showing the assets, liabilities, and net worth (equity) of each sector. The fundamental principle is that for every transaction, there is a "use" of funds (a minus sign, \-) and a corresponding "source" of funds (a plus sign, \+). For the system as a whole, every transaction must sum to zero, ensuring no money is created or destroyed unaccountably.

## How to Read This Table

- **Rows**: Financial instruments (stocks)  
- **Columns**: Model sectors (agents)  
- **\+ (Asset)**: The sector holds this instrument  
- **− (Liability / Equity)**: The sector issues or owes this instrument  
- **Total column \= 0**: Ensures full accounting consistency

## Balance Sheet

| Instrument / Sector | Households | Firms | Private Bank | Fund Manager | Central Bank | Government | Total |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **1\. Reserves (CB)** |  |  | \+A: R |  | −L: R |  | 0 |
| **2\. Cash (Physical)** | \+A: C | \+A: C\_f |  |  | −L: C\_total |  | 0 |
| **3\. Deposits (Bank)** | \+A: D\_h | \+A: D\_f | −L: D\_total | \+A: D\_fm |  | \+A: D\_g | 0 |
| **4\. Household Loans** | −L: L\_h |  | \+A: L\_h |  |  |  | 0 |
| **5\. Firm Loans (Working Capital)** |  | −L: L\_f | \+A: L\_f |  |  |  | 0 |
| **6\. Dividend Loans (Firms)** |  | −L: L\_f\_div | \+A: L\_f\_div |  |  |  | 0 |
| **7a. Government Bonds** |  |  | \+A: B\_b | \+A: B\_fm | \+A: B\_cb | −L: B\_total | 0 |
| **7b. Treasury Bills (T-Bills)** |  |  | \+A: T\_b | \+A: T\_fm | \+A: T\_cb | −L: T\_total | 0 |
| **8\. Equity Shares** |  | −E\_all | \+A: S\_b | \+A: S\_fm |  |  | 0 |
| **9\. Fund Units** | \+A: U |  |  | −L: U |  |  | 0 |
| **Net Worth (Equity)** | −E\_h | −E\_f | −E\_b | −E\_fm | −E\_cb | \+E\_total | 0 |
| **Total** | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

### Key Interpretative Notes

### 1\. Public Sector Consolidation

The Government and Central Bank together form the **consolidated public sector**. The combined liabilities of this sector \- reserves, cash, and government debt \- constitute the **net financial assets of the non-public sector**.

### 2\. Central Bank Holdings of Government Debt

Government bonds and T-bills held by the Central Bank:

- Are **assets of the CB**  
- But represent **intra-public-sector claims**

These should be **consolidated out** when analysing private sector wealth.

### 3\. Treasury Bills vs Bonds

The model now distinguishes:

- **Bonds** → duration-bearing assets  
- **T-bills** → short-term, liquidity-like instruments

This distinction is critical for:

- liquidity dynamics  
- reserve pressure  
- monetary regime behaviour

### 4\. T-Bills as Near-Money (Zero-Rate Regime)

Under certain conditions (e.g. zero base rate): T-bills can become **functionally equivalent to reserves** This is operationalised via a Central Bank facility (see Transactions Matrix).

### 5\. Equity Interpretation

- Equity represents **net worth balancing items**  
- Firm equity corresponds to retained earnings / ownership claims  
- Bank and CB equity reflects accumulated profit/loss

## Transactions Flow Matrix

This matrix shows the flows of the economy - the financial transactions occurring in a single step. These flows update the balance sheet stocks.

### How to Read This Table

* Rows: Each row represents a single, distinct type of transaction.  
* Columns: Each column represents an agent (or sector) in the model's economy.  
* \+ (Inflow): The agent in this column receives a payment.  
* \- (Outflow): The agent in this column makes a payment.  
* (A, L): An entry in parentheses describes a change to the agent's balance sheet (Assets, Liabilities).  
* E: Represents the agent's Net Worth or Equity.  
* D / c: Represents a deposit in a *current* account.  
* t: Represents a deposit in a *time* (savings or custody) account.  
* **Total column \= 0**: Ensures full accounting consistency

| Transaction | Households | Firms | Private Bank | Fund Manager | Central Bank | Government | Total |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **1\. Government Spending (Firms)** |  | \+c | (+A: R, \+L: D\_f) |  | \+L: R | −G\_f | 0 |
| **2\. Government Transfers (Households)** | \+c |  | (+A: R, \+L: D\_h) |  | \+L: R | −G\_h | 0 |
| **3\. Household Consumption** | −c | \+c |  |  |  |  | 0 |
| **4\. Wage Payment** | \+c | −c |  |  |  |  | 0 |
| **5\. Tax Payment (Private Sector)** | −c | −c | (−L: D, \+L: D\_g) | −c | −A: R | \+c | 0 |
| **6\. Tax Payment (Bank)** |  |  | (−A: R, −E) |  |  | \+R | 0 |
| **7\. Government Debt Issuance (Primary)** |  |  | (−A: R / −L: D, \+A: B/T) |  | (+A: B/T, \+L: R) | −L: B/T | 0 |
| **8\. Bond/T-Bill Sale (Bank → FM)** |  |  | (−A: B/T, \+E) | (+A: B/T, −t) |  |  | 0 |
| **9\. Bond/T-Bill Maturity (Private)** |  |  | (−A: B/T, −L: D\_g) | (+t, −A: B/T) |  | (+L: B/T, −c) | 0 |
| **10\. Bond/T-Bill Maturity (CB)** |  |  |  |  | (−A: B/T, −E) | \+L: B/T | 0 |
| **11\. Coupon Payments (Private)** |  |  | (+A: R, \+E) | \+t |  | −BL\_g | 0 |
| **12\. Interest on Reserves** |  |  | (+A: R, \+E) |  | −E |  | 0 |
| **13\. Loan Creation (Household/Firm)** | (+c, −L) | (+c, −L) | (+A: L, \+L: D) |  |  |  | 0 |
| **14\. Loan Repayment (Interest)** | (−c, −E) | (−c, −E) | (−L: D, \+E) |  |  |  | 0 |
| **15\. Loan Repayment (Principal)** | (−c, \+L) | (−c, \+L) | (−A: L, −L: D) |  |  |  | 0 |
| **16\. Fund Investment** | (−c, \+A: U) |  | (−L: D\_h, \+L: D\_fm) | (+t, −L: U) |  |  | 0 |
| **17\. Fund Fee** | −E |  | (−L: D\_fm, \+L: D\_fm\_corp) | (+c, −L: U) |  |  | 0 |
| **18\. Cash Withdrawal** | (+cash, −c) |  | (−A: R, −L: D) |  | (+R, −L: cash) |  | 0 |
| **19\. Zero-Rate T-Bill Conversion** |  |  | (−A: T\_b, \+A: R) |  | (+A: T\_cb, \+L: R) |  | 0 |

### Key Flow Interpretations

### 1\. Government Spending

Government spending:

- **creates reserves (CB liability)**  
- **creates deposits (bank liability)**

This is the primary **liquidity injection mechanism**.

### 2\. Taxation

Taxation:

- reduces deposits  
- **drains reserves from the banking system**

Tax is a **reserve drain**, not just an internal transfer.

### 3\. Government Debt Issuance

Debt issuance is:

- a **reserve drain**  
- an **asset swap**:  
  - reserves/deposits → bonds or T-bills

### 4\. Interest on Reserves

Interest on reserves: is paid by the Central Bank

- increases:  
  - bank reserves  
  - bank equity

This is a core **monetary policy transmission channel** in the model.

### 5\. Zero-Rate T-Bill Conversion Facility

In a zero-rate, T-bill-only regime:

- banks may exchange T-bills for reserves  
- Central Bank balance sheet expands

This mechanism preserves **settlement functionality** under reserve scarcity.

### 6\. Reserve Cycle Insight

The model naturally generates a liquidity cycle:

1. Government spending → **reserves increase**  
2. Tax \+ issuance → **reserves decrease**  
3. Conversion / CB actions → **reserves stabilised**

Much observed *market volatility* emerges from this mechanical cycle.

### 7\. Timing Note

Currently, within a model step: spending, taxation and debt issuance occur together. Future refinements may separate these temporally to better capture liquidity dynamics.
