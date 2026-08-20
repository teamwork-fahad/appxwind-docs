---
title: 'Python Interaction with SQLite'
description: 'Use Python modules and sqlite3 to create, read, update, and delete database records.'
---

## 3.1 Modules, Namespaces, and Packages

A module is a Python file containing reusable code. A package is a directory of related modules, usually identified by `__init__.py`. A namespace controls where a name can be accessed, and scope controls how long that name is available.

```python
# project/database_tools.py
DEFAULT_LIMIT = 10

# app.py
import sys
from database_tools import DEFAULT_LIMIT

print(sys.path)
print(DEFAULT_LIMIT)
```

`PYTHONPATH` can add module search locations. Prefer a virtual environment and package installation for real projects rather than changing it globally.

## 3.2 Connecting to SQLite

Python includes the `sqlite3` module in the standard library.

```python
import sqlite3

connection = sqlite3.connect('school.db')
connection.execute('PRAGMA foreign_keys = ON')

connection.execute('''
  CREATE TABLE IF NOT EXISTS notes (
    note_id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT
  )
''')
connection.commit()
connection.close()
```

Use parameterized queries instead of string concatenation.

```python
import sqlite3

with sqlite3.connect('school.db') as connection:
    connection.execute(
        'INSERT INTO notes(title, body) VALUES (?, ?)',
        ('SQLite practice', 'Learn one query at a time')
    )
```

## 3.3 Execute and Fetch

`fetchone()` returns one row. `fetchall()` returns all remaining rows.

```python
import sqlite3

with sqlite3.connect('school.db') as connection:
    cursor = connection.execute(
        'SELECT student_id, student_name FROM students ORDER BY student_id'
    )
    first_student = cursor.fetchone()
    remaining_students = cursor.fetchall()

print(first_student)
print(remaining_students)
```

Insert, update, and delete with `execute()`:

```python
with sqlite3.connect('school.db') as connection:
    connection.execute(
        'INSERT INTO students(student_id, student_name, city, age, joined_on) '
        'VALUES (?, ?, ?, ?, ?)',
        (9, 'Kavya Shah', 'Jaipur', 20, '2024-08-20')
    )
    connection.execute(
        'UPDATE students SET city = ? WHERE student_id = ?',
        ('Ahmedabad', 9)
    )
    connection.execute('DELETE FROM students WHERE student_id = ?', (9,))
    connection.commit()
```

### Practice

1. Write a function that returns one student by ID.
2. Write a function that returns all students from a city.
3. Insert five rows with `executemany()` and commit them in one transaction.
4. Update a course fee and verify it with `fetchone()`.
