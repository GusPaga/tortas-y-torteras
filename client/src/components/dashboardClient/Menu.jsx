import { EditUserProfile } from './formsUsers/EditUserProfile';
import { InfOrder } from './formsUsers/InfOrder';
import {useState} from 'react';

export const Menu = () => {
  const[show, setShow] = useState(false);
  const handleOnClickDiv = () => {
    if(Document.querySelector('#account')) {
      setShow(true);
    } else if(Document.querySelector('#orders')) {
      setShow(true);
    }
	};

  return (
    <>
      <div className='container mx auto flex justify-center'>
        <ul className='flex justify-center'>
          <li>
            <button id='account' type='button' className='flex justify-center px-6 py-6 my-8 border-solid border-1' onClick={handleOnClickDiv}>
              My Account {show ? '' : ''}
            </button>
          </li>
          <li>
            <button id='orders' className='flex justify-center px-6 py-6 my-8 border-solid border-1' onClick={handleOnClickDiv}>
              My Orders {show ? 'show' : 'hide'}
            </button>
          </li>
          <li>
            <button id='favorites' className='flex justify-center px-6 py-6 my-8 border-solid border-1' href='#'>
              My Favorites
            </button>
          </li>
          <li>
            <button id='address' className='flex justify-center px-6 py-6 my-8 border-solid border-1' href='#'>
              Address Book
            </button>
          </li>
        </ul>
      </div>
      {show ? (
        <div id='show' className='container text-center justify-center' onClick={handleOnClickDiv}>
          {<EditUserProfile />|| <InfOrder />}
        </div> ) : null}
    </>
  )
};