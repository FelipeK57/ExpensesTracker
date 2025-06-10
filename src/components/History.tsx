import { useStore } from "../store";
import { ExpenseCard } from "./ExpenseCard";
import { IncomeCard } from "./IncomeCard";

export const History = () => {
  const { transactions } = useStore();

  return (
    <div className="flex flex-col gap-2 h-full overflow-y-auto">
      {transactions.map((transaction) =>
        transaction.move === "income" ? (
          <IncomeCard key={transaction.id} income={transaction.object} />
        ) : (
          <ExpenseCard key={transaction.id} expense={transaction.object} />
        )
      )}
    </div>
  );
};
