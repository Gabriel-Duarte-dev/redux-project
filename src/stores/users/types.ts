export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  website: string;
  username: string;
}

export interface UsersState {
  users: User[];
  favorites: User[];
  loading: boolean;
}
