---
title: SQLite and Python Practice
description: SQLite datasets, Python examples, and data analysis exercises for beginners.
---
# SQLite and Python Practice

This page contains 12 connected and standalone datasets. Run the setup scripts in order, then solve the exercises using `SELECT`, filtering, sorting, grouping, joins, subqueries, and window functions.

:::tip
The SQL uses common MySQL/PostgreSQL-compatible syntax. Run each block separately if your database does not support multiple statements at once.
:::

## Course Syllabus

This course moves from SQLite fundamentals to Python database programming, file handling, Pandas/NumPy data frames, and two-dimensional data visualization.

* [Introduction to SQLite](./unit-1/)
* [Database Backup and CSV Handling](./unit-2/)
* [Python Interaction with SQLite](./unit-3/)
* [Python Interaction with Text and CSV](./unit-4/)
* [Data Visualization Using DataFrames](./unit-5/)

## 1. Departments

```sql
CREATE TABLE departments (
  department_id INT PRIMARY KEY,
  department_name VARCHAR(50) NOT NULL,
  location VARCHAR(50)
);

INSERT INTO departments VALUES
(1, 'Engineering', 'Delhi'),
(2, 'Sales', 'Mumbai'),
(3, 'Human Resources', 'Bengaluru'),
(4, 'Finance', 'Pune'),
(5, 'Support', 'Hyderabad');
```

Practice: Find departments located in cities starting with `D`; count departments by location.

## 2. Employees

```sql
CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  employee_name VARCHAR(80) NOT NULL,
  department_id INT,
  manager_id INT,
  salary DECIMAL(10,2),
  hire_date DATE,
  FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

INSERT INTO employees VALUES
(101, 'Aarav Sharma', 1, NULL, 95000.00, '2021-04-12'),
(102, 'Meera Iyer', 1, 101, 72000.00, '2022-08-19'),
(103, 'Kabir Khan', 2, NULL, 68000.00, '2020-01-10'),
(104, 'Diya Patel', 2, 103, 51000.00, '2023-02-15'),
(105, 'Rohan Das', 3, NULL, 63000.00, '2019-11-05'),
(106, 'Anaya Singh', 4, NULL, 78000.00, '2022-06-21'),
(107, 'Vivaan Roy', 5, NULL, 45000.00, '2024-01-08'),
(108, 'Sara Thomas', 1, 101, 76000.00, '2023-09-03');
```

Practice: Show employees earning above `60000`; calculate average salary by department; find employees hired after 2022.

## 3. Students

```sql
CREATE TABLE students (
  student_id INT PRIMARY KEY,
  student_name VARCHAR(80) NOT NULL,
  email VARCHAR(120) UNIQUE,
  city VARCHAR(50),
  age INT,
  joined_on DATE
);

INSERT INTO students VALUES
(1, 'Ishita Verma', 'ishita@example.com', 'Delhi', 20, '2024-07-01'),
(2, 'Aditya Mehta', 'aditya@example.com', 'Mumbai', 21, '2024-07-03'),
(3, 'Nisha Gupta', 'nisha@example.com', 'Pune', 19, '2024-07-05'),
(4, 'Yash Malhotra', 'yash@example.com', 'Delhi', 22, '2024-07-08'),
(5, 'Tanya Rao', 'tanya@example.com', 'Bengaluru', 20, '2024-07-10'),
(6, 'Arjun Nair', 'arjun@example.com', 'Kochi', 23, '2024-07-12'),
(7, 'Simran Kaur', 'simran@example.com', 'Chandigarh', 19, '2024-07-15'),
(8, 'Dev Joshi', 'dev@example.com', 'Pune', 21, '2024-07-18');
```

Practice: List students from Delhi or Pune; find the youngest student; group students by city.

## 4. Courses

```sql
CREATE TABLE courses (
  course_id INT PRIMARY KEY,
  course_name VARCHAR(80) NOT NULL,
  category VARCHAR(40),
  fee DECIMAL(8,2),
  duration_months INT
);

INSERT INTO courses VALUES
(201, 'SQL Fundamentals', 'Database', 4999.00, 2),
(202, 'Python Basics', 'Programming', 5999.00, 3),
(203, 'Web Development', 'Programming', 8999.00, 4),
(204, 'Data Analytics', 'Data', 7999.00, 3),
(205, 'Business Communication', 'Soft Skills', 2999.00, 1),
(206, 'JavaScript Advanced', 'Programming', 7499.00, 3);
```

