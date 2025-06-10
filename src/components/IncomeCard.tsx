import { type Income } from "../store";

interface IncomeCardProps {
  income: Income;
}

export const IncomeCard = ({ income }: IncomeCardProps) => {
  return (
    <div className="flex justify-between items-center bg-zinc-900 rounded-lg p-2 border-1 border-zinc-800 mx-1">
      <span className="text-sm text-zinc-300">{income.reason}</span>
      <span className="text-sm text-green-700">+${income.amount}</span>
    </div>
  );
};
