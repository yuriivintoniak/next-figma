export interface User {
  name: string;
  status: {
    name: string;
    value: string;
  };
  department: {
    name: string;
    value: string;
  };
  country: {
    name: string;
    value: string;
  };
}

export interface UserData {
  users: User[];
}
