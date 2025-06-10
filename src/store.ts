import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Income {
  id: string;
  reason: string;
  amount: number;
}

export interface Expense {
  id: string;
  reason: string;
  amount: number;
}

export interface Transaction {
  id: string;
  move: "income" | "expense";
  object: Income | Expense;
}

interface TransactionStore {
  balance: number;
  incomes: Income[];
  expenses: Expense[];
  transactions: Transaction[];
  addIncome: (income: Omit<Income, "id">) => void;
  addExpense: (expense: Omit<Expense, "id">) => void;
}

export const useStore = create<TransactionStore>()(
  persist(
    (set) => ({
      balance: 0,
      incomes: [],
      expenses: [],
      transactions: [],
      addIncome: (income) =>
        set((state) => ({
          incomes: [...state.incomes, { ...income, id: crypto.randomUUID() }],
          balance: state.balance + income.amount,
          transactions: [
            ...state.transactions,
            { id: crypto.randomUUID(), move: "income", object: income },
          ] as Transaction[],
        })),
      addExpense: (expense) =>
        set((state) => ({
          expenses: [
            ...state.expenses,
            { ...expense, id: crypto.randomUUID() },
          ],
          balance: state.balance - expense.amount,
          transactions: [
            ...state.transactions,
            { id: crypto.randomUUID(), move: "expense", object: expense },
          ] as Transaction[],
        })),
    }),
    {
      name: "transactions-storage",
    }
  )
);
