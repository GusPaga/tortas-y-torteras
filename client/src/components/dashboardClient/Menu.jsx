import { EditUserProfile } from './formsUsers/EditUserProfile';
// import { InfOrder } from './formsUsers/InfOrder';
import {useState} from 'react';

export const Menu = () => {
  const[show, setShow] = useState(true);
  const handleOnClickDiv = () => {
		document.querySelector('hola').classList.toggle('translate-y-[300px]');
	};

  return (
    <>
      <div className='container mx auto flex justify-center'>
        <ul className='flex justify-center'>
          <li>
            <button type='button' className='flex justify-center px-6 py-6 my-8 border-solid border-1' onClick={() => {
              setShow(!show);
            }}>
              My Account {show ? '' : ''}
            </button>
          </li>
          <li>
            <button className='flex justify-center px-6 py-6 my-8 border-solid border-1' href='#'>
              My Orders
            </button>
          </li>
          <li>
            <button className='flex justify-center px-6 py-6 my-8 border-solid border-1' href='#'>
              My Favorites
            </button>
          </li>
          <li>
            <button className='flex justify-center px-6 py-6 my-8 border-solid border-1' href='#'>
              Address Book
            </button>
          </li>
        </ul>
      </div>
      {show ? (
        <div id='hola' className='container text-center justify-center' onClick={handleOnClickDiv}>
          <EditUserProfile />
        </div> ) : null}
    </>
  )
};