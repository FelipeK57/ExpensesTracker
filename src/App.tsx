import { useState } from "react";
import { AddExpense } from "./components/AddExpense";
import { AddIncome } from "./components/AddIncome";
import { BalanceCard } from "./components/BalanceCard";
import { DeleteHistory } from "./components/DeleteHistory";
import { History } from "./components/History";

export const App = () => {
  const [selection, setSelection] = useState<"all" | "income" | "expense">(
    "all"
  );

  return (
    <main className="flex flex-col gap-2 p-4 h-screen max-w-sm mx-auto">
      <h1 className="text-transparent w-fit mx-auto bg-clip-text bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-400 font-semibold text-center">
        Fin.Track
      </h1>
      <BalanceCard />
      <div className="flex gap-2 justify-betweenw-full">
        <AddIncome />
        <AddExpense />
      </div>
      <h2 className="text-sm font-light text-zinc-400">
        Historial de registros
      </h2>
      <select
        value={selection}
        onChange={(e) =>
          setSelection(e.target.value as "all" | "income" | "expense")
        }
        className="text-sm border-1 border-zinc-800 rounded-lg p-2 cursor-pointer bg-zinc-900 text-zinc-400 mx-1"
      >
        <option className="w-full p-2 bg-zinc-900" value="all">
          Todas
        </option>
        <option className="w-full p-2 bg-zinc-900" value="income">
          Ingresos
        </option>
        <option className="w-full p-2 bg-zinc-900" value="expense">
          Gastos
        </option>
      </select>
      <History selection={selection} />
      <DeleteHistory />
    </main>
  );
};
