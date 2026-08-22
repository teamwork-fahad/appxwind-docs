---
title: 'SQL Tasks - Exercise II'
description: 'SQL query tasks covering simple queries, group functions, subqueries, joins, and correlated subqueries.'
---

# SQL Tasks - Exercise II

**Prepared by:** Ravi M. Gulati

Use the following classic sales database tables for the tasks below.

## Reference tables

| Table | Columns and constraints | Purpose |
| --- | --- | --- |
| `DEPT` | `DEPTNO` (primary key), `DNAME`, `LOC` | Department details. Departments: 10 ACCOUNTING / NEW YORK, 20 RESEARCH / DALLAS, 30 SALES / CHICAGO, 40 OPERATIONS / BOSTON. |
| `EMP` | `EMPNO` (primary key), `ENAME`, `JOB`, `MGR` (foreign key to `EMP.EMPNO`), `HIREDATE`, `SAL`, `COMM`, `DEPTNO` (foreign key to `DEPT.DEPTNO`) | Employee details and reporting hierarchy. |
| `CUSTOMER` | `CUSTID` (primary key), `NAME`, `ADDRESS`, `CITY`, `STATE`, `ZIP`, `AREA`, `PHONE`, `REPID` (foreign key to `EMP.EMPNO`), `CREDITLIMIT`, `COMMENTS` | Customer and sales representative details. |
| `ORD` | `ORDID` (primary key), `ORDERDATE`, `COMMPLAN`, `CUSTID` (foreign key to `CUSTOMER.CUSTID`), `SHIPDATE`, `TOTAL` | Customer orders and shipment details. |
| `ITEM` | Composite primary key `(ORDID, ITEMID)`, `ORDID` (foreign key to `ORD.ORDID`), `ITEMID`, `PRODID` (foreign key to `PRODUCT.PRODID`), `ACTUALPRICE`, `QTY`, `ITEMTOT` (`QTY * ACTUALPRICE`) | Individual items included in each order. |
| `PRODUCT` | `PRODID` (primary key), `DESCRIP` | Product catalogue. |

## Task 1: Simple queries

1. List details of all employees.
2. List employee number and name.
3. List employee number, name, job, and salary.
4. List employees whose salary is greater than 2000.
5. List orders whose amount is greater than 1000.
6. List customers from CA.
7. List departments located in NEW YORK.
8. List departments located in NEW YORK or BOSTON.
9. List departments located neither in NEW YORK nor BOSTON.
10. List employees of department 20.
11. List employees of departments 10 and 20.
12. List employees of departments 10, 20, and 30.
13. List employees whose commission is greater than 60% of salary.
14. List all CLERKs.
15. List CLERKs of department 20.
16. List CLERKs of departments 10 and 20.
17. List CLERKs, ANALYSTs, SALESMAN, and MANAGERs.
18. List employees whose name starts with A.
19. List employees whose name does not start with A.
20. List employees with A at the second position of the name.
21. List employees whose name contains A.
22. List employees whose name contains AM.
23. List employees without commission.
24. List orders without a commission plan.
25. List orders with a commission plan.
26. List employees with salary between 2000 and 4000.
27. List EMPNO, ENAME, JOB, and total earnings (`SAL + COMM`).
28. List customers whose name contains two or more words.
29. List employees in ascending name order.
30. List employees ordered by DEPTNO ascending and SAL ascending.
31. List employees ordered by DEPTNO ascending and SAL descending.
32. List employees ordered by DEPTNO descending and SAL descending.
33. List orders in ascending amount order.
34. List orders without a commission plan in descending amount order.
35. List department 10 employees in ascending salary order.
36. List all JOB values from EMP.
37. List PRODIDs ordered at least once.
38. List customers in descending CREDITLIMIT order.
39. List orders in order of ORDERDATE.
40. List employees in descending earnings order.
41. List CLERKs in descending earnings order.
42. List employees in descending experience order.
43. List EMPNO, ENAME, JOB, and experience in years rounded to zero decimals.

## Task 2: Queries using group functions

