import { type Expense } from "../store";

interface ExpenseCardProps {
  expense: Expense;
}

export const ExpenseCard = ({ expense }: ExpenseCardProps) => {
  return (
    <div className="flex justify-between items-center bg-zinc-900 rounded-lg p-2 border-1 border-zinc-800">
      <span className="text-sm text-zinc-300">{expense.reason}</span>
      <span className="text-sm text-red-700">-${expense.amount}</span>
    </div>
  );
};
