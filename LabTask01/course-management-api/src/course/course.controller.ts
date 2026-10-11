import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service.js';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getAllCourses() {
    return this.courseService.getAllCourses();
  }

  @Get(':id')
  getCourseById(@Param('id') id: string) {
    return this.courseService.getCourseById(id);
  }

  @Post()
  createCourse(@Body() body: any) {
    return this.courseService.createCourse(body);
  }

  @Put(':id')
  updateCourse(@Param('id') id: string, @Body() body: any) {
    return this.courseService.updateCourse(id, body);
  }

  @Patch(':id')
  patchCourse(@Param('id') id: string, @Body() body: any) {
    return this.courseService.patchCourse(id, body);
  }

  @Delete(':id')
  deleteCourse(@Param('id') id: string) {
    return this.courseService.deleteCourse(id);
  }
}