44. Find the total number of employees.
45. Find the sum and average salary.
46. Find the highest and lowest salary.
47. Find average employee earnings.
48. Count employees earning more than 2000.
49. Find total salary of department 10.
50. Count employees without commission.
51. Count orders without a commission plan.
52. Count CLERKs.
53. Find total salary of MANAGERs.
54. Count jobs in the company.
55. Find salary sum for each department.
56. Count employees in each department.
57. Count CLERKs in each department.
58. Count jobs in each department.
59. Count employees in each job of each department.
60. Find each CUSTID and its order count.
61. Find total order amount for each product.
62. Find total quantity ordered for each product.
63. Find total items ordered in each order.
64. Count orders placed in each month of 1987.
65. Count employees joining in each year.
66. Count CLERKs joining in each year.
67. Count orders in each year.
68. Count customers in each area.
69. Find total order amount for each year.
70. Count orders in each COMMPLAN.
71. Find average ordered price for each product.
72. Find departments with more than 3 employees.
73. Find dates with at least 2 orders.
74. Find customers with more than 3 orders.
75. Find products ordered more than 6 times.
76. Find orders containing more than 3 items.
77. Find departments with at least 2 CLERKs.
78. Find managers and their subordinate counts.
79. Find departments whose total salary exceeds 10,000.
80. Find departments with at least 3 distinct jobs.
81. Find employees with more than 2 subordinates.
82. List department salary totals in descending order.
83. List CLERK salary totals by department in descending order.
84. List dates and order counts in ascending count order.

## Task 3: Queries using subquery

85. List employees of SALES.
86. List employees of departments located in NEW YORK.
87. List employees of KING's department.
88. List departments having at least one employee.
89. List employees with at least one assigned customer.
90. List employees with at least one subordinate.
91. List customers who placed at least one order.
92. List products ordered once.
93. List employees whose assigned customer placed an order.
94. List employees earning the same salary as MARTIN.
95. List employees with MARTIN's salary and job.
96. List department 20 employees earning more than an employee of department 10.
97. List department 10 employees earning more than all department 20 employees.
98. List SALES employees earning more than an employee of department 10.
99. List SALES employees earning more than an ACCOUNTING employee.
100. List SALES employees earning more than all ACCOUNTING employees.
101. List departments with more than 3 employees.
102. List orders containing at least 3 items.
103. List products ordered more than 6 times.
104. List departments whose average salary exceeds department 20's average.
105. List department with the highest total salary.
106. List department with the lowest total salary.
107. List products with the highest total order amount.
108. List dates with the maximum number of orders.
109. List months with the maximum number of orders.
110. List department with the highest average salary.
111. List department with the lowest average salary.
112. List departments with more than 2 distinct jobs.
113. List customers with more than 3 orders.
114. List products ordered more than 6 times.
115. List orders containing more than 3 items.
116. List departments with more than 1 CLERK.
117. List products with the highest total order amount.
118. List products with the lowest total order amount.
119. List customers placing the highest-value order.
120. List customers placing the lowest-value order.
121. List customers whose order has the most items.
122. List customers whose order has the fewest items.
123. List employees with the maximum customer count.
124. List employees with the maximum subordinate count.
125. Find the year with the most employee joiners.
126. List departments with the most CLERKs.
127. List customers who placed the first order.
128. List customers who placed the last order.
129. List employees who joined first.
130. List employees who joined last.
131. List the first order.
132. List the last order.
133. List orders with the most items.
134. List orders with the fewest items.
135. List products in the first order.
136. List products in the last order.
137. List products ordered most by quantity.
138. List products ordered least by quantity.
139. List employees whose customer placed the first order.
140. List employees whose customer placed the last order.
141. List the MANAGER who joined first.
142. List the MANAGER who joined last.
143. List orders above average order amount.
144. Find the month and year with the most employee joiners.
145. List customers with the maximum CREDITLIMIT.

## Task 4: Queries using join

146. List employee number, name, department number, and department name.
147. List employees of SALES.
148. List departments having at least one employee.
149. List employees of KING's department.
150. List customers with their representative's name.
151. List department 20 employees with the same job as JAMES.
152. List employee number, name, manager number, and manager name.
153. List employees who manage at least one employee.
154. List employees earning more than their manager.
155. List employees who joined before their manager.
156. List department 10 employees sharing a job with SALES employees.
157. List ACCOUNTING employees sharing a job with SALES employees.
158. List department details and employee count.
159. List employees with their subordinate count.
160. List EMPNO, ENAME, JOB of employees with at least 3 subordinates.
161. List employees who manage someone but are not designated MANAGER.
162. List customers with their representative's EMPNO, ENAME, and JOB.
163. List customers who placed more than 3 orders.
164. List employees whose assigned customer placed an order.

## Task 5: Queries using co-related subquery

165. List employees earning more than their department average.
166. List employees earning more than their manager.
167. List departments having at least one employee.
168. List departments having more than 3 employees.
169. List employees with at least 3 subordinates.
170. List employees with at least one assigned customer.
171. List products ordered more than 6 times.
