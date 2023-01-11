import express from 'express';

const router = express.Router();

import { createMessage, createTicket, deleteTicket, editMessage, getMessages, getTicket, getTickets } from './controllers/ghelp.js';

router.get('/getTickets', getTickets);
router.get('/ticket/:id', getTicket);
router.post('/newTicket', createTicket);
router.delete('/ticket/:id', deleteTicket);
router.post('/ticket/:id/:messages/message', createMessage);
router.put('/ticket/:id/:messages/:messageId', editMessage);
router.get('/ticket/:id/:messages', getMessages);

export default router;