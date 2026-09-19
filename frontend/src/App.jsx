import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes/AppRoutes';
import { useThemeStore } from './store/useThemeStore';

function App() {
  const initTheme = useThemeStore((state) => state.initTheme);

  useEffect(() => {
    initTheme();
  }, []);

  return (
    <BrowserRouter>
      <Toaster
  position="top-right"
  toastOptions={{
    style: {
      borderRadius: '10px',
      fontSize: '14px',
      fontWeight: 500,
    },
    success: { iconTheme: { primary: '#7C5CFC', secondary: '#fff' } },
  }}
/>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;