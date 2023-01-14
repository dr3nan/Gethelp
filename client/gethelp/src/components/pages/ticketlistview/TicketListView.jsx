import TicketList from "../../Ticket/ticketlist/TicketsList"
import ToDoList from "../../Todo/todolist/TodoList";
import CreateToDo from "../../Todo/createtodo/CreateTodo";
import CreateTicket from "../../Ticket/createticket/CreateTicket";

const TicketListView = () => {
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