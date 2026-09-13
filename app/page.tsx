"use client";

import { useState } from "react";

import Header from "@/components/Header";
import TopicForm from "@/components/TopicForm";
import LessonViewer from "@/components/LessonViewer";
import EvaluationPanel from "@/components/EvaluationPanel";
import RejectionLog from "@/components/RejectionLog";

import type { LessonResponse } from "@/types/lesson";

export default function Home() {
  const [result, setResult] =
    useState<LessonResponse | null>(null);

  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <section className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Content quality system
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Generate a lesson
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Create beginner-friendly learning content
            and let the evaluator decide whether it is
            ready to ship.
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <TopicForm
            onResult={setResult}
            onLoading={setLoading}
          />
        </section>

        {loading && (
          <div className="mt-6 rounded-lg border border-slate-200 bg-white px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-slate-900" />

              <div>
                <p className="text-sm font-medium text-slate-800">
                  Generating and evaluating
                </p>

                <p className="text-xs text-slate-500">
                  The system may regenerate the lesson
                  if it fails the quality checks.
                </p>
              </div>
            </div>
          </div>
        )}

        {result && (
          <>
            <section className="mt-8 grid gap-6 lg:grid-cols-[1.65fr_0.85fr]">
              <div className="min-h-[620px] rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Generated lesson
                  </p>

                  <h2 className="mt-1 text-lg font-semibold text-slate-900">
                    {result.topic}
                  </h2>
                </div>

                <LessonViewer
                  lesson={result.lesson}
                />
              </div>

              <div className="min-h-[620px] rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <EvaluationPanel
                  logs={result.rejection_log}
                />
              </div>
            </section>

            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <RejectionLog
                logs={result.rejection_log}
              />
            </div>
          </>
        )}
      </div>
    </main>
  );
}