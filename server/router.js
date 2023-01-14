import express from 'express';
import { createMessage, editMessage, getMessages } from './controllers/messages.js';
import { createTicket, createTicketInUser, deleteTicket, getTicket, getTickets, updateTicket } from './controllers/tickets.js';
import { createTodo, deleteTodo, getTodos, updateTodo } from './controllers/todos.js';
import { createUser, deleteUser, getAllUsers, getUser, getUserByMail } from './controllers/users.js';

const router = express.Router();

router.get('/getTickets', getTickets);
router.get('/ticket/:id', getTicket);
router.post('/newTicket', createTicket);
router.post('/newTicketInUser', createTicketInUser);
router.delete('/ticket/:id', deleteTicket);
router.put('/ticket/:id', updateTicket);

router.post('/ticket/:id/messages/message', createMessage);
router.put('/ticket/:id/messages/:messageId', editMessage);
router.get('/ticket/:id/messages', getMessages);

router.get('/getUsers', getAllUsers);
router.get('/user/:id', getUser);
router.get('/:email', getUserByMail);
router.post('/newUser', createUser);
router.delete('/user/:id', deleteUser);

router.get('/getTodos', getTodos);
router.post('/newTodo', createTodo);
router.delete('/todo/:id', deleteTodo);
router.put('/todo/:id', updateTodo);

export default router;