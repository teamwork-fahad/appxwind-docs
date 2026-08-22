---
title: Infix, Prefix and Postfix
description: Understanding infix, prefix (Polish), and postfix (Reverse Polish) notations and stack-based conversion algorithms.
sidebar:
  order: 3
---

# Infix, Prefix and Postfix

Expression notations differ in operator placement relative to operands:

- **Infix**: Operator is between operands e.g. `A + B`
- **Prefix (Polish)**: Operator is before operands e.g. `+ A B`
- **Postfix (Reverse Polish)**: Operator is after operands e.g. `A B +`

## Precedence and Associativity

Stack data structures help parse operators according to precedence (e.g. `*` before `+`) and associativity (left-to-right or right-to-left).
