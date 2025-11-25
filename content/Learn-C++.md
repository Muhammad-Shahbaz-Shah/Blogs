---
title: "Learn C++"
img: "https://cdn.thenewstack.io/media/2025/01/34e3b0e3-c-introduction.jpg"
desc: "A complete beginner-to-advanced tutorial for learning C++ with detailed examples in a single page."
slug: "Learn-C++"
---

# C++ Tutorial for Beginners to Advanced

Welcome to this comprehensive C++ tutorial! This guide takes you from the basics all the way to advanced concepts, with detailed examples you can run and practice.

---

## 🖥️ Introduction to C++

C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of C. It supports procedural, object-oriented, and generic programming.

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
```

---

## 📦 Variables and Data Types

```cpp
#include <iostream>
using namespace std;

int main() {
    int age = 25;
    double pi = 3.1416;
    char grade = 'A';
    bool isCPlusPlusFun = true;

    cout << "Age: " << age << endl;
    cout << "Pi: " << pi << endl;
    cout << "Grade: " << grade << endl;
    cout << "Fun: " << isCPlusPlusFun << endl;
    return 0;
}
```

---

## 🔄 Control Structures

### If-Else Statement
```cpp
#include <iostream>
using namespace std;

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;

    if (num > 0)
        cout << "Positive" << endl;
    else if (num < 0)
        cout << "Negative" << endl;
    else
        cout << "Zero" << endl;
    return 0;
}
```

### Loops
```cpp
#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++) {
        cout << "Iteration " << i << endl;
    }
    return 0;
}
```

---

## 📜 Functions

```cpp
#include <iostream>
using namespace std;

void greet(string name) {
    cout << "Hello, " << name << "!" << endl;
}

int main() {
    greet("Alice");
    greet("Bob");
    return 0;
}
```

---

## 🏗️ Object-Oriented Programming

```cpp
#include <iostream>
using namespace std;

class Car {
public:
    string brand;
    int year;

    void honk() {
        cout << brand << " says Beep!" << endl;
    }
};

int main() {
    Car car1;
    car1.brand = "Toyota";
    car1.year = 2020;
    car1.honk();
    return 0;
}
```

---

## 📂 File Handling

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main() {
    ofstream file("example.txt");
    file << "Hello, file!" << endl;
    file.close();

    ifstream readFile("example.txt");
    string line;
    while (getline(readFile, line)) {
        cout << line << endl;
    }
    readFile.close();
    return 0;
}
```

---

## 📚 Pointers

```cpp
#include <iostream>
using namespace std;

int main() {
    int var = 42;
    int* ptr = &var;

    cout << "Value: " << var << endl;
    cout << "Pointer Address: " << ptr << endl;
    cout << "Value via Pointer: " << *ptr << endl;
    return 0;
}
```

---

## 🧩 Templates

```cpp
#include <iostream>
using namespace std;

template <typename T>
T add(T a, T b) {
    return a + b;
}

int main() {
    cout << add(5, 3) << endl;
    cout << add(5.5, 2.3) << endl;
    return 0;
}
```

---

## ⚡ Exception Handling

```cpp
#include <iostream>
using namespace std;

int main() {
    try {
        int a = 5, b = 0;
        if (b == 0) throw runtime_error("Division by zero!");
        cout << a / b << endl;
    }
    catch (const exception& e) {
        cout << "Error: " << e.what() << endl;
    }
    return 0;
}
```

---

## 🛠️ Standard Template Library (STL)

### Vectors
```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> numbers = {1, 2, 3, 4, 5};
    numbers.push_back(6);

    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    return 0;
}
```

### Maps
```cpp
#include <iostream>
#include <map>
using namespace std;

int main() {
    map<string, int> ages;
    ages["Alice"] = 25;
    ages["Bob"] = 30;

    for (auto& pair : ages) {
        cout << pair.first << ": " << pair.second << endl;
    }
    return 0;
}
```

---

## 🎯 Conclusion

This tutorial covered C++ from the ground up, including syntax, control structures, OOP, templates, STL, file handling, and exception handling. Continue practicing by building small projects like a **calculator**, **to-do list**, or **simple game**.
