
# Course Management API

**Advanced Web Technology: Lab Task 2**

A RESTful API built with **NestJS** for managing university courses. It supports full CRUD operations, request validation with `class-validator`, and file upload for course materials. Data is stored in memory, so it resets every time the server restarts.



## Features

- Create, read, update (full and partial) and delete courses
- Request body validation with clear error messages
- Unknown properties are rejected (`forbidNonWhitelisted`)
- Route parameters validated with `ParseIntPipe`
- `404 Not Found` for courses that do not exist
- Upload course material (`.jpg`, `.jpeg`, `.png`, `.pdf`) with a 2 MB size limit


## Getting Started

```bash
cd course-management-api
npm install
npm run start:dev
```
## Validation Rules

| Field | Rule |
|---|---|
| `name` | Required, string, not empty |
| `code` | Required, string, not empty |
| `instructor` | Required, string, not empty |
| `credits` | Required, number, between **1** and **6** |
| `description` | Optional, string |


## Test Results: Valid Requests

All requests below were tested with Postman and returned a success status. 
### 1. POST http://localhost:3000/course :

<img src="LabTask2/screenShort/validCheck/1.png" alt="POST /course - 201 Created" width="720">

### 2. GET http://localhost:3000/course


<img src="LabTask2/screenShort/validCheck/2.png" alt="GET /course - 200 OK" width="720">

### 3. GET http://localhost:3000/course/5


<img src="LabTask2/screenShort/validCheck/3.png" alt="GET /course/5 - 200 OK" width="720">

### 4. PUT http://localhost:3000/course/5

before
<img src="LabTask2/screenShort/validCheck/4before.png" alt="PUT /course/5 - before" width="720">

after
<img src="LabTask2/screenShort/validCheck/4after.png" alt="PUT /course/5 - after" width="720">

### 5. PATCH http://localhost:3000/course/5

 Before
<img src="LabTask2/screenShort/validCheck/5before.png" alt="PATCH /course/5 - before" width="720">

After:

<img src="LabTask2/screenShort/validCheck/5after.png" alt="PATCH /course/5 - after" width="720">

### 6. DELETE http://localhost:3000/course/5


<img src="LabTask2/screenShort/validCheck/6.png" alt="DELETE /course/5 - 200 OK" width="720">

### 7. POST http://localhost:3000/course/5/upload


<img src="LabTask2/screenShort/validCheck/7.png" alt="POST /course/5/upload - 201 Created" width="720">

---

## Test Results: Invalid Requests


### 1. POST /course with empty name

<img src="LabTask2/screenShort/InvalidCheck/1.png" alt="POST /course without name - 400" width="720">

### 2. POST /course with credits: 10 

<img src="LabTask2/screenShort/InvalidCheck/2.png" alt="POST /course with credits 10 - 400" width="720">

### 3. POST /course with missing required fields

<img src="LabTask2/screenShort/InvalidCheck/3.png" alt="POST /course with missing fields - 400" width="720">

### 4. POST /course with extra unknown fields

<img src="LabTask2/screenShort/InvalidCheck/4.png" alt="POST /course with unknown field - 400" width="720">

### 5. POST /course/:id/upload with a .txt or .exe file


<img src="LabTask2/screenShort/InvalidCheck/5.png" alt="Upload .txt file - 400" width="720">

### 6. POST /course/:id/upload with a file larger than 2MB


<img src="LabTask2/screenShort/InvalidCheck/6.png" alt="Upload large file - 413" width="720">

All 13 test cases behave as expected.
