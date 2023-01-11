import express from 'express';

const router = express.Router();

import { createMessage, createTicket, deleteTicket, editMessage, getTicket, getTickets } from './controllers/ghelp.js';

router.get('/getTickets', getTickets);
router.get('/ticket/:id', getTicket);
router.post('/newTicket', createTicket);
router.delete('/ticket/:id', deleteTicket);
router.post('/newMessage', createMessage);
router.put('/ticket/:id', editMessage);

export default router;