import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';


function CreateUser() {
  const [username, setUsername] = useState('');
  const disptach = useDispatch();
  const naviagte = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    disptach(updateName(username));
    naviagte('/menu')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='mx-4 my-7 text-stone-600 md:text-lg' >👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-72  input mb-8'
      />

      {username !== '' && (
        <div>
          <Button type="primary">Start Ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
