import courseService from "app/services/course.service";
import { useEffect, useState } from "react";
import { Course } from "app/models/course.model";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "root/components/ui/table";

const CourseList = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    courseService.getAll().then((data) => setCourses(data));
    console.log(courses);
  }, []);

  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-center">Course List</h1>
        <button className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">
          Add Course
        </button>
      </div>
      <Table className=" bg-sky-200 tet-base rounded-t-lg">
        <TableHeader>
          <TableRow className="text-base font-bold">
            <TableHead>Id</TableHead>
            <TableHead className="w-24">Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Instructor</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.id}>
              <TableCell>{course.id}</TableCell>
              <TableCell>{course.title}</TableCell>
              <TableCell>{course.description}</TableCell>
              <TableCell>{course.instructorId}</TableCell>
              <TableCell>{course.categoryId}</TableCell>
              <TableCell>{course.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CourseList;
