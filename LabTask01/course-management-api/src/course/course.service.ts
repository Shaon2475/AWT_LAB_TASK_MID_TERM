import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  courses = [
    { id: 1, courseName: 'Advanced Web Technology', section: 'A', capacitySeats: 40 },
    { id: 2, courseName: 'Database Management', section: 'B', capacitySeats: 35 },
    { id: 3, courseName: 'Software Engineering', section: 'C', capacitySeats: 50 },
    { id: 4, courseName: 'Computer Networks', section: 'D', capacitySeats: 45 },
  ];

  getAllCourses() {
    return this.courses;
  }
  getCourseById(id: string) {
    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i].id == Number(id)) {
        return this.courses[i];
      }
    }
    return 'Course not found';
  }

  createCourse(body: any) {
    const course = {
      id: body.id,
      courseName: body.courseName,
      section: body.section,
      capacitySeats: body.capacitySeats,
    };
    this.courses.push(course);
    return course;
  }

  updateCourse(id: string, body: any) {
    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i].id == Number(id)) {
        this.courses[i].courseName = body.courseName;
        this.courses[i].section = body.section;
        this.courses[i].capacitySeats = body.capacitySeats;
        return this.courses[i];
      }
    }
    return 'Course not found';
  }

  patchCourse(id: string, body: any) {
    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i].id == Number(id)) {
        if (body.courseName) this.courses[i].courseName = body.courseName;
        if (body.section) this.courses[i].section = body.section;
        if (body.capacitySeats) this.courses[i].capacitySeats = body.capacitySeats;
        return this.courses[i];
      }
    }
    return 'Course not found';
  }

  deleteCourse(id: string) {
    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i].id == Number(id)) {
        this.courses.splice(i, 1);
        return `Delete Course ${id} successfully`;
      }
    }
    return 'Course not found';
  }
}