import { AddExpense } from "./components/AddExpense";
import { AddIncome } from "./components/AddIncome";
import { BalanceCard } from "./components/BalanceCard";
import { History } from "./components/History";

export const App = () => {
  return (
    <main className="flex flex-col gap-2 p-4 h-screen max-w-sm mx-auto">
      <h1 className="text-xl font-semibold text-center">MiEconomia</h1>
      <BalanceCard />
      <div className="flex gap-2 justify-betweenw-full">
        <AddIncome />
        <AddExpense />
      </div>
      <History />
    </main>
  );
};
