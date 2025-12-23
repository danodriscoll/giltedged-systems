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
    A helper method for the hiring process. Contains the
    profile-based, experience-weighted logic.
    """
    for _ in range(num_to_hire):
        unemployed_households = [h for h in self.model.households if not h.is_employed]
        if not unemployed_households: break

        # --- Profile-Based Hiring Logic ---
        unemployed_by_profile = {
            "high_net_worth": [h for h in unemployed_households if h.profile == "high_net_worth"],
            "established": [h for h in unemployed_households if h.profile == "established"],
            "accumulator": [h for h in unemployed_households if h.profile == "accumulator"],
            "precarious": [h for h in unemployed_households if h.profile == "precarious"],
        }

        # Selects a candidate from a list, but gives
        # more weight to those with a stronger employment history.
        def weighted_choice(households, profile_key):
            weights = [self.model.credit_agency.get_report(h.unique_id)['employment_record_by_profile'].get(profile_key, 0) + 1 for h in households]
            return self.random.choices(households, weights=weights, k=1)[0]```
```

<figure>
    ![alt text](https://www.data-reports.net/giltedged-info/model-images/abmlp-x-all-profile-employment-selection.png)
    <figcaption>
        Household agents, sorted by profile and experience, hope to be [selected](https://www.data-reports.net/giltedged-info/model-gallery/abmlp-x-employment-selection.html) for paid employment.
    </figcaption>
</figure>

Firm agents are defined at the point of creation as one of two distinct types: Either as a *state run enterprise* (SRE), also attributed to being a *natural monopoly*, or purely *private enterprise* (PE). An SRE's primary social function is to provide employment and services. As with all firms, an SRE's financial function is to generate a profit. However, unlike a PE, whose profit may (subject to IPO) be paid as dividends to its ultimate owners \- either the households invested in fund manager funds or the private bank \- a portion of an SRE's profit is remitted directly to the Government as a new, non-taxation revenue stream.

## Privatisation

The decision for a firm to *go public* (IPO), that is, to issue share equity capital will only apply if it is consistently profitable and has reached a significant scale relative to the model economy (GDP this step). For an SRE, the multi-stage privatisation decision includes a check to ensure that the move would not violate the government’s SRE population floor policy, that is, that there are at least a given percentage of total firms in the model operating as an SRE:  
`if total_firms > 0 and (current_sre_count - 1) / total_firms < self.model.sre_population_floor`.

## Monetary Policy & Shareholder Value

The central bank's base rate decision may affect firms who draw on a working capital facility arranged with the private bank. This is the core transmission mechanism for monetary policy, as the interest rate on this variable-rate loan is a direct cost to the firm. In addition, firms that have undergone an IPO, that were previously SREs (natural monopolies), are specified with a *highly leveraged* dividend policy. That is, they set a much higher dividend target (also based on the *retained earnings*) and, if their available cash is not enough, they will actively borrow from the private bank (via a *dividend loan*) to meet shareholder expectations.
