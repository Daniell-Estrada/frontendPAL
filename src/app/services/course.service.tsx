import { environment } from "@/environments/environment";

import { Course } from "app/models/course.model";
import axios from "axios";

class CourseService {
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${environment.apiBaseUrl}/courses`;
  }

  async getAll(): Promise<Course[]> {
    const response = await axios.get<Course[]>(`${this.baseUrl}/all`);
    return response.data;
  }

  async getOne(id: number): Promise<Course> {
    const response = await axios.get<Course>(`${this.baseUrl}/${id}`);
    return response.data;
  }

  async create(course: Course): Promise<Course> {
    const response = await axios.post<Course>(
      `${this.baseUrl}/create`,
      course,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return response.data;
  }

  async update(id: Number, course: Course): Promise<Course> {
    const response = await axios.put<Course>(
      `${this.baseUrl}/update/${id}`,
      course,
    );
    return response.data;
  }

  async delete(id: number): Promise<void> {
    await axios.delete(`${this.baseUrl}/delete/${id}`);
  }
}

export default new CourseService();
