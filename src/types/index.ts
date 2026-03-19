export interface ClassItem {
  id: number;
  name: string;
  description: string;
  duration: string;
  level: string;
  image: string;
}

export interface ScheduleCell {
  className: string;
  time: string;
}

export type ScheduleRow = (ScheduleCell | null)[];

export interface Instructor {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
}

export interface NavLink {
  label: string;
  href: string;
}
