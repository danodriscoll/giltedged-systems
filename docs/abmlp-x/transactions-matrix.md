---
sidebar_position: 2
hide_table_of_contents: true
---

# Transactions Flow Matrix

This matrix shows the *flows* of the economy \- the financial transactions that occur in a single step and cause the *stocks* on the balance sheet to change.

## How to Read This Table

* Rows: Each row represents a single, distinct type of transaction.  
* Columns: Each column represents an agent (or sector) in the model's economy.  
* \+ (Inflow): The agent in this column receives a payment.  
* \- (Outflow): The agent in this column makes a payment.  
* (A, L): An entry in parentheses describes a change to the agent's balance sheet (Assets, Liabilities).  
* E: Represents the agent's Net Worth or Equity.  
* D / c: Represents a deposit in a *current* account.  
* t: Represents a deposit in a *time* (savings or custody) account.

The sum of every single row is zero. This is the fundamental proof that the model is stock-flow consistent—no money is ever created or destroyed without a corresponding and equal entry elsewhere in the system.

| Transaction | Households | Firms | Private Bank | Fund Manager | Central Bank | Government | Total |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| 1\. Government Spending (Firms) |  | \+c | (+A: R, \+L: D\_f) |  |  | \- (G\_f) | 0 |
| 2\. Government Transfers (Households) | \+c |  | (+A: R, \+L: D\_h) |  |  | \- (G\_h) | 0 |
| 3\. Household Consumption | \-c / \-cash | \+c / \+cash |  |  |  |  | 0 |
| 4\. Wage Payment | \+c / \+cash | \-c / \-cash |  |  |  |  | 0 |
| 5\. FIRM PROFIT DISTRIBUTION |  |  |  |  |  |  |  |
|  A. PE Dividend (to Fund) |  | \-c | (-L: D\_f, \+L: D\_fm) | \+t |  |  | 0 |
|  B. PE Dividend (to Bank) |  | \-c | (-L: D\_f, \+E) |  |  |  | 0 |
|  C. SRE Remittance (to Government) |  | \-c | (-L: D\_f, \+L: D\_g) |  |  | \+c | 0 |
|  |  |  |  |  |  |  |  |
| 6\. Tax Payment (Private) | \-c | \-c | (-L: D, \+L: D\_g) | \-c |  | \+c | 0 |
| 7\. Tax Payment (Bank) |  |  | (-A: R, \-E) |  |  | \+R | 0 |
| 8\. Interest on Deposits | (+t, \+E) | (+t, \+E) | (+L: D, \-E) | \+t |  |  | 0 |
| 9\. Loan (Household) | (+c, \-L) |  | (+A: L\_h, \+L: D\_h) |  |  |  | 0 |
| 10\. Loan Repay. (Interest) | (-c, \-E) | (-c, \-E) | (-L: D, \+E) |  |  |  | 0 |
| 11\. Loan Repay. (Principal) | (-c, \+L) | (-c, \+L) | (-A: L, \-L: D) |  |  |  | 0 |
| 12\. Dividend Loan (Firm) |  | (+c, \-L) | (+A: L\_f\_div, \+L: D\_f) |  |  |  |  |
| 13\. FIRM *INITIAL PUBLIC OFFERING* (IPO) EVENT |  |  |  |  |  |  |  |
|  A. PE Capital Raising |  | (+t, \-E\_fee) | (+A: IPO, \+L: D\_f, \+E\_fee) |  |  |  | 0 |
|  B. SRE Privatisation |  | \-E\_all | (+A: IPO, \+L: D\_g, \+E\_fee) |  |  | \+c | 0 |
|  |  |  |  |  |  |  |  |
| 14\. Government Debt Issuance |  |  | (+A: B\_b, \+L: D\_g) |  | (+A: B\_cb, \+L: D\_g) | \-L: B | 0 |
| 15\. Debt (Bonds) Sale (Bank to FM) |  |  | (-A: B\_b, \+E) | (+A: B\_fm, \-t) |  |  | 0 |
| 16\. Debt (Bonds) Maturity (Private) |  |  | (-A: B\_b, \-L: D\_g) | (+t, \-A: B\_fm) |  | (+L: B, \-c) | 0 |
| 17\. Debt Maturity (CB) |  |  |  |  | (-A: B\_cb, \-E) | \+L: B | 0 |
| 18\. Coupon Payment (Private) |  |  | (+A: R, \+E) | \+t |  | \- (BL\_g) | 0 |
| 19\. PUBLIC SECTOR INTERNAL ACCOUNTING & REMITTANCE |  |  |  |  |  |  |  |
|  A. Gross Income (CB Coupon) |  |  |  |  | \+E (Income) | \-E (Expense) | 0 |
|  B. Gross Expense (Int. on Reserves) |  |  | (+A: R, \+E) |  | \-E (Expense) |  | 0 |
|  C. Net Profit Remittance |  |  | (+L: D\_g) |  | (-A: R, \-E) | \+c | 0 |
|  |  |  |  |  |  |  |  |
| 20\. Cash Withdrawal | \+cash, \-c |  | (-A: R, \-L: D\_h) |  | \+R, \-L: cash |  | 0 |
| 21\. Fund Investment | (-c, \+A: U) |  | (-L: D\_h, \+L: D\_fm) | (+t, \-L: U) |  |  | 0 |
| 22\. Fund Management Fee | \-E |  | (-L: D\_fm, \+L: D\_fm\_corp) | (+c\_corp, \-L: U) |  |  | 0 |
| 23\. Custody Fee |  |  | (-L: D\_fm, \+E) | \-t |  |  | 0 |

## Key Transactions (Flows)

To request a full explanation of the key transactions flows, please send an email to [daniel@giltedged.systems](mailto:daniel@giltedged.systems).
