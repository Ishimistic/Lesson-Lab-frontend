"use client";

import { FormEvent, useState } from "react";
import type { LessonResponse } from "@/types/lesson";
import { generateLesson } from "@/lib/api";

type Props = {
  onResult: (result: LessonResponse) => void;
  onLoading: (loading: boolean) => void;
};

export default function TopicForm({
  onResult,
  onLoading,
}: Props) {
  const [topic, setTopic] = useState(
    "Introduction to RAG",
  );

  const [error, setError] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (!topic.trim()) {
      setError("Please enter a topic.");
      return;
    }

    setError("");
    onLoading(true);

    try {
      const result = await generateLesson(
        topic.trim(),
      );

      onResult(result);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong.",
      );
    } finally {
      onLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label
          htmlFor="topic"
          className="mb-2 block text-sm font-medium text-slate-800"
        >
          Topic
        </label>

        <input
          id="topic"
          value={topic}
          onChange={(event) =>
            setTopic(event.target.value)
          }
          placeholder="e.g. Introduction to RAG"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
        />

        <p className="mt-2 text-xs text-slate-500">
          The system assumes the learner is starting
          from zero.
        </p>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Generate lesson
      </button>
    </form>
  );
}