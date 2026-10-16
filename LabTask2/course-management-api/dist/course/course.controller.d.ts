import { CourseService } from './course.service.js';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    getAllCourses(): {
        message: string;
        data: import("./course.service.js").Course[];
    };
    getCourseById(id: number): {
        message: string;
        id: number;
        data: import("./course.service.js").Course;
    };
    createCourse(dto: CreateCourseDto): {
        message: string;
        data: import("./course.service.js").Course;
    };
    updateCourse(id: number, dto: CreateCourseDto): {
        message: string;
        id: number;
        data: import("./course.service.js").Course;
    };
    patchCourse(id: number, dto: UpdateCourseDto): {
        message: string;
        id: number;
        updatedFields: string[];
        data: import("./course.service.js").Course;
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
