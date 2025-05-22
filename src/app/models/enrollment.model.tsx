export interface Enrollment {
  id: number
  studentId: number
  courseId: number
  enrollmentDate: string
  status: "completed" | "in_progress" | "not_started"
  progress: number
}

export interface EnrolledCourse {
  id: number
  title: string
  description: string
  enrollmentDate: string
  status: "completed" | "in_progress" | "not_started"
  progress: number
  instructorName: string
  categoryName: string
}
