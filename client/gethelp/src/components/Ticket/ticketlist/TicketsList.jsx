import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets as getTicketsAPI } from '../../../api/apiTickets';
import { setTickets } from '../../../slices/TicketSlice';
