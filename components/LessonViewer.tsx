import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type LessonViewerProps = {
  lesson?: string;
};

export default function LessonViewer({ lesson }: LessonViewerProps) {
  return (
    <article className="max-w-none text-slate-700">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mb-8 text-3xl font-bold leading-tight text-slate-950">
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className="mt-10 mb-4 border-b border-slate-200 pb-2 text-xl font-semibold leading-tight text-slate-900">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="mt-8 mb-3 text-lg font-semibold text-slate-900">
              {children}
            </h3>
          ),

          p: ({ children }) => (
            <p className="mb-5 text-base leading-8 text-slate-700">
              {children}
            </p>
          ),

          strong: ({ children }) => (
            <strong className="font-semibold text-slate-900">
              {children}
            </strong>
          ),

          ul: ({ children }) => (
            <ul className="mb-6 ml-5 list-disc space-y-2">
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="mb-6 ml-5 list-decimal space-y-2">
              {children}
            </ol>
          ),

          li: ({ children }) => (
            <li className="pl-1 leading-7">
              {children}
            </li>
          ),

          blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-4 border-slate-300 pl-5 text-slate-600">
              {children}
            </blockquote>
          ),

          code: ({ children }) => (
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-800">
              {children}
            </code>
          ),
        }}
      >
        {lesson}
      </ReactMarkdown>
    </article>
  );
}