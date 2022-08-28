// import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { validateUser } from '../../../validations/editProfileValidate';
import { ChangePassword } from './ChangePassword';

export const EditUserProfile = () => {
  const [spinner, setSpinner] = useState(true);
  return (
    <div className='container mx auto'>
      <div className='flex justify-center px-6 my-12'>
      <Formik
        initialValues={{
          name: '',
          lastname: '',
          gender:'',
          identityCard: '',
          typeIdentityCard: '',
          birthDate: '',
        }}
        validationSchema={validateUser}
        onSubmit={async (values, { resetForm }) => {
          console.log(values)
          await // axios.put(`http://localhost:3001/users/user/${id}`, values)
          resetForm();
          setSpinner(!spinner);
        }}
      >
        {({ errors }) => (
          <Form className='px-8 pt-6 pb-6 mb-4 bg-gray-100 rounded'>
            {/* /<div className='mb-4 md:flex md:justify-between'> */}
              <div className='mb-4 md:mr-2 md:mb-0'>
                <label
                  className='block mb-2 text-sm font-bold text-gray-700'
                  htmlFor='name'
                >
                  First Name
                </label>
                <Field
                  className='w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                  id='name'
                  name='name'
                  type='text'
                  placeholder='First Name'
                />
                <ErrorMessage
                  name='name'
                  component={() => (
                    <p className='text-xs italic mt-3 text-red-500'>
                      {errors.name}
                    </p>
                  )}
                />
              </div>
              <div className='mb-4 md:mr-2 md:mb-0'>
                <label
                  className='block mb-2 text-sm font-bold text-gray-700'
                  htmlFor='lastname'
                >
                  Last Name
                </label>
                <Field
                  className='w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                  id='lastname'
                  name='lastname'
                  type='text'
                  placeholder='Last Name'
                />
                <ErrorMessage
                  name='lastname'
                  component={() => (
                    <p className='text-xs italic mt-3 text-red-500'>
                      {errors.lastname}
                    </p>
                  )}
                />
              </div>
              <div className='mb-4 md:mr-2 md:mb-0'>
                <label
                  className='block mb-2 text-sm font-bold text-gray-700'
                  htmlFor='gender'
                >
                  Gender
                </label>
                {/* <Field
                  className='w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                  id='gender'
                  name='gender'
                  type='text'
                  placeholder='Gender'
                /> */}
                <Field
                  as="select"
                  id='gender'
                  name="gender"
                  className='w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline bg-white'
                  placeholder='Gender'
                >
                  <option></option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage
                  name='gender'
                  component={() => (
                    <p className='text-xs italic mt-3 text-red-500'>
                      {errors.gender}
                    </p>
                  )}
                />
              </div>
              <div className='md:flex md:justify-between'>
                <div className='mb-4 md:mr-2 md:mb-0'>
                  <label
                    className='block mb-2 text-sm font-bold text-gray-700'
                    htmlFor='identityCard'
                  >
                    Identity Card
                  </label>
                  <Field
                    className='w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                    id='identityCard'
                    name='identityCard'
                    type='text'
                    placeholder='Identity Card'
                  />
                  <ErrorMessage
                    name='identityCard'
                    component={() => (
                      <p className='text-xs italic mt-3 text-red-500'>
                        {errors.identityCard}
                      </p>
                    )}
                  />
                </div>
                <div className='mb-4 md:mr-2 md:mb-0'>
                  <Field
                    as="select"
                    id='typeId'
                    name="typeId"
                    className='w-full mt-4 px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline bg-white'
                  >
                    <option></option>
                    <option value="cc">CC</option>
                    <option value="ce">CE</option>
                    <option value="passport">Passport</option>
                  </Field>
                  <ErrorMessage
                    name='typeId'
                    component={() => (
                      <p className='text-xs italic mt-3 text-red-500'>
                        {errors.typeId}
                      </p>
                    )}
                  />
                </div>
              </div>
              <div className='mb-4 md:mr-2 md:mb-0'>
                  <label
                    className='block mb-2 text-sm font-bold text-gray-700'
                    htmlFor='birthDate'
                  >
                    Birthdate
                  </label>
                  <Field
                    className='w-full px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                    id='birthDate'
                    name='birthDate'
                    type='date'
                  />
                  <ErrorMessage
                    name='birthDate'
                    component={() => (
                      <p className='text-xs italic mt-3 text-red-500'>
                        {errors.birthDate}
                      </p>
                    )}
                  />
                </div>
            {/* </div> */}
            <div className='mb-6 text-center w-full px-3 py-3'>
              <button
                className='w-full px-4 py-2 font-bold text-white rounded-full bg-violet-400 hover:bg-violet-500 focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Save
              </button>
            </div>
            <div className='text-center'>
              <Link
                className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'
                to={<ChangePassword />}
              >
                Change Password?
              </Link>
            </div>
          </Form>
        )}
        </Formik>
      </div>
    </div>
  )
};