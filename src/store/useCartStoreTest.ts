import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartStore {
  cart: string[];
  addItem: (itemName: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      addItem: (itemName) =>
        set((state) => ({
          cart: [...state.cart, itemName],
        })),

      clearCart: () =>
        set({
          cart: [],
        }),
    }),
    { name: 'anime-cart-storage' }
  )
);
