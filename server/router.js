import express from 'express';

const router = express.Router();

import { createTicket, deleteTicket, editMessage, getTicket, getTickets } from './controllers/ghelp';

router.get('/getTickets', getTickets);
router.get('/ticket/:id', getTicket);
router.post('/newTicket', createTicket);
router.delete('/ticket/:id', deleteTicket);
router.put('/ticket/:id', editMessage);

export default router;