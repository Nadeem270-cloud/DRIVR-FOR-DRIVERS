export type BookingStatus = 'Draft' | 'Payment pending' | 'Confirmed' | 'Cancelled' | 'Completed'

export type Booking = {
  id: string
  paymentId?: string
  from: string
  to: string
  date: string
  time: string
  duration: string
  driver: string
  fare: number
  status: BookingStatus
}

const bookingKey = 'drivr-bookings-v2'
const profileKey = 'drivr-profile-v2'

const seed: Booking[] = [
  { id: 'DRV-48291', paymentId: 'pay_demo_4812', from: 'Jubilee Hills, Hyderabad', to: 'HITEC City, Hyderabad', date: '14 Sep 2026', time: '7:00 PM', duration: '3 hours', driver: 'Rahul Kumar', fare: 599, status: 'Completed' },
  { id: 'DRV-48275', from: 'Banjara Hills, Hyderabad', to: 'Rajiv Gandhi International Airport', date: '26 Sep 2026', time: '5:00 AM', duration: '4 hours', driver: 'Arjun Reddy', fare: 749, status: 'Confirmed' },
]

export function getBookings(): Booking[] {
  const saved = localStorage.getItem(bookingKey)
  if (!saved) { localStorage.setItem(bookingKey, JSON.stringify(seed)); return seed }
  try { return JSON.parse(saved) as Booking[] } catch { return seed }
}

export function saveBooking(booking: Booking) {
  const all = [booking, ...getBookings()]
  localStorage.setItem(bookingKey, JSON.stringify(all))
  return all
}

export function updateBooking(id: string, patch: Partial<Booking>) {
  const all = getBookings().map(item => item.id === id ? { ...item, ...patch } : item)
  localStorage.setItem(bookingKey, JSON.stringify(all))
  return all
}

export function getProfile() { return localStorage.getItem(profileKey) || 'Nikhil Kumar' }
export function saveProfile(name: string) { localStorage.setItem(profileKey, name) }

// Replace these client-side demo calls with authenticated API requests in production.
// Razorpay's checkout key belongs in VITE_RAZORPAY_KEY_ID; order creation and verification stay server-side.
export const paymentConfig = { key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_demo_key', currency: 'INR' }
