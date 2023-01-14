import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TicketList from "../../Ticket/ticketlist/TicketsList"
import { getToDos as getTodosFromAPI } from '../../../api/apiTodos';
import { setTodos } from "../../../slices/TodoSlice";
import ToDoList from "../../Todo/todolist/TodoList";
import CreateToDo from "../../Todo/createtodo/CreateTodo";

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
        <TicketList />
      </div>
    </>
  )
}

export default TicketListView;