import TicketList from "../../Ticket/ticketslist/TicketsList"
import ToDoList from "../../Todo/todolist/TodoList";
import CreateToDo from "../../Todo/createtodo/CreateTodo";
import CreateTicket from "../../Ticket/createticket/CreateTicket";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userFromActiveTicket } from "../../../slices/ActiveTicketSlice";
import { getUserByEmail } from "../../../api/apiUsers";
import { useNavigate } from "react-router-dom";

// FEATURE: create a logout button
const TicketListView = () => {
  const navigate = useNavigate();
  const user = useSelector(({ user }) => user);
  console.log('=====>',useSelector(({ user }) => user))
  console.log('user in ticket list view', user);
  // const dispatch = useDispatch();

  // const fetchUserTickets = async () => {
  //   // TODO: fetch ticket from user
  //   const ticketsFromUserDB = await getUserByEmail(user.email);
  //   dispatch(userFromActiveTicket(ticketsFromUserDB));
  // };
  useEffect(() => {
    console.log(user, '<=======');
    if (!user.isLoggedIn) {
      navigate('/login');
    }
  }, []);

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
  if (!user) return 'user not logged in';

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
