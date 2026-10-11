                                    Information 
This folder contains the solution of Lab Task 01.

Name : Md. Salauddin Shaon
ID:  23-54463-3
Course (section) : Advanced Programming in Web Technologies ( C )


## Architecture Rules

**Controller → Handles request & response** (`src/course/course.controller.ts`)

The controller receives the HTTP request (route, `:id`, JSON body) and returns the response.

| Function | Decorator | Calls |
|---|---|---|
| `getAllCourses()` | `@Get()` | `courseService.getAllCourses()` |
| `getCourseById(id)` | `@Get(':id')`, `@Param('id')` | `courseService.getCourseById(id)` |
| `createCourse(body)` | `@Post()`, `@Body()` | `courseService.createCourse(body)` |
| `updateCourse(id, body)` | `@Put(':id')`, `@Param('id')`, `@Body()` | `courseService.updateCourse(id, body)` |
| `patchCourse(id, body)` | `@Patch(':id')`, `@Param('id')`, `@Body()` | `courseService.patchCourse(id, body)` |
| `deleteCourse(id)` | `@Delete(':id')`, `@Param('id')` | `courseService.deleteCourse(id)` |

The service is injected with `constructor(private readonly courseService: CourseService) {}`.

**Service → Handles business logic** (`src/course/course.service.ts`)

| Function | Logic |
|---|---|
| `getAllCourses()` | Returns the full course list |
| `getCourseById(id)` | Searches the list for the matching ID |
| `createCourse(body)` | Creates a new ID, builds the course and adds it to the list |
| `updateCourse(id, body)` | Finds the course and replaces all its fields |
| `patchCourse(id, body)` | Finds the course and changes only the given fields |
| `deleteCourse(id)` | Finds the course and removes it from the list |

**Module → Organizes related files**

- `src/course/course.module.ts`: groups `CourseController` (in `controllers`) and `CourseService` (in `providers`).
- `src/app.module.ts`: registers `CourseModule` in `imports`.

**No business logic inside Controller**

Every controller function has only one line: `return this.courseService.<method>(...)`. There is no searching, ID creation, or data change in the controller. All of that is inside `course.service.ts`.

## Run the project

```
npm install
npm run start:dev
```

Server runs at `http://localhost:3000`

## Routes

| Method | Route | Description |
|---|---|---|
| GET | `/course` | Get all courses |
| GET | `/course/:id` | Get course by ID |
| POST | `/course` | Create new course |
| PUT | `/course/:id` | Update full course |
| PATCH | `/course/:id` | Update partial course |
| DELETE | `/course/:id` | Delete course |

## Testing (Postman)

### 1. GET `http://localhost:3000/course`
Returns all courses.

![GET all courses](screenshots/01-get-all-courses.png)

### 2. GET `http://localhost:3000/course/5`
Returns the course with ID 5.

![GET course by id](screenshots/02-get-course-by-id.png)

### 3. POST `http://localhost:3000/course`
Creates a new course. The server gives the next ID.

![POST create course 1](screenshots/03-post-create-course-1.png)

![POST create course 2](screenshots/04-post-create-course-2.png)

### 4. PUT `http://localhost:3000/course/5`
Updates the full course (all fields).

![PUT update course](screenshots/05-put-update-course.png)

### 5. PATCH `http://localhost:3000/course/5`
Updates only the given field(s).

![PATCH update course](screenshots/06-patch-update-course.png)

### 6. DELETE `http://localhost:3000/course/5`
Deletes the course with ID 5.

![DELETE course](screenshots/07-delete-course.png)
