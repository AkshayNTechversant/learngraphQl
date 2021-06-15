
const Booking = require('../../models/Booking');
const Event = require('../../models/Events');
const { transformBookings,transformEvent } = require('./merge');


module.exports = {
   
    bookings: async () => {
        try {
            const bookings = await Booking.find();
            return bookings.map(booking => {
                return transformBookings(booking);
            });
        } 
        catch (err) {
            throw err;
        }
    },
    bookEvent: async(args) =>{
        const fetchedEvent = await Event.findOne({_id: args.eventId});
        const booking = new Booking({
            user: '60c1a97b31cb79108c8dcc9e',
            event: fetchedEvent,
        });
        const result = await booking.save();
        return transformBookings(result);
    },
    cancelBooking: async (args) => {
        try{
            const booking = await Booking.findById(args.bookingId).populate('event');
            const event = transformEvent(booking._doc.event)
            await Booking.deleteOne({ _id: args.bookingId });
            return event;
        }catch(err){
            throw err;
        }
    }
}; 