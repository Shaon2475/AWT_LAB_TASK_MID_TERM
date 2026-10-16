import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';

export interface Course {
  id: number;
  name: string;
  code: string;
  instructor: string;
  credits: number;
  description?: string;
}

@Injectable()
export class CourseService {
  courses: Course[] = [
    { id: 1, name: 'Advanced Web Technology', code: 'CS101', instructor: 'John Doe', credits: 3 },
    { id: 2, name: 'Database Management', code: 'CS102', instructor: 'Jane Smith', credits: 3 },
    { id: 3, name: 'Software Engineering', code: 'CS103', instructor: 'Alex Brown', credits: 4 },
    { id: 4, name: 'Computer Networks', code: 'CS104', instructor: 'Sara Khan', credits: 3 },
    { id: 5, name: 'Operating Systems', code: 'CS105', instructor: 'Mark Lee', credits: 2 },
  ];

  private findIndexOrFail(id: number): number {
    const index = this.courses.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }
    return index;
  }

  getAllCourses() {
    return { message: 'All courses fetched successfully', data: this.courses };
  }

  getCourseById(id: number) {
    const index = this.findIndexOrFail(id);
    return { message: 'Course fetched successfully', id, data: this.courses[index] };
  }

  createCourse(dto: CreateCourseDto) {
    const newId = this.courses.length > 0 ? Math.max(...this.courses.map((c) => c.id)) + 1 : 1;

    const course: Course = {
      id: newId,
      name: dto.name,
      code: dto.code,
      instructor: dto.instructor,
      credits: dto.credits,
      description: dto.description,
    };
    this.courses.push(course);
    return { message: 'Course created successfully', data: course };
  }

  updateCourse(id: number, dto: CreateCourseDto) {
    const index = this.findIndexOrFail(id);
    this.courses[index] = {
      id,
      name: dto.name,
      code: dto.code,
      instructor: dto.instructor,
      credits: dto.credits,
      description: dto.description,
    };
    return { message: 'Course updated successfully', id, data: this.courses[index] };
  }

  
  patchCourse(id: number, dto: UpdateCourseDto) {
    const index = this.findIndexOrFail(id);
    Object.assign(this.courses[index], dto);
    return {
      message: 'Course patched successfully',
      id,
      updatedFields: Object.keys(dto),
      data: this.courses[index],
    };
  }

  deleteCourse(id: number) {
    const index = this.findIndexOrFail(id);
    this.courses.splice(index, 1);
    return { message: 'Course deleted successfully', id };
  }

  uploadCourseMaterial(id: number, file: Express.Multer.File) {
    this.findIndexOrFail(id);
    if (!file) {
      throw new BadRequestException('File is required');
    }
    return {
      message: 'Material uploaded successfully',
      courseId: id,
      filename: file.filename,
      path: `uploads/${file.filename}`,
    };
  }
}