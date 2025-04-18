---
sidebar_position: 2
---

# UK Static Perspective

A simple analysis of the velocity and acceleration of a Government money system - the new bills issued - alongside UK Gilt yield dynamics from the second quarter of 1974 through to the fourth quarter of 2023.

## Velocity and Acceleration of New Bills Issued (Quarterly)

A model run *free* from interest payments on Government money.

### Model Run Parameter Inputs

- Model: ABMLP-X
- Government Expenditure: See Model Input: Real-World Expenditures from resource.
- Taxation rate: 37% (Flat rate; all household agents)
- Number of Producers: 90
- Number of Households: 100
- Bond Coupon Rate: 0%
- Interest Rate: 0%

### Model Run Charts

1. View the [velocity](https://www.data-reports.net/giltedged-info/virgo-420-23-05-2024-analysis-velocity.html) of model bills issued.
2. View the [acceleration](https://www.data-reports.net/giltedged-info/virgo-420-23-05-2024-analysis-acceleration.html) of model bills issued.

The velocity plot shows two periods, among others, where the velocity of model bills leads to a similar reaction in the real-world Gilt yield. The period between July 1997 and July 2003, however, shows the trend velocity of model bills issued increasing while the trend Gilt yield is decreasing. When we look at the acceleration of model bills issued, we see that across the same period there is actually a negative acceleration trend occurring. The velocity of bills issued may be increasing, but the system is experiencing negative acceleration - to which Gilt yields may be reacting.

## Velocity and Acceleration of New Bills Issued at Interest (Quarterly)

A model run that *includes* interest payments on Government money assets.

### Model Run Parameter Inputs

- Model: ABMLP-X
- Government Expenditure: See Model Input: Real-World Expenditures from the resource page.
- Taxation rate: 37% (Flat rate; all household agents)
- Number of Producers: 90
- Number of Households: 100
- Bond Coupon Rate: 1%
- Interest (Base) Rate: See Model Input: Real-World Interest Rates from the resource page.

### Model Run Charts

1. The [velocity](https://www.data-reports.net/giltedged-info/libra-498-07-06-2024-analysis-velocity.html) of Government bills issued.
2. The [acceleration](https://www.data-reports.net/giltedged-info/libra-498-07-06-2024-analysis-acceleration.html) of Government bills issued.
3. The model [bond yield](https://www.data-reports.net/giltedged-info/libra-498-07-06-2024-analysis-bond-yield.html).

## Velocity of New Bills Issued at Interest (Monthly)

**From Quarterly to Monthly Expenditure Time-Series**

Development and analysis may benefit by exploding the [ONS](https://www.ons.gov.uk/economy/grossdomesticproductgdp/timeseries/nmrp/) provided quarterly expenditure series consumed by the model into a [monthly data series](https://www.data-reports.net/giltedged-info/explode_quarterly_values.html). Monthly interest (base) rates are offered by the Central Bank.

Showing a calculated [rolling average](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.rolling.html) (window=3) velocity of a Government money system - the new bills issued - alongside UK Gilt yield dynamics from March 1974 through to the May of 2024. The coupon rate on bonds (consols) are now calculated as the average of the Central Bank base rate set across the previous 4 steps.

```Python showLineNumbers
def get_coupon_rate(self, central_bank):
    """
    Set the coupon rate on consols (bonds) to the average of
    the Central Bank base rate set across the previous 4 steps.
    An adjustment factor applies so that the coupon rate will
    never quite match to the CB base rate.
    """

    # Add the latest base rate to the list.
    self.cb_rates_list.append(central_bank.base_rate)

    def get_average(sample):
        return st.mean(sample)
    
    mean_rate = get_average(self.cb_rates_list[-4:])
    adjustment_factor = Decimal('0.75')

    adjusted_rate = mean_rate * adjustment_factor
    
    return adjusted_rate
```

- Model: ABMLP-X
- Government Expenditure: See Model Input: Real-World Expenditures from the resource page.
- Taxation rate: 37% (Flat rate; all household agents)
- Interest (Base) Rate: See Model Input: Real-World Interest Rates from the resource page.
- Bond Coupon Rate: (See the `get_coupon_rate` function).

### Model Run Charts

1. The rolling average [velocity](https://www.data-reports.net/giltedged-info/bills-velocity-rolling-average.html) of Government bills issued.
