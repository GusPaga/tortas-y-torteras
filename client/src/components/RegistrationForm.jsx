import '../components/RegistrationForm.css'
import {useState} from 'react'
import { validate } from '../validations/RegistrationValidation'


const RegistrationForm = () => {
    const [input, setInput] = useState({})
    const [error, setError] = useState({})

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        
        setError(validate({
            ...input,
            [e.target.name]: e.target.value

        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!input.email || !!Object.keys(error).length) alert('Some fields are missing')
        else {
            alert('User Created')
        }
    }
    return (
        <div className="registrationFormContainer">

            <form onSubmit={handleSubmit}>
                <span className='registrationFormHeader'>Registration Form</span>
                <label>Name</label>
                <input name="name" placeholder="Name..." value={input.name} onChange={handleChange}/>
                {!!error.name && <div className={'danger'}>{error.name}</div>}
                <label>LastName</label>
                <input name="lastname" placeholder="LastName..." value={input.lastname} onChange={handleChange}/>
                {!!error.lastname && <div className={'danger'}>{error.lastname}</div>}
                <label>Email</label>
                <input name="email" placeholder="Email..." value={input.email} onChange={handleChange}/>
                {!!error.email && <div className={'danger'}>{error.email}</div>}
                <label>User</label>
                <input name="user" placeholder="User..." value={input.user}onChange={handleChange}/>
                {!!error.user && <div className={'danger'}>{error.user}</div>}
                <label>Address</label>
                <input name="address" placeholder="Address..." value={input.address}onChange={handleChange}/>
                {!!error.address && <div className={'danger'}>{error.address}</div>}
                <label>Birth</label>
                <input type='date' name="birth" value={input.birth}onChange={handleChange}/>
                {!!error.date && <div className={'danger'}>{error.date}</div>}

                <input type={'submit'} value='Register' />
            </form>

        </div>

    )
}

export default RegistrationForm