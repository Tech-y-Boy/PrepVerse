import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      bookmarks: [],

      login: (userData) => set({ user: userData, isAuthenticated: true }),

      logout: () => set({ user: null, isAuthenticated: false, bookmarks: [] }),

      updateRole: (role) =>
        set((state) => ({ user: { ...state.user, role } })),

      toggleBookmark: (careerId) => {
        const current = get().bookmarks;
        const exists = current.includes(careerId);
        set({
          bookmarks: exists
            ? current.filter((id) => id !== careerId)
            : [...current, careerId],
        });
      },
    }),
    { name: 'auth-storage' }
  )
);