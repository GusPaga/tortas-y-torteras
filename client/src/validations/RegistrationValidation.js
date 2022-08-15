
export const validate = (input) => {
    const error = {}

    if(!input.name) error.name = 'Name is required'
    if(!input.lastname) error.lastname = 'Lastname is required'
    if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(input.email)) error.email = 'It has to be an email'
    if(!input.user) error.user = 'User is required'
    if(!input.address) error.address = 'Address is required'
    if(!input.birth) error.birth = 'Birth date is required'

    return error
}