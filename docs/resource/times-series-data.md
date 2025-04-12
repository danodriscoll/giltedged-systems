---
sidebar_position: 1
---

# Time-Series Data

## Government Expenditures

- UK General Government: Final consumption expenditure: CP SA | [ONS](https://www.ons.gov.uk/economy/grossdomesticproductgdp/timeseries/nmrp/).
- A millennium of macroeconomic time-series data: BoE [Research Datasets](https://www.bankofengland.co.uk/statistics/research-datasets).

### Financial Calendar Year

The Office for National Statistics (ONS) defines the UK’s financial quarters based on the calendar year:
- Q1: January to March
- Q2: April to June
- Q3: July to September
- Q4: October to December

These quarterly divisions are used in ONS publications to report economic statistics.

It's important to note that while the ONS uses calendar quarters for economic reporting, the UK government operates on a financial year that runs from April 1 to March 31 of the following year. This financial year is also divided into four quarters:
- Q1: April to June
- Q2: July to September
- Q3: October to December
- Q4: January to March

## From Quarterly to Monthly Expenditure Time-Series

To match the monthly (base) rates offered by the Central Bank, ONS provided quarterly Government expenditure time-series are [exploded](https://www.data-reports.net/giltedged-info/explode_quarterly_values.html) into a monthly data series.

## Clarity on Real-world Expenditure Time-Series

Fragments of an email exchange between myself (Dan) and a member of the ONS GDP team about which UK Government expenditure time-series would be most appropriate to use in my model.

### Email Fragment: Sent to ONS

... I have two questions regarding the following UK government expenditure time-series:

1. UK General Government Final Consumption Expenditure (GGFCE) (Current Prices Seasonally Adjusted)
2. Total Gross Fixed Capital Formation (Current Prices Seasonally Adjusted)

First, should I combine these two series to get total government spending? (I was concerned that I might be missing another significant series.) 

Second, I understand that the components of UK GGFCE (CPSA) are as follows: Health, Education, Social Protection, Justice & Fire, Military Defence and Other. Does *Other* here include central government interest payments on public sector debt?

### Email Fragment: Received from ONS

... It's taken me a little time to compile answers to your questions from other members of ONS with more knowledge on the subject you are querying.

In terms of the question on GGFCE/Fixed capital Formation, for comparability, we recommend using only the 'General Government Final Consumption Expenditure (Current Prices Seasonally Adjusted)' series for government spending. Although you are correct that there is government investment in 'Total Gross Fixed Capital Formation (Current Prices Seasonally Adjusted)' it would not be correct to simply sum the two series.

For your second query, *Other* would not include interest payments. The public sector debt elements would be covered by financial account transactions which can be found in sector financial accounts (https://www.ons.gov.uk/economy/nationalaccounts/uksectoraccounts/bulletins/quarterlysectoraccounts/apriltojune2023) or in the public sector finances (https://www.ons.gov.uk/economy/governmentpublicsectorandtaxes/publicsectorfinance/bulletins/publicsectorfinances/september2023).

## Interest Rates

- UK Interest rates and Bank Rate | [BoE](https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate)

## Real-World Taxation Rates

- UK Taxation rates: Institute for Fiscal Studies (IFS) | [IFS Tax Lab](https://ifs.org.uk/taxlab/taxlab-key-questions/how-have-government-revenues-changed-over-time)

## Gilt Yields

- UK Long-Term Government Bond Yields: 10-year: Main | [FRED](https://fred.stlouisfed.org/series/IRLTLT01GBM156N)
