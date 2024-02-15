import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";

interface BadgeProps {
  percentage: number;
}

export const Badge = ({ percentage }: BadgeProps) => {
  const isPositive = percentage > 0;
  const isNeutral = percentage === 0;
  const isNegative = percentage < 0;

  if (isNaN(percentage)) {
    return null;
  }

  const positiveClassName = "bg-green-900/25 text-green-400 ring-green-400/25";
  const neutralClassName = "bg-zinc-900/25 text-zinc-400 ring-zinc-400/25";
  const negativeClassName = "bg-red-900/25 text-red-400 ring-red-400/25";

  return (
    <span
      className={`inline-flex gap-1 items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
        isPositive
          ? positiveClassName
          : isNeutral
          ? neutralClassName
          : negativeClassName
      }`}
    >
      {isPositive ? <ArrowUpRight className="h-3 w-3" /> : null}
      {isNeutral ? <ArrowRight className="h-3 w-3" /> : null}
      {isNegative ? <ArrowDownRight className="h-3 w-3" /> : null}
      {percentage.toFixed(0)}%
    </span>
  );
};
