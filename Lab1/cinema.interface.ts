type UUID = string;
type DateISO = `${number}-${number}-${number}`; // YYYY-MM-DD
type TimeISO = `${number}:${number}`; // HH:MM

enum SeatType {
  STANDARD = "STANDARD",
  VIP = "VIP",
}

enum BookingStatus {
  RESERVED = "RESERVED",
  PAID = "PAID",
  CANCELLED = "CANCELLED",
}

interface Movie {
  movie_id: UUID;
  title: string;
  age_limit: number;
  duration_min: number;
  release_year: number;
  description: string;
}

interface Genre {
  genre_id: UUID;
  name: string;
}

interface MovieGenre {
  movie_id: UUID; // FK to Movie
  genre_id: UUID; // FK to Genre
}

interface CinemaHall {
  cinema_hall_id: UUID;
  hall_number: number;
  capacity: number;
}

interface Seat {
  seat_id: UUID;
  cinema_hall_id: UUID; // FK to CinemaHall
  row: number;
  number: number;
  seatType: SeatType;
}

interface Showtime {
  showtime_id: UUID;
  movie_id: UUID; // FK to Movie
  cinema_hall_id: UUID; // FK to CinemaHall
  show_date: DateISO;
  show_time: TimeISO;
}

interface Customer {
  customer_id: UUID;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

interface Booking {
  booking_id: UUID;
  customer_id: UUID; // FK to Customer
  showtime_id: UUID; // FK to Showtime
  total_price: number;
  status: BookingStatus;
  booking_date: Date;
}

interface BookingSeat {
  showtime_id: UUID; // FK to Showtime
  seat_id: UUID; // FK to Seat
  booking_id: UUID; // FK to Booking
  price: number;
}
