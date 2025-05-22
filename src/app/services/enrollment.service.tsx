import { environment } from "@/environments/environment"
import type { Enrollment, EnrolledCourse } from "app/models/enrollment.model"
import axios from "axios"

class EnrollmentService {
  private readonly baseUrl: string

  constructor() {
    this.baseUrl = `${environment.apiBaseUrl}/enrollments`
  }

  async enrollInCourse(courseId: number): Promise<Enrollment> {
    const response = await axios.post<Enrollment>(`${this.baseUrl}/register`, { courseId })
    return response.data
  }

  async getMyEnrolledCourses(): Promise<EnrolledCourse[]> {
    const response = await axios.get<EnrolledCourse[]>(`${this.baseUrl}/my-courses`)
    return response.data
  }

  async getEnrollmentStatus(courseId: number): Promise<Enrollment | null> {
    try {
      const response = await axios.get<Enrollment>(`${this.baseUrl}/status/${courseId}`)
      return response.data
    } catch (error) {
      return null
    }
  }

  async updateProgress(enrollmentId: number, progress: number): Promise<Enrollment> {
    const response = await axios.put<Enrollment>(`${this.baseUrl}/update-progress/${enrollmentId}`, { progress })
    return response.data
  }
}

export default new EnrollmentService()
