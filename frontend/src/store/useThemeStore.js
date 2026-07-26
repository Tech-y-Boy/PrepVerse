import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useThemeStore = create(
  persist(
    (set, get) => ({
      isDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
      toggleTheme: () => {
        const newValue = !get().isDark;
        set({ isDark: newValue });
        document.documentElement.classList.toggle('dark', newValue);
      },
      initTheme: () => {
        document.documentElement.classList.toggle('dark', get().isDark);
      },
    }),
    { name: 'theme-storage' }
  )
);