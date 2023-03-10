import express from 'express';
import { createMessage, createMessageInUserTicket, editMessage, getMessages } from './controllers/messages.js';
import { createTicket, createTicketInUser, deleteTicket, deleteTicketFromUser, getTicket, getTickets, updateTicket } from './controllers/tickets.js';
import { createTodo, deleteTodo, getAllTodos, updateTodo } from './controllers/todos.js';
import { createUser, deleteUser, getAllUsers, getUser, getUserByMail } from './controllers/users.js';

const router = express.Router();

// TICKETS
router.get('/getTickets', getTickets);
router.get('/ticket/:id', getTicket);
router.post('/newTicket', createTicket);
router.post('/user/:id/tickets', createTicketInUser);
router.delete('/ticket/:id', deleteTicket);
router.delete('/user/:id/tickets/:ticketId', deleteTicketFromUser);
router.put('/ticket/:id', updateTicket);
// MESSAGES
router.post('/ticket/:id/messages/message', createMessage);
router.post('/user/:userId/tickets/:ticketId/messages', createMessageInUserTicket);
router.put('/ticket/:id/messages/:messageId', editMessage);
router.get('/ticket/:id/messages', getMessages);
// USERS
router.get('/getUsers', getAllUsers);
router.get('/user/:id', getUser);
router.get('/user/email/:email', getUserByMail);
router.post('/newUser', createUser);
router.delete('/user/:id', deleteUser);
// TODOS
router.get('/allTodos', getAllTodos);
router.post('/newTodo', createTodo);
router.delete('/todo/:id', deleteTodo);
router.put('/todo/:id', updateTodo);

export default router;
