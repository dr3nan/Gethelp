import TicketList from "../../Ticket/ticketlist/TicketsList"
import ToDoList from "../../Todo/todolist/TodoList";
import CreateToDo from "../../Todo/createtodo/CreateTodo";
import CreateTicket from "../../Ticket/createticket/CreateTicket";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUserFromActiveTicket } from "../../../slices/ActiveTicketSlice";
import { getUserByEmail } from "../../../api/apiUsers";

const TicketListView = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  console.log('tickets user', user.tickets);

  const fetchUserTickets = async () => {
    // TODO: fetch ticket from user
    const ticketsFromUserDB = await getUserByEmail(user.email);
    dispatch(setUserFromActiveTicket(ticketsFromUserDB));
  };

  useEffect(() => {
    fetchUserTickets()
  }, []);
  // const dispatch = useDispatch();

  // const todos = useSelector(state => state.todos);

  // const fetchTodos = async () => {
  //   const todosFromDB = await getTodosFromAPI();
  //   dispatch(setTodos(todosFromDB))
  // }

  // useEffect(() => {
  //   fetchTodos()
  // }, []);

  return (
    <>
      <div className='todo-list'>
        <ToDoList />
        <CreateToDo />
      </div>
      <div className='ticket-list-view'>
        <CreateTicket />
        <TicketList />
      </div>
    </>
  )
}

export default TicketListView;
