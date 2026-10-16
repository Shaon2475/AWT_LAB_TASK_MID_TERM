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
export declare class CourseService {
    courses: Course[];
    private findIndexOrFail;
    getAllCourses(): {
        message: string;
        data: Course[];
    };
    getCourseById(id: number): {
        message: string;
        id: number;
        data: Course;
    };
    createCourse(dto: CreateCourseDto): {
        message: string;
        data: Course;
    };
    updateCourse(id: number, dto: CreateCourseDto): {
        message: string;
        id: number;
        data: Course;
    };
    patchCourse(id: number, dto: UpdateCourseDto): {
        message: string;
        id: number;
        updatedFields: string[];
        data: Course;
    };
    deleteCourse(id: number): {
        message: string;
        id: number;
    };
    uploadCourseMaterial(id: number, file: Express.Multer.File): {
        message: string;
        courseId: number;
        filename: string;
        path: string;
    };
}
