import { Student } from "./student.model";

export interface ReportData {
  courseTitle: string;
  generatedDate: string;
  students: Student[];
}
