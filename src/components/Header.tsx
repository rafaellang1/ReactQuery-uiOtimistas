import { ThemeSwitcher } from './ThemeSwitcher';

export function Header() {
  return (
    <header className='flex items-center justify-between'>
      <div >
        <h1 className="font-bold text-3xl -tracking-wider">MyUsers</h1>
        <small className="text-muted-foreground">Gerencie seus usuários</small>
      </div>

      <ThemeSwitcher />
    </header>
  );
}
