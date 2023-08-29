import { Form, redirect, useNavigation } from "react-router-dom";
import{toast} from 'react-toastify';
import axios from "axios";

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    /* note: the response will return an error if an email other than test@test.com is used. This is 
    a requirement of the cocktails-newsletter api endpoint */
    const response = await axios.post(newsletterUrl, data);
    toast.success(response.data.msg);
    return redirect('/');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Form className='form' method='POST'>
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Our Newsletter
      </h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          First Name
        </label>
        <input type='text' className='form-input' name='name' id='name' required/>
      </div>
      <div className='form-row'>
        <label htmlFor='lastName' className='form-label'>
          Last Name
        </label>
        <input type='text' className='form-input' name='lastName' id='lastName' required/>
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input type='email' className='form-input' name='email' id='email' defaultValue='test@test.com' required/>
      </div>
      <button className="btn btn-block" type="submit" 
      style={{marginTop: '0.5rem'}} disabled={isSubmitting}>
        {isSubmitting ? 'submitting' : 'submit'}
      </button>
    </Form>
  );
}
export default Newsletter