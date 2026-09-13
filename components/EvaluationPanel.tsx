import type { RejectionLog } from "@/types/lesson";

type Props = {
  logs: RejectionLog[];
};

const rubricLabels: Record<string, string> = {
  accuracy: "Accuracy",
  beginner_friendly: "Beginner friendly",
  examples: "Examples",
  jargon: "Jargon",
  coverage: "Coverage",
  flow: "Teaching flow",
};

export default function EvaluationPanel({
  logs,
}: Props) {
  const latest = logs[logs.length - 1];

  if (!latest) {
    return (
      <div className="flex h-full items-center justify-center text-sm text-slate-400">
        Evaluation results will appear here.
      </div>
    );
  }

  const failed = new Set(
    latest.failed_checks,
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            Quality evaluation
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Attempt {latest.attempt}
          </p>
        </div>

        <span
          className={
            latest.status === "PASSED"
              ? "rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
              : "rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700"
          }
        >
          {latest.status}
        </span>
      </div>

      <div className="divide-y divide-slate-100 rounded-lg border border-slate-200">
        {Object.entries(rubricLabels).map(
          ([key, label]) => {
            const hasFailed = failed.has(key);

            return (
              <div
                key={key}
                className="flex items-center justify-between px-4 py-3"
              >
                <span className="text-sm text-slate-700">
                  {label}
                </span>

                <span
                  className={
                    hasFailed
                      ? "text-xs font-semibold text-rose-600"
                      : "text-xs font-semibold text-emerald-600"
                  }
                >
                  {hasFailed ? "FAIL" : "PASS"}
                </span>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
}