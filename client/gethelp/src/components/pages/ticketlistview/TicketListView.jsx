import TicketList from "../../Ticket/ticketslist/TicketsList"
import ToDoList from "../../Todo/todolist/TodoList";
import CreateToDo from "../../Todo/createtodo/CreateTodo";
import CreateTicket from "../../Ticket/createticket/CreateTicket";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUserFromActiveTicket } from "../../../slices/ActiveTicketSlice";
import { getUserByEmail } from "../../../api/apiUsers";

// FEATURE: create a logout button
const TicketListView = () => {
  const { user } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  // const fetchUserTickets = async () => {
  //   // TODO: fetch ticket from user
  //   const ticketsFromUserDB = await getUserByEmail(user.email);
  //   dispatch(setUserFromActiveTicket(ticketsFromUserDB));
  // };

  // useEffect(() => {
  //   fetchUserTickets()
  // }, []);
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
        {user.admin ? (
          <>
            {<ToDoList /> && <CreateToDo />}
          </>
        ) : null}
      </div>
      <div className='ticket-list-view'>
        <CreateTicket />
        <TicketList />
      </div>
    </>
  )
}

export default TicketListView;
