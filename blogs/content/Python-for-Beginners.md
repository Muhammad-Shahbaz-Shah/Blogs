---
title: "Python for Beginners"
img: "https://prod.socialgoodplatform.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/407c875e-1b8b-11ec-9621-0242ac130003/image.png"
desc: "A complete beginner-friendly guide to learning Python with detailed explanations and examples."
slug: "Python-for-Beginners"
---

# 🐍 Python for Beginners

Welcome to Python! This tutorial will take you from absolute basics to intermediate concepts with plenty of examples.

---

## 1️⃣ Introduction to Python

Python is an interpreted, high-level, and general-purpose programming language known for its readability.

Example:
```python showLineNumbers
print("Hello, World!")
```

---

## 2️⃣ Variables and Data Types

Python has dynamic typing.

```python showLineNumbers
name = "Alice"      # String
age = 25            # Integer
height = 5.6        # Float
is_student = True   # Boolean
```

---

## 3️⃣ Input and Output

```python showLineNumbers
name = input("Enter your name: ")
print("Hello,", name)
```

---

## 4️⃣ Conditional Statements

```python showLineNumbers
x = 10
if x > 5:
    print("Greater than 5")
elif x == 5:
    print("Equal to 5")
else:
    print("Less than 5")
```

---

## 5️⃣ Loops

### For Loop
```python showLineNumbers
for i in range(5):
    print(i)
```

### While Loop
```python showLineNumbers
count = 0
while count < 5:
    print(count)
    count += 1
```

---

## 6️⃣ Functions

```python showLineNumbers
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))
```

---

## 7️⃣ Lists, Tuples, and Dictionaries

```python showLineNumbers
fruits = ["apple", "banana", "cherry"]   # List
coordinates = (10, 20)                   # Tuple
person = {"name": "Alice", "age": 25}    # Dictionary
```

---

## 8️⃣ File Handling

### Writing to a file
```python showLineNumbers
with open("example.txt", "w") as f:
    f.write("Hello, file!")
```

### Reading from a file
```python showLineNumbers
with open("example.txt", "r") as f:
    print(f.read())
```

---

## 9️⃣ Exception Handling

```python showLineNumbers
try:
    num = int(input("Enter a number: "))
    print(10 / num)
except ZeroDivisionError:
    print("Cannot divide by zero!")
except ValueError:
    print("Invalid input!")
```

---

## 🔟 Modules and Libraries

```python showLineNumbers
import math

print(math.sqrt(16))
```

---

## 1️⃣1️⃣ Classes and Objects

```python showLineNumbers
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        print(f"Hi, I'm {self.name} and I'm {self.age} years old.")

p1 = Person("Alice", 25)
p1.greet()
```

---

## 1️⃣2️⃣ List Comprehensions

```python showLineNumbers
squares = [x**2 for x in range(10)]
print(squares)
```

---

## 1️⃣3️⃣ Virtual Environments

```bash
python -m venv myenv
source myenv/bin/activate  # Mac/Linux
myenv\Scripts\activate   # Windows
```

---

## 1️⃣4️⃣ Installing Packages

```bash
pip install requests
```

---

## 1️⃣5️⃣ Making HTTP Requests

```python showLineNumbers
import requests

response = requests.get("https://api.github.com")
print(response.status_code)
print(response.json())
```

---

## 🎯 Conclusion

By now, you should have a strong grasp of Python fundamentals and be ready to explore advanced topics like web development, data science, and automation!
