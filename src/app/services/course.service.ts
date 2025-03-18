import { environment } from "@/environments/environment";

import { Course } from "app/models/course.model";
import axios from "axios";

class CourseService {
  private baseUrl: string;
  constructor() {
    console.log(environment.apiBaseUrl);
    this.baseUrl = `${environment.apiBaseUrl}/courses`;
  }

  async getAll(): Promise<Course[]> {
    const response = await axios.get<Course[]>(`${this.baseUrl}/all`);
    return response.data;
  }
}

export default new CourseService();
