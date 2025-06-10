import { useState } from "react";
import { useStore } from "../store";
import { Button } from "./Button";

export const AddIncome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState("");
  const addIncome = useStore((state) => state.addIncome);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason || !amount) return;

    addIncome({
      reason,
      amount: Number(amount),
    });

    handleClose();
  };

  const handleClose = () => {
    setReason("");
    setAmount("");
    setIsOpen(false);
  };

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(true)}
        className="flex justify-center items-center w-full gap-2 border-1 border-zinc-800 bg-zinc-950 hover:bg-zinc-900 cursor-pointer transition-colors rounded-lg px-4 text-sm py-2"
      >
        Nuevo Ingreso
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-zinc-950/80 flex items-center justify-center">
          <dialog
            open={isOpen}
            onClose={handleClose}
            className="flex flex-col gap-4 bg-zinc-900 rounded-lg p-4 max-w-sm mx-auto w-4/5"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Nuevo Ingreso</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-400 text-lg hover:text-zinc-200 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-zinc-400" htmlFor="amount">
                    Monto
                  </label>
                  <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="border-1 px-3 border-zinc-800 rounded-md p-1"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-zinc-400" htmlFor="reason">
                    Motivo
                  </label>
                  <input
                    type="text"
                    id="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="border-1 px-3 border-zinc-800 rounded-md p-1"
                  />
                </div>
                <Button type="submit">Agregar Ingreso</Button>
              </div>
            </form>
          </dialog>
        </div>
      )}
    </div>
  );
};
