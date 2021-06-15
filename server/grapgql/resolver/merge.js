const Event = require('../../models/Events');
const User = require('../../models/User');
const { dateToString } =require('../../helpers/date');

const events = async eventIds => {
    try {
        const events = await Event.find({ _id: { $in: eventIds } })
        events.map(event => {
            return transformEvent(event)
        })
        return events;
    } catch (err) {

        throw err;
    }
}

const user = async userId => {
    try {
        const user = await User.findById(userId)
        return {
            ...user._doc,
            _id: user.id,
            createdEvents: events.bind(this, user._doc.createdEvents)
        }
    } catch (err) {
        throw err;
    }
};

const singleEvent = async (eventId) =>{
    try{
        const event = await Event.findById(eventId);
        return transformEvent(event)
    }catch(err){
        throw err;
    }
}


const transformEvent = event =>{
    return {
        ...event._doc,
        id: event.id,
        date: dateToString(event._doc.date),
        creator: user.bind(this, event.creator)
    }
}
const transformBookings = booking =>{
    return {
        ...booking._doc,
                    _id: booking.id,
                    user: user.bind(this, booking._doc.user),
                    event: singleEvent.bind(this, booking._doc.event), 
                    createdAt: dateToString(booking._doc.createdAt),
                    updatedAt: dateToString(booking._doc.updatedAt)
    }
}

exports.transformEvent = transformEvent ;
exports.transformBookings = transformBookings ;


exports.user = user;
// exports.events = events;
// exports.singleEvent = singleEvent;