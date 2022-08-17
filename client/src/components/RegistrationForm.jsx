import '../components/RegistrationForm.css'
import {useState} from 'react'
import { validateRegister } from '../validations/registerValidation'


const RegistrationForm = () => {
    const [input, setInput] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      cpassword: ''
    });
    const [error, setError] = useState({});

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setError(validateRegister({
            ...input,
            [e.target.name]: e.target.value,
        })
      );
    };

    const handleSubmit = (e) => {
      e.preventDefault()
      if(!input.email || !!Object.keys(error).length) alert('Some fields are missing')
      else if(input.password !== input.cpassword) {
        alert('Incorrect password. They must be the same!')
      }
      else {
        alert('User Created')
      }
    }
    return (
      <div className="registrationFormContainer">
        <form onSubmit={handleSubmit}>
          <span className='registrationFormHeader'>Registration Form</span>

          <label>First Name</label>
          <input type='text' name="firstName" placeholder="Name..." value={input.firstName} onChange={handleChange}/>
          {error.firstName && <div className={'danger'}>{error.firstName}</div>}

          <label>Last Name</label>
          <input type='text' name="lastName" placeholder="LastName..." value={input.lastName} onChange={handleChange}/>
          {error.lastName && <div className={'danger'}>{error.lastName}</div>}

          <label>Email</label>
          <input type='email' name="email" placeholder="Email..." value={input.email} onChange={handleChange}/>
          {error.email && <div className={'danger'}>{error.email}</div>}

          <label >Password</label>
          <div className='dialog'>
          <input  type="password" name="password" placeholder="Password..." value={input.password} onChange={handleChange}/>
          </div>
          {error.password && <div className={'danger'}>{error.password}</div>}

          <label>Confirm password</label>
          <input type="password" name="cpassword" placeholder="Confirm password..." value={input.cpassword} onChange={handleChange}/>
          {error.cpassword && <div className={'danger'}>{error.cpassword}</div>}

          <input type={'submit'} value='Register' />
        </form>
      </div>
    )
}

export default RegistrationForm