import { AddExpense } from "./components/AddExpense";
import { AddIncome } from "./components/AddIncome";
import { BalanceCard } from "./components/BalanceCard";
import { History } from "./components/History";
import { useStore } from "./store";

export const App = () => {
  const { cleanTransactions } = useStore();

  return (
    <main className="flex flex-col gap-2 p-4 h-screen max-w-sm mx-auto">
      <h1 className="text-xl font-semibold text-center">MiEconomia</h1>
      <BalanceCard />
      <div className="flex gap-2 justify-betweenw-full">
        <AddIncome />
        <AddExpense />
      </div>
      <h2 className="text-sm font-light text-zinc-400">
        Historial de movimientos
      </h2>
      <History />
      <button onClick={cleanTransactions} className="text-sm border-1 border-zinc-500 rounded-lg p-2 cursor-pointer">
        Eliminar historial
      </button>
    </main>
  );
};
