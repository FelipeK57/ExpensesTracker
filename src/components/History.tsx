import { useStore } from "../store";
import { ExpenseCard } from "./ExpenseCard";
import { IncomeCard } from "./IncomeCard";

interface HistoryProps {
  selection: "all" | "income" | "expense";
}

export const History = ({ selection }: HistoryProps) => {
  const { transactions } = useStore();

  return (
    <div className="flex flex-col gap-2 h-full overflow-y-auto">
      {transactions.length > 0 ? (
        transactions
          .filter((transaction) => {
            if (selection === "all") return true;
            if (selection === "income") return transaction.move === "income";
            if (selection === "expense") return transaction.move === "expense";
          })
          .map((transaction) =>
            transaction.move === "income" ? (
              <IncomeCard key={transaction.id} income={transaction.object} />
            ) : (
              <ExpenseCard key={transaction.id} expense={transaction.object} />
            )
          )
      ) : (
        <p className="text-sm text-zinc-500 w-full text-center">
          No hay registros
        </p>
      )}
    </div>
  );
};
