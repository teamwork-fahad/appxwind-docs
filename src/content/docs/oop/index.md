---
title: 'Object-Oriented Programming Concepts'
description: 'Language-independent OOP concepts with examples in C++, Java, Python, and PHP.'
---

Object-Oriented Programming (OOP) organizes software around **objects** that contain data and behavior. The core ideas are common across languages; syntax and language features differ.

## Core OOP concepts

### Class and object

A class is a blueprint. An object is a real instance created from that blueprint. A class describes properties and methods, while an object stores actual values.

### Encapsulation

Encapsulation keeps data and the methods that operate on it together. Access controls such as `private`, `protected`, and `public` decide what outside code can use directly.

### Abstraction

Abstraction exposes only the important interface and hides implementation details. For example, a `withdraw()` method can hide balance validation and transaction steps.

### Inheritance

Inheritance allows a child class to reuse or extend a parent class. Common forms include single, multilevel, hierarchical, and multiple inheritance. Language support differs: C++ supports multiple inheritance directly, while Java uses interfaces for multiple type inheritance.

### Polymorphism

Polymorphism means one interface can have multiple implementations. Compile-time polymorphism commonly uses overloading; run-time polymorphism commonly uses overriding through a parent reference or interface.

### Constructor and destructor

A constructor initializes an object. A destructor or cleanup method releases resources. C++ has deterministic destructors; Java and Python use garbage collection with different cleanup patterns.

## Same idea, different syntax

- [OOP with C++](./cpp/)
- [OOP with Java](./java/)
- [OOP with Python](./python/)
- [OOP with PHP](./php/)

The detailed C++ syllabus is kept under the C++ section because its topics include C++-specific features such as header files, `string.h`, friend functions, virtual functions, and pure virtual functions.
