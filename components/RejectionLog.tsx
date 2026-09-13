import type { RejectionLog as RejectionLogType } from "@/types/lesson";

type Props = {
  logs: RejectionLogType[];
};

export default function RejectionLog({
  logs,
}: Props) {
  if (logs.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-slate-200 pt-8">
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-slate-900">
          Run history
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Evaluation decisions and regeneration feedback
        </p>
      </div>

      <div className="space-y-3">
        {logs.map((log) => (
          <div
            key={log.attempt}
            className="rounded-lg border border-slate-200 bg-white p-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-900">
                Attempt {log.attempt}
              </span>

              <span
                className={
                  log.status === "PASSED"
                    ? "text-xs font-semibold text-emerald-600"
                    : "text-xs font-semibold text-amber-600"
                }
              >
                {log.status}
              </span>
            </div>

            {log.failed_checks.length > 0 && (
              <div className="mt-3">
                <p className="text-xs font-medium text-slate-600">
                  Failed checks
                </p>

                <div className="mt-1 flex flex-wrap gap-2">
                  {log.failed_checks.map(
                    (check) => (
                      <span
                        key={check}
                        className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700"
                      >
                        {check}
                      </span>
                    ),
                  )}
                </div>
              </div>
            )}

            {log.changes_made.length > 0 && (
              <div className="mt-3">
                <p className="text-xs font-medium text-slate-600">
                  Changes applied
                </p>

                <ul className="mt-1 space-y-1">
                  {log.changes_made.map(
                    (change) => (
                      <li
                        key={change}
                        className="text-xs leading-5 text-slate-600"
                      >
                        {change}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}