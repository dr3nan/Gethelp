import React from 'react';
import { useDispatch } from 'react-redux';
import { editTicket, deleteTicket } from '../../../slices/TicketSlice';
import { editTicket as updateTicketAPI, deleteTicket as deleteTicketAPI } from '../../../api/apiTickets';