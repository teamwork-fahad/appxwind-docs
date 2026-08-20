# Unit 2: Number Systems and Digital Logic

## Number Systems

Number systems are methods of representing numbers. Different number systems are used in computers for processing and storage.

### Decimal Number System
The decimal system uses base 10 with digits 0-9.

---

## Decimal Complementary Subtraction

Decimal complementary subtraction is a method of subtracting one decimal number from another using **complements**.

This method is useful for performing subtraction without directly borrowing from digits.

### 1. Types of Decimal Complements

For decimal numbers, the base is:

$$B = 10$$

There are two important complements:

- **9's Complement**
- **10's Complement**

#### 9's Complement Formula

The formula used to find the 9's complement is:

$$B^n - 1 - N$$

Where:

- $B$ = Base
- $n$ = Number of digits
- $N$ = Given number

Since decimal numbers have base 10:

$$B = 10$$

Therefore:

- For a 2-digit number → $10^2 = 100$
- For a 3-digit number → $10^3 = 1000$
- For a 4-digit number → $10^4 = 10000$

---

### 2. Steps for Decimal Complementary Subtraction

To subtract using the decimal complement method:

1. Find the **9's complement** of the number being subtracted.
2. Add the complement to the number from which we are subtracting.
3. Add **1** to the result.
4. Check whether a **carry** is generated.
5. If carry is generated:
   - Remove the carry.
   - The remaining number is the positive answer.
6. If carry is **not** generated:
   - The answer is negative.
   - Find the **10's complement** of the result.
   - Put a negative (`−`) sign before the answer.

---

### 3. Example 1: 56 from 92

The question means: $92 - 56$

#### Step 1: Find 9's Complement of 56

Since 56 is a 2-digit number:

$$B^n - 1 - N$$

$$= 10^2 - 1 - 56$$

$$= 100 - 1 - 56$$

$$= 99 - 56$$

$$= 43$$

So, the **9's complement of 56 = 43**.

#### Step 2: Add the Complement

```
    92
  + 43
  ----
   135
```

#### Step 3: Add 1

```
135 + 1 = 136
```

#### Step 4: Check Carry

Since this is a **2-digit calculation**, we check against:

$$10^2 = 100$$

The result is `136`, which is greater than `100`.

So, **carry is generated**.

Remove the carry `1`:

```
136 → 36
```

#### Answer

$$\boxed{92 - 56 = 36}$$

---

### 4. Example 2: 35 from 18

The question means: $18 - 35$

#### Step 1: Find 9's Complement of 35

Since 35 is a 2-digit number:

$$10^2 - 1 - 35$$

$$= 100 - 1 - 35$$

$$= 99 - 35$$

$$= 64$$

So, the **9's complement of 35 = 64**.

#### Step 2: Add the Complement

```
    18
  + 64
  ----
    82
```

#### Step 3: Add 1

```
82 + 1 = 83
```

#### Step 4: Check Carry

For a 2-digit number:

$$10^2 = 100$$

The result `83` is less than `100`.

Therefore, **no carry is generated**.

This means the answer is **negative**.

#### Step 5: Find 10's Complement of 83

For a 2-digit number:

$$10^2 - 83$$

$$= 100 - 83$$

$$= 17$$

Therefore:

$$\boxed{18 - 35 = -17}$$

---

### 5. Example 3: 216 from 172

The question means: $172 - 216$

#### Step 1: Find 9's Complement of 216

Since 216 is a 3-digit number:

$$10^3 - 1 - 216$$

$$= 1000 - 1 - 216$$

$$= 999 - 216$$

$$= 783$$

So, the **9's complement of 216 = 783**.

#### Step 2: Add the Complement

```
    172
  + 783
  -----
    955
```

#### Step 3: Add 1

```
955 + 1 = 956
```

#### Step 4: Check Carry

Since this is a **3-digit calculation**, we check against:

$$10^3 = 1000$$

The result is:

```
956
```

Since: $956 < 1000$

**No carry is generated.**

Therefore, the answer is **negative**.

#### Step 5: Find 10's Complement of 956

$$10^3 - 956$$

$$= 1000 - 956$$

$$= 44$$

Therefore:

$$\boxed{172 - 216 = -44}$$

---

### 6. Understanding Carry

Carry is the most important part of this method.

The value we compare with depends on the number of digits.

| Number of Digits | Carry if Result is |
|--|--|
| 2 digits | 100 or more |
| 3 digits | 1000 or more |
| 4 digits | 10000 or more |
| n digits | $10^n$ or more |

#### Simple Rule

For an **n-digit number**:

$$\boxed{\text{Carry if Result} \geq 10^n}$$

If the result is less than $10^n$, there is **no carry**.

---

### 7. Quick Examples of Carry

#### 2-Digit Number

```
136
```

Since: $136 \geq 100$

Carry is generated. ✅

---

#### 3-Digit Number

```
1354
```

Since: $1354 \geq 1000$

Carry is generated. ✅

Remove the extra `1`:

```
1354 → 354
```

---

#### 3-Digit Number Without Carry

```
956
```

Since: $956 < 1000$

No carry is generated. ❌

Therefore, the answer will be negative.

---

### 8. Important Rule to Remember

#### When Carry is Generated

If: $\text{Result} \geq 10^n$

then:

- Carry is generated.
- Remove the carry.
- Remaining value is the **positive answer**.

#### When Carry is Not Generated

If: $\text{Result} < 10^n$

then:

- No carry is generated.
- Answer is **negative**.
- Find the 10's complement of the result.
- Add the negative sign.

---

### 9. Quick Revision

#### Formula for 9's Complement

$$\boxed{B^n - 1 - N}$$

For decimal:

$$\boxed{10^n - 1 - N}$$

#### Formula for 10's Complement

$$\boxed{10^n - N}$$

#### Carry Rule

$$\boxed{\text{Result} \geq 10^n \Rightarrow \text{Carry}}$$

$$\boxed{\text{Result} < 10^n \Rightarrow \text{No Carry}}$$

---

### 10. One-Line Shortcut

> **9's Complement → Add → +1 → Check Carry → Carry = Positive, No Carry = Negative**

This is the complete procedure for **Decimal Complementary Subtraction**.
