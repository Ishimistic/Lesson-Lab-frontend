export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div>
          <div className="text-sm font-semibold tracking-wide text-slate-900">
            LESSON LAB
          </div>

          <div className="text-xs text-slate-500">
            Self-evaluating content system
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          API Connected
        </div>
      </div>
    </header>
  );
}