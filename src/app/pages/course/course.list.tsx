import courseService from "app/services/course.service";
import { useEffect, useState } from "react";
import { Course } from "../../models/course.model";

const CourseList = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    courseService.getAll().then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <h1>Course List</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
