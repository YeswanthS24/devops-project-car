import { createContext, useContext, useState } from 'react';

const ParkingContext = createContext();

const initialSlots = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  occupied: false,
}));

export function ParkingProvider({ children }) {
  const [slots, setSlots] = useState(initialSlots);
  const [bookings, setBookings] = useState([]);

  const bookSlot = (slotId, name = 'User') => {
    setSlots(slots => slots.map(s => s.id === slotId ? { ...s, occupied: true } : s));
    setBookings(bookings => [
      ...bookings,
      { slot: slotId, name, time: new Date().toLocaleString() },
    ]);
  };

  const cancelBooking = (slotId) => {
    setSlots(slots => slots.map(s => s.id === slotId ? { ...s, occupied: false } : s));
    setBookings(bookings => bookings.filter(b => b.slot !== slotId));
  };

  return (
    <ParkingContext.Provider value={{ slots, bookings, bookSlot, cancelBooking }}>
      {children}
    </ParkingContext.Provider>
  );
}

export function useParking() {
  return useContext(ParkingContext);
}
