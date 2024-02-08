// app/lib/definitions.ts

export type Performance = {
  id: string;
  booking_id: string;
  show_id: string;
  date_time: string;
};

export type TourField = {
  presenter_name: string;
  presenter_location: string;
  performances: Date[];
};

export type Show = {
  id: string;
  show_title: string;
  user_id: string;
  running_time_in_minutes: number;
  num_intermissions: number;
  cast_size: number;
};

export type Booking = {
  id: string;
  show_id: string;
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

export type BookingsField = {
  id: string;
  fee: number;
  payment_status: 'pending' | 'paid';
  presenter_name: string;
  presenter_location: string;
  presenter_contact: string;
  show_title: string;
  performances: Date[];
};