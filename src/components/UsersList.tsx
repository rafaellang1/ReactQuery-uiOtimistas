import { userUsers } from '@/app/hooks/useUsers';
import { Avatar, AvatarImage, AvatarFallback } from './ui/Avatar';
import { Switch } from './ui/Switch';

// const users = [
// {
//     id: Math.random(),
//     name: 'Rafael Lang',
//     username: 'rafaellang1',
//   },
//   {
//     id: Math.random(),
//     name: 'Guilherme Vieira',
//     username: 'viieiiragui',
//   },
//   {
//     id: Math.random(),
//     name: 'Mateus Silva',
//     username: 'maateusilva',
//   },
//   {
//     id: Math.random(),
//     name: 'Rodrigo costa',
//     username: 'costarodrigo22',
//   },
// ];

export function UsersList() {
  const { users } = userUsers();
  return (
    <div>
      <h1 className='mb-2'>Lista de Usuários</h1>
        <div className='space-y-4'>
          {users.map(user => (
            <div
              key={user.id}
              className='border p-4 rounded-md flex items-center justify-between cursor-pointer hover:bg-muted-foreground/10 transition-colors'
            >
             <div className='flex items-center gap-4'>
               <Avatar>
                <AvatarImage src={`https://github.com/${user.username}.png`} />
                <AvatarFallback>
                  {user.name.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>

              <div>
                <strong className='text-lg block leading-4'>{user.username}</strong>
                <small className='text-muted-foreground'>@{user.username}</small>
              </div>
             </div>

             <Switch />
            </div>
          ))}
        </div>
    </div>
  );
}
