import Tickets from '../models/tickets.js';
import Users from '../models/users.js';

export const getTickets = async (req, res) => {
  try {
    const get = await Tickets.find();
    res.status(200);
    res.send(get);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

export const getTicket = async (req, res) => {
  try {
    const getOneTicket = await Tickets.findOne({ _id: req.params.id });
    res.status(200);
    res.send(getOneTicket);
  } catch (err) {
    console.error(err);
    res.status(404);
  }
};

export const createTicket = async (req, res) => {
  try {
    const post = await Tickets.create(req.body);
    res.status(201);
    res.send(post);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

export const createTicketInUser = async (req, res) => {
  try {
    const { title, status, date, user } = req.body;
    console.log('body of message', req.body);
    // const newDate = new Date();
    const newTicket = new Tickets({ title, status, date, user, messages });
    await newTicket.save();
    await Users.findOneAndUpdate(
      { _id: user },
      { $addToSet: { tickets: newTicket } },
      { new: true }
    );
    res.status(201);
    res.send(newTicket);
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send({ error: 'Error creating ticket' });
  }
}

export const updateTicket = async (req, res) => {
  try {
    const upd = await Tickets.findOne({ _id: req.params.id });

    if (req.body.title) {
      upd.title = req.body.title;
    }
    console.log(req.body);

    if (req.body.status) {
      upd.status = req.body.status;
    }

    await upd.save();
    res.status(201);
    res.send(upd);
  } catch (err) {
    console.error(err);
    res.status(404);
  }
};

export const deleteTicket = async (req, res) => {
  try {
    const del = await Tickets.deleteOne({ _id: req.params.id });
    res.status(200);
    res.send(del);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
