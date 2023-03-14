import Tickets from '../models/tickets.js';
import Users from '../models/users.js';
import * as mongoose from 'mongoose';

export const getMessages = async (req, res) => {
  try {
    const getMessagesFromTicket = await Tickets.findOne(
      { _id: req.params.id },
      { messages: 1 }
    );
    res.status(200);
    res.send(getMessagesFromTicket.messages);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

export const createMessage = async (req, res) => {
  try {
    const postMessageInTicket = await Tickets.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { messages: { id: req.body.id, message: req.body.message, sender: req.body.sender, date: req.body.date } } },
      { new: true }
    );
    res.status(201);
    res.send(postMessageInTicket);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

export const createMessageInUserTicket = async (req, res) => {
  try {
    const newMessage = { id: req.body.id, message: req.body.message, sender: req.body.sender, date: req.body.date };

    const user = await Users.findOneAndUpdate(
      { _id: req.params.userId, 'tickets._id': new mongoose.Types.ObjectId(req.params.ticketId) },
      { $push: { 'tickets.$.messages': newMessage } },
      { new: true }
    );
    await Tickets.findOneAndUpdate(
      { _id: req.params.ticketId },
      { $push: { messages: newMessage } },
      { new: true }
    );
    res.status(201);
    res.send(user);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

export const editMessage = async (req, res) => {
  try {
    const updMessageInTicket = await Tickets.findOneAndUpdate(
      { _id: req.params.id, 'messages._id': req.params.messageId },
      { $set: { 'messages.$.message': req.body.message } },
      { new: true }
    );
    res.status(201);
    res.send(updMessageInTicket);
  } catch (err) {
    console.error(err);
    res.status(404);
  }
};