Practice: Find courses costing between `5000` and `8000`; show the cost per month; find the most expensive course.

## 5. Enrollments

```sql
CREATE TABLE enrollments (
  enrollment_id INT PRIMARY KEY,
  student_id INT,
  course_id INT,
  enrolled_on DATE,
  status VARCHAR(20),
  score INT,
  FOREIGN KEY (student_id) REFERENCES students(student_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

INSERT INTO enrollments VALUES
(301, 1, 201, '2024-08-01', 'Completed', 88),
(302, 1, 204, '2024-08-05', 'Active', NULL),
(303, 2, 202, '2024-08-02', 'Completed', 76),
(304, 2, 203, '2024-08-10', 'Active', NULL),
(305, 3, 201, '2024-08-03', 'Completed', 92),
(306, 4, 203, '2024-08-04', 'Completed', 69),
(307, 5, 204, '2024-08-07', 'Active', NULL),
(308, 6, 205, '2024-08-08', 'Completed', 81),
(309, 7, 201, '2024-08-11', 'Completed', 95),
(310, 8, 202, '2024-08-12', 'Dropped', 42);
```

Practice: Join students and courses; calculate average score by course; find students enrolled in more than one course; list courses with no enrollment.

## 6. Customers

```sql
CREATE TABLE customers (
  customer_id INT PRIMARY KEY,
  customer_name VARCHAR(80) NOT NULL,
  email VARCHAR(120),
  city VARCHAR(50),
  registered_on DATE
);

INSERT INTO customers VALUES
(401, 'Neha Kapoor', 'neha@example.com', 'Delhi', '2023-01-12'),
(402, 'Rahul Bansal', 'rahul@example.com', 'Mumbai', '2023-03-18'),
(403, 'Pooja Sethi', 'pooja@example.com', 'Pune', '2023-05-06'),
(404, 'Karan Oberoi', 'karan@example.com', 'Delhi', '2024-01-20'),
(405, 'Maya Fernandes', 'maya@example.com', 'Goa', '2024-02-14'),
(406, 'Omar Sheikh', 'omar@example.com', 'Hyderabad', '2024-03-22');
```

Practice: Count customers per city; find customers registered in 2024; identify cities with more than one customer.

## 7. Products

```sql
CREATE TABLE products (
  product_id INT PRIMARY KEY,
  product_name VARCHAR(80) NOT NULL,
  category VARCHAR(40),
  price DECIMAL(10,2),
  stock INT
);

INSERT INTO products VALUES
(501, 'Mechanical Keyboard', 'Electronics', 3499.00, 25),
(502, 'Wireless Mouse', 'Electronics', 1299.00, 60),
(503, 'Notebook Set', 'Stationery', 399.00, 120),
(504, 'Desk Lamp', 'Home', 1899.00, 18),
(505, 'USB-C Hub', 'Electronics', 2299.00, 34),
(506, 'Office Chair', 'Furniture', 8999.00, 7),
(507, 'Water Bottle', 'Lifestyle', 799.00, 45),
(508, 'Laptop Stand', 'Furniture', 2499.00, 0);
```

Practice: Find out-of-stock products; calculate inventory value (`price * stock`); find the cheapest product in every category.

## 8. Orders

```sql
CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_id INT,
  order_date DATE,
  order_status VARCHAR(20),
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

INSERT INTO orders VALUES
(601, 401, '2024-06-01', 'Delivered'),
(602, 402, '2024-06-03', 'Delivered'),
(603, 401, '2024-06-11', 'Shipped'),
(604, 403, '2024-06-15', 'Cancelled'),
(605, 404, '2024-07-02', 'Delivered'),
(606, 405, '2024-07-09', 'Processing'),
(607, 402, '2024-07-14', 'Delivered'),
(608, 406, '2024-07-20', 'Delivered');
```

Practice: Join orders with customers; count orders by status; find customers who placed more than one order; list July orders.

## 9. Order Items

```sql
CREATE TABLE order_items (
  order_item_id INT PRIMARY KEY,
  order_id INT,
  product_id INT,
  quantity INT,
  unit_price DECIMAL(10,2),
  FOREIGN KEY (order_id) REFERENCES orders(order_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);

INSERT INTO order_items VALUES
(701, 601, 501, 1, 3499.00),
(702, 601, 502, 2, 1299.00),
(703, 602, 506, 1, 8999.00),
(704, 603, 505, 2, 2299.00),
(705, 604, 503, 4, 399.00),
(706, 605, 504, 1, 1899.00),
(707, 606, 507, 3, 799.00),
(708, 607, 501, 1, 3499.00),
(709, 608, 502, 1, 1299.00),
(710, 608, 505, 1, 2299.00);
```

