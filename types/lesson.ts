export type RubricCheck = {
  passed: boolean;
  reason: string;
  feedback: string;
};

export type RejectionLog = {
  attempt: number;
  status: "REJECTED" | "PASSED";
  failed_checks: string[];
  feedback: string[];
  changes_made: string[];
};

export type LessonResponse = {
  status: "passed" | "failed" | "error";
  topic?: string;
  attempts: number;
  lesson?: string;
  rejection_log: RejectionLog[];
};