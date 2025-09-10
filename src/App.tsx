import { ThemeProvider } from '@/app/contexts/ThemeContext';
import { Header } from './components/Header';
import { UsersList } from './components/UsersList';
import { UserForm } from './components/UserForm';

export function App() {
  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className='max-w-[500px] mx-auto mt-20 '>
          <Header />

        <main className='mt-10 space-y-6'>
          <UserForm />
          <UsersList />
        </main>
        </div>

      </ThemeProvider>

  );
}
