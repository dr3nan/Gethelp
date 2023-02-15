import Tickets from '../models/tickets.js';
import Users from '../models/users.js';
import * as mongoose from 'mongoose';

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
    const { title, status, date, user, messages } = req.body;
    // console.log('whole body', req.body);
    // console.log('message', messages);
    const newTicket = new Tickets({ title, status, date, user, messages });
    // console.log('new ticket', newTicket);
    await newTicket.save();
    await Users.findOneAndUpdate(
      { _id: req.params.id },
      { $addToSet: { tickets: newTicket } },
      { new: true }
    );
    res.status(201);
    res.send(newTicket);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

export const updateTicket = async (req, res) => {
  try {
    const upd = await Tickets.findOne({ _id: req.params.id });

    if (req.body.title) {
      upd.title = req.body.title;
    };

    if (req.body.status) {
      upd.status = req.body.status;
    };
    await upd.save();
    res.status(201);
    res.send(upd);
  } catch (err) {
    console.error(err);
    res.status(404);
  }
};

export const updateTicketInUser = async (req, res) => {
  try {
    const upd = await Tickets.findOne({ _id: req.params.id });

    if (req.body.title) {
      upd.title = req.body.title;
    };

    if (req.body.status) {
      upd.status = req.body.status;
    };
    const { title, status } = req.body;
    const newDetails = new Tickets({ title, status });

    await Users.findOneAndUpdate({})
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

export const deleteTicketFromUser = async (req, res) => {
  try {
    // delete tickets from DB
    const ticketToDelete = await Tickets.findOneAndDelete({ _id: req.params.ticketId });
    // here we search for an user ID and pull (delete) from the tickets array with ticket ID
    await Users.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { tickets: { _id: new mongoose.Types.ObjectId(req.params.ticketId) } } },
      { new: true }
    );
    res.status(200);
    res.send(ticketToDelete);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};
