const Event = require('../../models/Events');
const User = require('../../models/User')
const { dateToString } =require('../../helpers/date');
const { transformEvent,user } = require('./merge')

module.exports = {
    events: async () => {
        try {
            const events = await Event.find()
            return events.map(event => {
                return  {
                    ...event._doc,
                    id: event.id,
                    date: dateToString(event._doc.date),
                    creator: user.bind(this, event.creator)
                }
            });
        } catch (err) {
            throw err;
        }
    },
    createEvent: async (args) => {
        const event = new Event({
            title: args.eventInput.title,
            description: args.eventInput.description,
            price: +args.eventInput.price,
            date: dateToString(args.eventInput.date),
            creator: '60c1a97b31cb79108c8dcc9e'
        });
        let createdEvent;
        try {
            const result = await event.save();
            createdEvent = transformEvent(result);
            const creator = await User.findById('60c1a97b31cb79108c8dcc9e')
            if (!creator) {
                throw new Error("User not Found")
            }
            creator.createdEvents.push(event);
            await creator.save();
            return createdEvent
        } catch (err) {
            console.log(err)
            throw err;
        }
    },   
}; 