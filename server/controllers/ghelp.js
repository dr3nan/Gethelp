import { Tickets, Users } from '../models/ghelp.js';

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

export const deleteTicket = async (req, res) => {
  try {
    const del = await Todo.deleteOne({ _id: req.params.id });
    res.status(200);
    res.send(del);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

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
      { $push: { messages: { id: req.body.id, message: req.body.message, sender: req.body.sender } } },
      { new: true }
    );
    res.status(201);
    res.send(postMessageInTicket);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

export const editMessage = async (req, res) => {
  try {
    const updMessageInTicket = await Tickets.findOneAndUpdate(
      { _id: req.params.id, 'messages._id': req.params.messageId },
      { $set: { 'messages.$.message': req.body.message } }
    );
    res.status(201);
    res.send(updMessageInTicket);
  } catch (err) {
    console.error(err);
    res.status(404);
  }
};
