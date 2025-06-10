import { useStore } from "../store";

export const BalanceCard = () => {
  const { balance: balanceStore } = useStore();

  return (
    <div className="flex flex-col gap-2 h-fit bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 rounded-lg border-1 border-zinc-800 p-4">
      <p className="text-sm text-zinc-500">Balance</p>
      <p className="text-5xl font-semibold">${balanceStore}</p>
    </div>
  );
};
