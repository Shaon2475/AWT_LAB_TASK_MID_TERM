# 🎓 University System API

## 👤 INFORMATION

**Name:** _MD. SALAUDDIN SHAON
**ID:** _23-54463-3_
**Course:** _ADVANCED PROGRAMMING IN WEB TECHNOLOG_
**Section:** _ C _


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


### Part A — Intra-Module DI (`CourseModule`)

> `CourseController` uses `CourseService` from the **same module**.

#### ✅ Test A1 — Get all courses

- **Request:** `GET http://localhost:3000/course`
- **Expected:** `200 OK` with the list of courses

![Test A1 - Get all courses](./screenshots/a1.png)

#### ✅ Test A2 — Get course by ID

- **Request:** `GET http://localhost:3000/course/101`
- **Expected:** `200 OK` with the course whose `id` is `101`

![Test A2 - Get course by ID](./screenshots/a2.png)

#### ✅ Test A3 — Create a course

- **Request:** `POST http://localhost:3000/course`
- **Body:**
  ```json
  { "name": "NestJS", "code": "CS301" }
  ```
- **Expected:** `201 Created` with the message `Course created`

![Test A3 - Create course](./screenshots/a3.png)

---

### Part B — Inter-Module DI (`EnrollmentModule` → `CourseModule`)

> `EnrollmentService` uses `CourseService` from a **different module**.
> `CourseModule` **exports** `CourseService`, and `EnrollmentModule` **imports** `CourseModule`.

#### ✅ Test B1 — Get all enrollments

- **Request:** `GET http://localhost:3000/enrollment`
- **Expected:** `200 OK` with an empty `data` array

![Test B1 - Get enrollments](./screenshots/b1.png)

#### ✅ Test B2 — Enroll a student (valid course)

- **Request:** `POST http://localhost:3000/enrollment`
- **Body:**
  ```json
  { "studentName": "John Shaon", "courseId": "101" }
  ```
- **Expected:** `201 Created`. The response contains the **course data returned by `CourseService`**, which proves inter-module DI works.

![Test B2 - Enroll student](./screenshots/b2.png)

#### ⚠️ Test B3 — Enroll a student (course ID that does not exist)

- **Request:** `POST http://localhost:3000/enrollment`
- **Body:**
  ```json
  { "courseId": "cs289", "studentName": "John Shaon" }
  ```
- **Result:** `201 Created`. The course lookup finds no matching course (no `data` field in `course`), but the request still succeeds. See [Notes](#-notes).

![Test B3 - Enroll with unknown course](./screenshots/b3.png)

---

### Part C — Circular Dependency (`EnrollmentModule` ↔ `NotificationModule`)

> `EnrollmentService` needs `NotificationService` to send a notification, and `NotificationService` needs `EnrollmentService` to check enrollments.
> `forwardRef()` is used on **both** modules and **both** constructors to resolve this.

#### ✅ Test C1 — Send a notification

- **Request:** `POST http://localhost:3000/notification/send`
- **Body:**
  ```json
  { "studentName": "John Doe", "message": "Welcome!" }
  ```
- **Expected:** `201 Created` with the message `Notification sent`

![Test C1 - Send notification](./screenshots/c1.png)

#### ✅ Test C2 — Check enrollment and notify

- **Request:** `POST http://localhost:3000/notification/check`
- **Body:**
  ```json
  { "studentName": "John Doe", "courseId": "101" }
  ```
- **Expected:** `201 Created`. `NotificationService` calls `EnrollmentService.getEnrollments()` and returns the result.

![Test C2 - Check enrollment](./screenshots/c2.png)

#### ✅ Test C3 — Enroll a student and receive a notification

- **Request:** `POST http://localhost:3000/enrollment`
- **Body:**
  ```json
  { "studentName": "John Doe", "courseId": "101" }
  ```
- **Expected:** `201 Created`. The response includes both the **course data** and a **notification confirmation**.

![Test C3 - Enroll with notification](./screenshots/c3.png)

#### ✅ Test C4 — App starts without circular dependency errors

- **Check:** Run `npm run start:dev` and verify the terminal.
- **Expected:** All modules initialize, all routes are mapped, and there is **no** `Circular dependency detected` error.

![Test C4 - Application startup log](./screenshots/c4.png)

--


## 🏛️ Architecture Rules Followed

- ✔️ `@Injectable()` is on every service class
- ✔️ Constructor injection is used everywhere. No service is created with `new`
- ✔️ Every service is listed in `providers[]` of its module
- ✔️ A service used by another module is listed in `exports[]`
- ✔️ The consuming module imports the **module**, not the service directly
- ✔️ `forwardRef()` is used on **both sides** of the circular dependency, in both modules and both constructors
- ✔️ Business logic lives in the **Services**, controllers only call services


