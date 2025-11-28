import { Spinner } from '$components/spinner';

export function LoadingFallback() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-12">
      <Spinner size="xl" />
      <p className="text-sm text-slate-600 dark:text-slate-400">Loading component...</p>
    </div>
  );
}
