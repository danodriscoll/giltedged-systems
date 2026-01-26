---
sidebar_position: 1
hide_table_of_contents: true
---

# Sectoral Balance Sheet

This is a *snapshot* of the model's economy, showing the assets, liabilities, and net worth (equity) of each sector. The fundamental principle is that for every transaction, there is a *use* of funds (a minus sign, \-) and a corresponding *source* of funds (a plus sign, \+). For the system as a whole, every transaction must sum to zero, ensuring no money is created or destroyed unaccountably.

## Table Descriptors

* **Rows**: Each row represents a specific financial instrument (an asset, liability, or net worth).  
* **Columns**: Each column represents a core agent (or sector) in the model's economy.  
* **\+ (Asset)**: The sector in this column holds this instrument as an asset.  
* **\- (Liability / Equity)**: The sector in this column owes this instrument (a liability) or this is its net worth (equity).

| Instrument / Sector | Households | Firms | Private Bank | Fund Manager | Central Bank | Government | Total |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **1\. Reserves (CB)** |  |  | \+A: R |  | \-L: R |  | 0 |
| **2\. Cash (Physical)** | \+A: C | \+A: C\_f |  |  | \-L: C\_total |  | 0 |
| **3\. Deposits (Bank)** | \+A: D\_h | \+A: D\_f | \-L: D\_total | \+A: D\_fm |  | \+A: D\_g | 0 |
| **4\. Household Loans** | \-L: L\_h |  | \+A: L\_h |  |  |  | 0 |
| **5\. Working Capital Loans** |  | \-L: L\_f | \+A: L\_f |  |  |  | 0 |
| **6\. Dividend Payment Loan (Private Natural Monopoly Firms)** |  | \-L: L\_f | \+A: L\_f |  |  |  | 0 |
| **7\. Government Debt** |  |  | \+A: B\_b | \+A: B\_fm | \+A: B\_cb | \-L: B\_total | 0 |
| **8\. Equity Shares** |  | \-E\_all | \+A: S\_b | \+A: S\_fm |  |  | 0 |
| **9\. Fund Units** | \+A: U |  |  | \-L: U |  |  | 0 |
| **Net Worth (Equity)** | \-E\_h | \-E\_f | \-E\_b | \-E\_fm | \-E\_cb | \+E\_total | 0 |
| **Total** | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

<details>
<summary>Explanations of Financial Instrument (Rows)</summary>

1. Reserves (CB)  
   1. Definition: The "high-powered" money that the Private Bank holds in its own account at the Central Bank.
   2. Holders: This is an asset (+A: R) for the Private Bank.  
   3. Issuer: It is the corresponding liability (-L: R) of the Central Bank.  
2. Cash (Physical)  
   1. Definition: The physical banknotes and coins in the economy.  
   2. Holders: Physical cash is an asset for the non-financial private sector: Households (+A: C) and Firms (+A: C\_f).  
   3. Issuer: All physical cash is a liability (-L: C\_total) of the Central Bank.  
3. Deposits (Bank)  
   1. Definition: The electronic money held by agents in their commercial bank accounts.  
   2. Holders: Bank deposits are the primary liquid asset for Households (+A: D\_h), Firms (+A: D\_f), the Fund Manager (+A: D\_fm) (for its client custody accounts), and the Government (+A: D\_g).  
   3. Issuer: All deposits are a liability (-L: D\_total) of the Private Bank.  
4. Household Loans  
   1. Definition: Personal loans, such as for consumption smoothing or speculation, taken out by households.  
   2. Holder: This is an asset (+A: L\_h) for the Private Bank.  
   3. Issuer: This is a liability (-L: L\_h) for Households.  
5. Working Capital Loans  
   1. Definition: The revolving lines of credit that firms may use to finance their payroll.  
   2. Holder: This is an asset (+A: L\_f) for the Private Bank.  
   3. Issuer: This is a liability (-L: L\_f) for Firms.  
6. Dividend Payment Loans  
   1. Definition: The revolving lines of credit that firms, previously state-run enterprises, may use to finance their leveraged dividend payments.  
   2. Holder: This is an asset (+A: L\_f) for the Private Bank.  
   3. Issuer: This is a liability (-L: L\_f) for Firms.  
7. Government Debt  
   1. Definition: The stock of all outstanding government bonds and T-bills.  
   2. Holders: This debt is held as an asset by the Private Bank (+A: B\_b), the Fund Manager (+A: B\_fm), and the Central Bank (+A: B\_cb).  
   3. Issuer: This is the primary liability (-L: B\_total) of the Government.  
8. Equity Shares  
   1. Definition: The ownership claims on the future profits of public firms.  
   2. Holders: These shares are held as assets by the Fund Manager (+A: S\_fm) (on behalf of households) and the Private Bank (+A: S\_b) (as part of its market-making inventory).  
   3. Issuer: The shares are a liability (-E\_all) of the Firms themselves, representing their retained earnings or book value.  
9. Fund Units  
   1. Definition: A "wrapper" security. These are the shares in the Fund Manager's investment funds that households own.  
   2. Holder: These units are the primary investment asset (+A: U) of Households.  
   3. Issuer: The units are a liability (-L: U) of the Fund Manager, representing the total claim that households have on the fund's portfolio.

#### Net Worth (Equity)

* Definition: The balancing item for each sector (Assets \- Liabilities).  
* Holders: Net worth is a liability/equity for all private agents: households (-E\_h), firms (-E\_f), the private bank (-E\_b), the fund manager (-E\_fm), and the central bank (-E\_cb).  
* Issuer: The Government's balance sheet is the mirror image of the entire system. Its net position (+E\_total) is precisely equal to the sum of all other agents' net worth. This is the fundamental accounting identity of the model: Public Sector Debt \== Private Sector Wealth.

</details>
