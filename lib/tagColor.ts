export function tagColor(tag: string): string {
  const t = tag.toLowerCase();
  if (/finance|quant|option|trading|stochastic|risk|black.scholes|backtest/.test(t))
    return "bg-emerald-50 text-emerald-700";
  if (/pytorch|machine learning|llm|ai|neural|transformer|scikit|vector db/.test(t))
    return "bg-violet-50 text-violet-700";
  if (/distributed|raft|grpc|docker|kubernetes|redis|systems|consensus/.test(t))
    return "bg-sky-50 text-sky-700";
  return "bg-indigo-50 text-indigo-700";
}
