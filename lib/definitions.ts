// app/lib/definitions

export type User = {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  created_at: Date;
  updated_at: Date;
};

export type Show = {
  id: string;
  show_title: string;
  running_time_in_minutes: number;
  num_intermissions: number;
  cast_size: number;
  created_at: Date;
  updated_at: Date;
};

export type ShowFields = {
  id: string;
  show_title: string;
  running_time_in_minutes: number;
  num_intermissions: number;
  cast_size: number;
};

export type Presenter = {
  id: string;
  name: string;
  location: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  created_at: Date;
  updated_at: Date;
};

export type PresenterFields = {
  id: string;
  name: string;
  location: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
};
export type Booking = {
  id: string;
  show_id: string;
  presenter_id: string;
  fee: number;
  payment_status: 'pending' | 'paid';
  performances: Date[];
  created_at: Date;
  updated_at: Date;
};

export type BookingFields = {
  id: string;
  fee: number;
  payment_status: 'pending' | 'paid';
  presenter_id: string;
  presenter_name: string;
  presenter_location: string;
  presenter_contact: string;
  show_id: string;
  show_title: string;
  performances: { id: string; date_time: Date }[];
};

export type Performance = {
  id: string;
  date_time: Date;
  show_id: string;
  presenter_id: string;
  booking_id: string;
  created_at: Date;
  updated_at: Date;
};
