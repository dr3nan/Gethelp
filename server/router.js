import express from 'express';

const router = express.Router();

import { createMessage, createTicket, createTodo, deleteTicket, deleteTodo, editMessage, getMessages, getTicket, getTickets, getTodos, updateTodo } from './controllers/ghelp.js';

router.get('/getTickets', getTickets);
router.get('/ticket/:id', getTicket);
router.post('/newTicket', createTicket);
router.delete('/ticket/:id', deleteTicket);
router.post('/ticket/:id/:messages/message', createMessage);
router.put('/ticket/:id/:messages/:messageId', editMessage);
router.get('/ticket/:id/:messages', getMessages);
router.get('/getTodos', getTodos);
router.post('/newTodo', createTodo);
router.delete('/todo/:id', deleteTodo);
router.put('/todo/:id', updateTodo);

export default router;