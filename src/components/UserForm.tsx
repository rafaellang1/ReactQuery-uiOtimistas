import { Button } from './ui/Button';
import { Input } from './ui/Input';

export function UserForm() {
  return (
    <form action="" className='bg-muted/50 p-4 rounded-md'>
      <div className='flex gap-3'>
        <Input placeholder="Nome de usuário" />
        <Input placeholder="@ no Github" />
      </div>

      <Button className='mt-4 w-full cursor-pointer' type="submit">
        Cadastrar
      </Button>
    </form>
  );
}
