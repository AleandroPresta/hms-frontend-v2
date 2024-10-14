export interface Room {
    id: number;
    name: string;
    type: string;
    capacity: number;
    location: string;
    images: string[];
    size: number;
    features: string[];
    bookings: Booking[];  // Full booking data stored internally
    price: number;
    rating: number;
}

export interface Booking {
    id: number;
    roomId: number;
    startDate: Date;
    endDate: Date;
    // Removed userId and status fields for privacy when displaying bookings
}

// Function to retrieve only booked date ranges for a room
export function getBookedDates(room: Room): { startDate: Date; endDate: Date }[] {
    return room.bookings.map((booking) => ({
        startDate: booking.startDate,
        endDate: booking.endDate,
    }));
}