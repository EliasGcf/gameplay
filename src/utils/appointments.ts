export type Appointment = {
  id: string;
  guild: {
    id: string;
    name: string;
    icon: string;
    owner: boolean;
  };
  category: string;
  date: string;
  description: string;
};

export const appointments: Appointment[] = [
  {
    id: '1',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: 'https://res.cloudinary.com/eliasgcf/image/upload/v1624120920/Rectangle_wjvfjm.png',
      owner: true,
    },
    category: '1',
    date: '18/06 às 21:00h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  },
  {
    id: '2',
    guild: {
      id: '2',
      name: 'Yeah, boy',
      icon: 'https://res.cloudinary.com/eliasgcf/image/upload/v1624123148/Rectangle_mazwn3.png',
      owner: false,
    },
    category: '3',
    date: '23/06 às 09:00h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  },
  {
    id: '3',
    guild: {
      id: '2',
      name: 'Yeah, boy',
      icon: 'https://res.cloudinary.com/eliasgcf/image/upload/v1624123148/Rectangle_mazwn3.png',
      owner: false,
    },
    category: '3',
    date: '23/06 às 09:00h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  },
  {
    id: '4',
    guild: {
      id: '2',
      name: 'Yeah, boy',
      icon: 'https://res.cloudinary.com/eliasgcf/image/upload/v1624123148/Rectangle_mazwn3.png',
      owner: false,
    },
    category: '3',
    date: '23/06 às 09:00h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  },
  {
    id: '5',
    guild: {
      id: '2',
      name: 'Yeah, boy',
      icon: 'https://res.cloudinary.com/eliasgcf/image/upload/v1624123148/Rectangle_mazwn3.png',
      owner: false,
    },
    category: '3',
    date: '23/06 às 09:00h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  },
  {
    id: '6',
    guild: {
      id: '2',
      name: 'Yeah, boy',
      icon: 'https://res.cloudinary.com/eliasgcf/image/upload/v1624123148/Rectangle_mazwn3.png',
      owner: false,
    },
    category: '3',
    date: '23/06 às 09:00h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  },
  {
    id: '7',
    guild: {
      id: '2',
      name: 'Yeah, boy',
      icon: 'https://res.cloudinary.com/eliasgcf/image/upload/v1624123148/Rectangle_mazwn3.png',
      owner: false,
    },
    category: '3',
    date: '23/06 às 09:00h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  },
];
