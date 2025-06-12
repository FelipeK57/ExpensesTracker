import { useState } from "react";
import { useStore } from "../store";

export const DeleteHistory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cleanTransactions } = useStore();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    cleanTransactions();
    handleClose();
  };

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(true)}
        className="text-sm border-1 w-full text-zinc-300 border-zinc-800 rounded-lg p-2 cursor-pointer hover:bg-zinc-900"
      >
        Eliminar historial
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
            <div className="flex flex-col gap-4">
              <p className="text-sm text-zinc-300">
                Estás seguro de querer eliminar el historial de movimientos?
                <br />
                No podrás recuperarlo.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleDelete()}
                  className="text-sm border-1 w-full text-zinc-300 border-zinc-800 rounded-lg p-2 cursor-pointer hover:bg-zinc-950 transition-colors"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
};
