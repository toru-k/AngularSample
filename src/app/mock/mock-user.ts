import { User } from '../class/user';
import { Sex } from '../enum/sample.enum';

export const USERS: User[] = [
  {
    id: 1,
    name: 'Taro',
    company: 'A Corp.',
    tel: '0120-12-1234',
    birthday: new Date('1990/11/11'),
    sex: Sex.man
  },
  {
    id: 2,
    name: 'Hanako',
    company: 'B Corp.',
    tel: '0120-12-9999',
    birthday: new Date('1997/08/07'),
    sex: Sex.woman
  }
];
