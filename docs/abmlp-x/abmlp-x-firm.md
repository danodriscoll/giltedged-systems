---
sidebar_position: 5
---

# Firm Class Agent

The Firm is the engine of the service-based economy. Firms provide services that are at once *produced* and *consumed*. Firms receive revenue from both the government and households; hire and fire households (based on household *profile* and previous employment history); pay wages, calculate their corporate profits (`revenue - wages - interest`) and pay corporation tax.

## Model Firm Employment Process

### Profile Dependent Employment

```Python showLineNumbers title="_hire_employees"
def _hire_employees(self, num_to_hire):
    """
    The hiring process. Uses the
    profile-based, experience-weighted logic.
    """
    for _ in range(num_to_hire):
        total_unemployed_households = [h for h in self.model.households if not h.is_employed]
        if not total_unemployed_households: break

        # --- Integrated Profile-Based Hiring Logic ---
        unemployed_by_profile = {
            "high_net_worth": [h for h in total_unemployed_households if h.profile == "high_net_worth"],
            "established": [h for h in total_unemployed_households if h.profile == "established"],
            "accumulator": [h for h in total_unemployed_households if h.profile == "accumulator"],
            "precarious": [h for h in total_unemployed_households if h.profile == "precarious"],
        }

        # This helper function selects a candidate from a list, but gives
        # more weight to those with a stronger employment history.
        def weighted_choice(households, profile_key):
            weights = [self.model.credit_agency.get_report(h.unique_id)['employment_record_by_profile'].get(profile_key, 0) + 1 for h in households]
            return self.random.choices(households, weights=weights, k=1)[0]

        new_employee = None
        # Iterate through the profiles in order of preference.
        for profile_key in ["high_net_worth", "established", "accumulator", "precarious"]:
            if unemployed_by_profile[profile_key]:
                new_employee = weighted_choice(unemployed_by_profile[profile_key], profile_key)
                break

        if new_employee:
            new_employee.is_employed = True
            new_employee.employer_id = self.unique_id
            self.employees.append(new_employee)
```

<figure>
    ![alt text](https://www.data-reports.net/giltedged-info/model-images/abmlp-x-all-profile-employment-selection.png)
    <figcaption>
        Household agents, sorted by profile and experience, hope to be [selected](https://www.data-reports.net/giltedged-info/model-gallery/abmlp-x-employment-selection.html) for paid employment.
    </figcaption>
</figure>

Firms are defined at the point of creation into one of two distinct types: Either as a state run enterprise (SRE), also attributed to being a *natural monopoly*, or purely private enterprise (PE). An SRE's primary social function is to provide employment and services. As with all firms, an SRE's financial function is to generate a profit with a portion of that profit remitted directly to the Government as a new, non-taxation revenue stream. Profit earned by PEs may (subject to IPO) be paid as dividends to its ultimate owners \- either the households invested in fund manager funds or the private bank.

## Privatisation

The decision for a firm to *go public* (IPO), that is, to issue share equity capital, applies if it is consistently profitable and has reached a significant scale relative to the model economy (GDP this step). For an SRE, the multi-stage privatisation decision includes a check to ensure that the move does not violate the government's SRE population floor policy, that is, that there are at least a given percentage of total firms in the model operating as an SRE:

`if total_firms > 0 and (current_sre_count - 1) / total_firms < self.model.sre_population_floor`

## Monetary Policy & Shareholder Value

Firms may be affected by the central bank's base rate decisions, that is, the CB’s monetary policy transmission mechanism is one where variable loan repayments might increase or decrease if:

* A firm is drawing on a working capital facility arranged with the private bank. And / or,  
* A firm, previously an SRE (natural monopoly) has undergone an IPO and is now operating a *highly leveraged* dividend policy. These firms set a much higher dividend target (also based on the *retained earnings*) and, if their available cash is not enough, they will actively borrow from the private bank (via a *dividend loan*) to meet shareholder expectations.
