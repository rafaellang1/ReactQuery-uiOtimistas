import { sleep } from '../lib/utils';
import type { IUSer } from '../types/IUsers';

type ICreateUserDTO = Omit<IUSer, 'id'>;

export async function createUser({ name, username, blocked }: ICreateUserDTO) {
  await sleep();

  const response = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify({
      name,
      username,
      blocked,
    }),
  });
  const body = await response.json();

  return body as IUSer[];
}
