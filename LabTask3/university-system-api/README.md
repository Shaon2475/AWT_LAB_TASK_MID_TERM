                                                         # 🎓 University System API

                                                                ## 👤 INFORMATION

                                                         **Name:** _MD. SALAUDDIN SHAON

                                                         **ID:** 23-54463-3

                                                         **Course:** _ADVANCED PROGRAMMING IN WEB TECHNOLOG_

                                                         **Section:** C 



## 📖 Overview

**Dependency Injection** is a design pattern where a class receives its dependencies from an external source instead of creating them itself. NestJS has a built-in DI container that creates and shares service instances automatically.

This project shows how services depend on each other:

- inside the **same module**,
- across **different modules**, and
- in a **circular** way, resolved safely with `forwardRef()`.


### Installation & Run

# 1. Install dependencies
npm install

# 2. Run in development (watch) mode
npm run start:dev
```

The server starts on **http://localhost:3000** (override with the `PORT` environment variable).



## 🧪 Test Cases & Screenshots


### Part A — Intra-Module DI 

> `CourseController` uses `CourseService` from the **same module**.

#### ✅ Test A1 — Get all courses

- **Request:** `GET http://localhost:3000/course`
-

![Test A1 - Get all courses](../screenshots/a1.png)

#### ✅ Test A2 — Get course by ID

- **Request:** `GET http://localhost:3000/course/101

![Test A2 - Get course by ID](../screenshots/a2.png)

#### ✅ Test A3 — Create a course

- **Request:** `POST http://localhost:3000/course`

![Test A3 - Create course](../screenshots/a3.png)

---

### Part B — Inter-Module DI 

#### ✅ Test B1 — Get all enrollments

![Test B1 - Get enrollments](./screenshots/b1.png)

#### ✅ Test B2 — Enroll a student (valid course)


![Test B2 - Enroll student](../screenshots/b2.png)

#### ⚠️ Test B3 — Enroll a student (course ID that does not exist)


![Test B3 - Enroll with unknown course](../screenshots/b3.png)

---

### Part C — Circular Dependency 


#### ✅ Test C1 — Send a notification

![Test C1 - Send notification](../screenshots/c1.png)

#### ✅ Test C2 — Check enrollment and notify


![Test C2 - Check enrollment](../screenshots/c2.png)

#### ✅ Test C3 — Enroll a student and receive a notification


![Test C3 - Enroll with notification](../screenshots/c3.png)

#### ✅ Test C4 — App starts without circular dependency errors


![Test C4 - Application startup log](../screenshots/c4.png)

--


## 🏛️ Architecture Rules Followed

- ✔️ `@Injectable()` is on every service class
- ✔️ Constructor injection is used everywhere. No service is created with `new`
- ✔️ Every service is listed in `providers[]` of its module
- ✔️ A service used by another module is listed in `exports[]`
- ✔️ The consuming module imports the **module**, not the service directly
- ✔️ `forwardRef()` is used on **both sides** of the circular dependency, in both modules and both constructors
- ✔️ Business logic lives in the **Services**, controllers only call services


