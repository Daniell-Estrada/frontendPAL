import { ExamResult } from "./exam_result.model";

export interface Student {
  studentName: string;
  courseProgress: number;
  averageScore: number;
  forumMessages: number;
  examResults: ExamResult[];
}
