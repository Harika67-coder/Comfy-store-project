import { FormInput, SubmitBtn } from '../components';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils/index';
import {Form,Link} from 'react-router-dom'
export const action=async({request})=>{
  const response=await request.formData();
  const data=Object.fromEntries(response);
  console.log(data);
  try
  {
     const response=await customFetch.post('/auth/local/register',data);
     toast.success("account created successfully")
     return redirect('/login');
  }
  catch(error)
  {
    const errorMessage =
      error?.response?.data?.error?.message ||
      'please double check your credentials';
      console.log(error);
    toast.error(errorMessage);
    return null;
  }
  
}
const Register=()=>{
  return <section className='h-screen grid place-items-center'>
  <Form
    method='post'
    className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
  >
    <h4 className='text-center text-3xl font-bold'>Register</h4>
    <FormInput
      type='text'
      label='username'
      name='username'
    />
    <FormInput
      type='email'
      label='email'
      name='email'
    />
    <FormInput
      type='password'
      label='password'
      name='password'
    />
    <div className='mt-4'>
      <SubmitBtn text='register' />
    </div>
    <p className='text-center'>
       Already a member?
      <Link
        to='/login'
        className='ml-2 link link-hover link-primary capitalize'
      >
       Login
      </Link>
    </p>
  </Form>
</section>
}


export default Register