---
sidebar_position: 9
---

# Facilitator Agents

These are simpler, more mechanical agents that provide the system *plumbing* that makes the model work.

* The **debt management office**: It receives a debt issuable mandate from the government, that is, the *fiscal balance* (the *deficit* for the step, if there is one and translates it into a supply of new long-term bond and T-bill objects, which it offers to the private bank (the *primary dealer* in the model).
* The **credit agency** is a passive agent queried by both firms and the private bank. It is the source of truth for all household employment records, that is, their employment history and loan default histories, which are crucial inputs for both firm hiring and bank lending decisions.
* The **stock exchange’s** sole job is to calculate *market prices* for all public firms, that is, firms that have undergone an IPO. It acts as the central source of price information that other agents use to value their assets and make their trading decisions.
* The **debt recovery** agent is a specialised agent that manages the multi-stage process of a household bankruptcy (firm bankruptcy is handled by the private bank), correctly liquidating a defaulted household's fund units to recover capital for the private bank.
