import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ThemeProvider } from '@/app/contexts/ThemeContext';
import { Header } from './components/Header';
import { UsersList } from './components/UsersList';
import { UserForm } from './components/UserForm';
import { queryClient } from './app/lib/queryClient';
import { Toaster } from './components/ui/Toaster';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className='max-w-[500px] mx-auto mt-20 '>
          <Header />

        <main className='mt-10 space-y-6'>
          <UserForm />
          <UsersList />
        </main>
        </div>

        <Toaster />
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