Practice: Calculate each order total; find the best-selling product by quantity; calculate revenue by category; exclude cancelled orders from revenue.

## 10. Books

```sql
CREATE TABLE books (
  book_id INT PRIMARY KEY,
  title VARCHAR(120) NOT NULL,
  author VARCHAR(80),
  genre VARCHAR(40),
  published_year INT,
  price DECIMAL(8,2)
);

INSERT INTO books VALUES
(801, 'SQL Made Simple', 'R. Menon', 'Technology', 2022, 499.00),
(802, 'The Data Mindset', 'A. Shah', 'Business', 2021, 699.00),
(803, 'Learning Python', 'S. Rao', 'Technology', 2023, 799.00),
(804, 'Quiet Rivers', 'M. Sen', 'Fiction', 2019, 399.00),
(805, 'Atomic Habits', 'J. Clear', 'Self Help', 2018, 599.00),
(806, 'World History', 'K. Iyer', 'History', 2020, 649.00);
```

Practice: Find books published after 2020; group average price by genre; search titles containing `Data`.

## 11. Library Loans

```sql
CREATE TABLE library_loans (
  loan_id INT PRIMARY KEY,
  book_id INT,
  member_name VARCHAR(80),
  issue_date DATE,
  return_date DATE,
  FOREIGN KEY (book_id) REFERENCES books(book_id)
);

INSERT INTO library_loans VALUES
(901, 801, 'Ishita Verma', '2024-08-01', '2024-08-10'),
(902, 803, 'Aditya Mehta', '2024-08-03', NULL),
(903, 804, 'Nisha Gupta', '2024-08-05', '2024-08-15'),
(904, 801, 'Yash Malhotra', '2024-08-12', NULL),
(905, 805, 'Tanya Rao', '2024-08-14', '2024-08-20'),
(906, 802, 'Arjun Nair', '2024-08-18', NULL);
```

Practice: Find currently borrowed books; count loans per book; calculate loan duration for returned books.

## 12. Movies and Reviews

```sql
CREATE TABLE movies (
  movie_id INT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  genre VARCHAR(40),
  release_year INT,
  budget_million DECIMAL(8,2)
);

CREATE TABLE reviews (
  review_id INT PRIMARY KEY,
  movie_id INT,
  reviewer_name VARCHAR(80),
  rating INT,
  review_date DATE,
  FOREIGN KEY (movie_id) REFERENCES movies(movie_id)
);

INSERT INTO movies VALUES
(1001, 'Code Runner', 'Thriller', 2022, 18.50),
(1002, 'Monsoon Letters', 'Drama', 2021, 9.75),
(1003, 'Beyond Mars', 'Sci-Fi', 2024, 42.00),
(1004, 'Laughing Class', 'Comedy', 2020, 6.20),
(1005, 'The Last Train', 'Drama', 2023, 14.80);

INSERT INTO reviews VALUES
(1101, 1001, 'Ishita Verma', 5, '2024-06-01'),
(1102, 1001, 'Aditya Mehta', 4, '2024-06-03'),
(1103, 1002, 'Nisha Gupta', 3, '2024-06-04'),
(1104, 1003, 'Yash Malhotra', 5, '2024-07-01'),
(1105, 1003, 'Tanya Rao', 4, '2024-07-02'),
(1106, 1004, 'Arjun Nair', 2, '2024-07-05'),
(1107, 1005, 'Simran Kaur', 4, '2024-07-08');
```

Practice: Find average rating per movie; show movies with average rating above `4`; find the highest-budget movie; use `LEFT JOIN` to include movies without reviews.

## Mixed Revision Challenges

1. Find the top three students by completed-course score.
2. Show every student and the number of courses they have taken, including students with zero enrollments.
3. Find the department with the highest average employee salary.
4. Find the customer who generated the most delivered-order revenue.
5. Rank products by total quantity sold using `RANK()`.
6. Find books that have never been borrowed using `NOT EXISTS`.
7. Find the second-highest employee salary without using `LIMIT`.
8. Show each movie's rating beside the overall average rating.
9. Find duplicate customer cities using `GROUP BY` and `HAVING`.
10. Create a view named `delivered_order_totals` containing order IDs and their delivered totals.
