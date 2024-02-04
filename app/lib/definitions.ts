export type Performance = {
  date: string;
  time: string;
};

export type Booking = {
  id: string;
  presenter_id: string;
  performances: Performance[];
  fee: number;
  payment_status: 'pending' | 'paid';
};

export type Presenter = {
  id: string;
  name: string;
  location: string;
  contact: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};
