---
sidebar_position: 3
---

# ABMLP-X Producer

:::info[**Code Gist**]

View a [code gist](https://gist.github.com/danodriscoll/bca576d733c4ce9a611d0982e05e74cf) of Producer agent attributes.

:::

## Employment by Household Agent Type

Household agents have attributes which, among others, include `wealth` and `type`. In every step, a Household will record its accumulated equity (wealth). Households belong to one of three type divisions; *alpha*, *beta* and *gamma*. To which division a Household belongs (at every step) will depend on its wealth that is some percentage greater or less than the average wealth of Households in the current step.

<figure>
    ![alt text](@site/static/img/producer_employment_process_sunrise.jpeg)
    <figcaption>
        A new step dawns as unemployed Household agents queue in hope of being selected for employment.
    </figcaption>
</figure>

Every Producer will seek to employ one unemployed household agent based on its type and past employment history. The selection process prioritises households in the order of *alpha*, then *beta*, and finally *gamma*. Within each type, a weighted random selection is performed where the weight is determined by the household's employment count for that type (plus one). This approach increases the likelihood of selecting households that have been employed more frequently, while still giving those with no prior employment a chance.

### Detailed Process

1. Filtering Unemployed Households:
    - The function begins by filtering the model’s household agents to identify those that are currently unemployed. It then categorises these households into three separate lists based on their type (*alpha*, *beta*, or *gamma*).

2. Weighted Random Selection:
- A helper function, weighted_choice, is defined to facilitate the selection. This function:	
- Computes weights for each household as `employment_history[type] + 1`.
- Uses self.random.choices to select one household based on these weights.
- The function then checks for available households in order of priority:
    - Alpha households: If available, one is selected using the weighted random choice.
    - Beta households: If no alpha households are available, the selection moves to beta households.
    - Gamma households: If neither alpha nor beta households are available, gamma households are considered.

3. Updating Employment History:
- After a household is selected, its `employment_history` is updated by incrementing the count for its current type. This update ensures that the household's increased likelihood for future selection is recorded.

4. Returning the Selected Household:
- Finally, the function returns the selected household agent.

## Wage Payments Made to Households (By Agent Type)

The `household_wage_payment` function calculates the effective wage multiplier for a household agent based on both their current household type and their employment history within that specific type.

The `self.employment_of_household_count` attribute is used to track the number of times each agent has been employed per household type.

1. Nested Tracking by Household Type:
For the provided `unique_id`, the function ensures that there is a nested dictionary to store counts for each household type. This allows separate tracking of experience in different roles.

Example Structure:
```Python showLineNumbers
self.employment_of_household_count = {
    'agent_001': {
        'alpha': 2,
        'beta': 1,
        'gamma': 0
    }
}
```

2. Determine Base Multiplier:
The base wage multiplier is selected based on the current household type:
- *alpha*: minimum = 0.9, maximum = 1.0
- *beta* : minimum = 0.8, maximum = 0.95
- *gamma*: minimum = 0.7, maximum = 0.9

3. Update Employment History:
After computing the wage multiplier, the function increments the employment count for the current household type for the given agent. This ensures that subsequent wage calculations reflect the increased experience in that specific role (type).

4. Apply Experience-Based Increment:
For each previous employment in the current household type, the wage multiplier increases by 0.01 (1%). The final multiplier is computed as:
```Python showLineNumbers
# Calculate the wage percentage increase: add 1% for each previous employment.
bonus = Decimal('0.01') * employment_count
final_percent = min_percent + bonus

# Ensure the final percentage does not exceed the maximum threshold.
if final_percent > max_percent:
      final_percent = max_percent
```

5. Compute the Final Wage:
The final wage is calculated by multiplying the `amount_supplied` by the determined multiplier (final_percent).

The `household_wage_payment` function is designed to offer a nuanced approach to wage progression by considering type-specific employment history. By maintaining separate counts in `self.employment_of_household_count`, it ensures that the wage increase for each household agent is based solely on the experience relevant to their current type (employed by a specific Producer).

:::info[**Code Gist**]

View code gists of both the [employment process](https://gist.github.com/danodriscoll/e66b788f3d89553bf6f9247018587f73) and [wage payment](https://gist.github.com/danodriscoll/f4ed80b9fa9fad0c58753de87ee20879) functions.

:::
