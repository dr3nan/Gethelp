import TicketList from '../../components/Ticket/ticketslist/TicketsList';
import TodoApp from '../../components/Todo/todoapp/TodoApp';
import CreateTicket from '../../components/Ticket/createticket/CreateTicket';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isUserLogged } from '../../slices/UserSlice';
import './TicketListView.css';
import '../../components/Todo/todoapp/TodoApp.css';
import '../../components/Todo/createtodo/CreateTodo.css';

const TicketListView = () => {
  const navigate = useNavigate();
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(isUserLogged(null));
    navigate('/login');
  };

  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate('/login');
    }
  }, []);

  if (!user) return 'user not logged in';
  
  return (
    <>
      <span className='active-userName'>{user.nickname}</span>
      <button className='logout' onClick={handleLogout}>Logout</button>
      <div className='todo-list'>
        {user.admin ? (
          <>
            {<TodoApp />}
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
