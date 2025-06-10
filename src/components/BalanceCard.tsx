import { useStore } from "../store";

export const BalanceCard = () => {
  const { balance: balanceStore } = useStore();

  const formattedBalance = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(balanceStore);

  return (
    <div className="flex flex-col gap-2 h-fit bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 rounded-lg border-1 border-zinc-800 p-4">
      <p className="text-sm text-zinc-500">Balance</p>
      <p className="text-3xl font-semibold">{formattedBalance}</p>
    </div>
  );
};
