import type { LessonResponse } from "@/types/lesson";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://127.0.0.1:8000";

export async function generateLesson(
  topic: string,
): Promise<LessonResponse> {
  const response = await fetch(
    `${API_URL}/api/lessons/generate/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic }),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message ??
        "Failed to generate lesson.",
    );
  }

  return data;
}