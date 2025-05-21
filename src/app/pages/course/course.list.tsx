import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Pencil, Trash } from "lucide-react";
import { Button } from "root/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "root/components/ui/table";
import { CourseDialog } from "app/components/course/course.dialog";
import type { Course } from "app/models/course.model";
import courseService from "app/services/course.service";

const CourseList = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    courseService.getAll().then((data) => setCourses(data));
  }, []);

  const createCourse = (courseData: Course | undefined) => {
    courseService
      .create(courseData as Course)
      .then((data) => {
        setCourses([...courses, data]);
        toast.success("Course created successfully");
      })
      .catch(() => {
        toast.error("Failed to create course");
      });
  };

  const updateCourse = (data: Course | undefined) => {
    courseService
      .update(data?.id as number, data as Course)
      .then((updatedCourse) => {
        setCourses(
          courses.map((course) =>
            course.id === updatedCourse.id ? updatedCourse : course,
          ),
        );
        toast.success("Course updated successfully");
      })
      .catch(() => {
        toast.error("Failed to update course");
      });
  };

  const deleteCourse = (data: Course | undefined) => {
    courseService
      .delete(data?.id as number)
      .then(() => {
        setCourses(courses.filter((course) => course.id !== data?.id));
        toast.success("Course deleted successfully");
      })
      .catch(() => {
        toast.error("Failed to delete course");
      });
  };

  return (
    <div className="w-full px-20 py-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-center">Course List</h1>
        <CourseDialog
          mode="add"
          onConfirm={createCourse}
          action={
            <button className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">
              Add Course
            </button>
          }
        />
      </div>
      <Table className="text-base">
        <TableHeader className="bg-transparent h-12">
          <TableRow className="font-bold bg-sky-300 rounded-t-lg border-b-2">
            <TableHead className="rounded-tl-lg">Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="w-24">Description</TableHead>
            <TableHead>Instructor</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="rounded-tr-lg">Options</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="bg-white border-b-2 max-h-1 overflow-scroll">
          {courses.map((course) => (
            <TableRow key={course.id}>
              <TableCell>{course.id}</TableCell>
              <TableCell className="w-44 max-w-[14rem] truncate">
                {course.title}
              </TableCell>
              <TableCell className="w-56 max-w-[14rem] truncate">
                {course.description}
              </TableCell>
              <TableCell>{course.instructorId}</TableCell>
              <TableCell>{course.categoryId}</TableCell>
              <TableCell>{course.price}</TableCell>
              <TableCell className="flex gap-2 w-1">
                <CourseDialog
                  mode="edit"
                  course={course}
                  onConfirm={updateCourse}
                  action={
                    <Button
                      variant="outline"
                      size="icon"
                      className="text-blue-500"
                    >
                      <Pencil />
                    </Button>
                  }
                />
                <CourseDialog
                  mode="delete"
                  course={course}
                  onConfirm={deleteCourse}
                  action={
                    <Button
                      variant="outline"
                      size="icon"
                      className="text-red-500"
                    >
                      <Trash />
                    </Button>
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CourseList;
