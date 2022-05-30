import React, { useRef, useState } from 'react';

const FormContact = ({ addContact }) => {
  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);

  const [ formResult, setFormResult ] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleError = (element, name) => {
    name.length === 0 ? element.current.classList.add('error') : element.current.classList.remove('error');
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    handleError(name, formResult.name);
    handleError(email, formResult.email);
    handleError(phone, formResult.phone);

    if (formResult.name.length !== 0 && formResult.email.length !== 0 && formResult.phone.length !== 0) {
      addContact(formResult);
      setFormResult({ name: "", email: "", phone: "" });
    }
  }

  const handleChange = (event) => {
    setFormResult({ ...formResult, [event.target.name]: event.target.value });
  };

  return (
    <section className='section section-add-new-contact'>
      <div className="container max-w-md">
        <form className='form' onSubmit={(event) => handleSubmit(event)}>
          <h2 className='text-center mb-4 mt-4'>Add new Contact</h2>
          <div className='form-group'>
            <label htmlFor="name" className='block mb-2'>Name:</label>
            <input className='input-field' placeholder='Name' id='name' type='text' name='name' ref={name} value={formResult.name} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor="email" className='block mb-2'>Email:</label>
            <input className='input-field' placeholder='Email' id='email' type='email' name='email' ref={email} value={formResult.email} onChange={handleChange} />
          </div>
          <div className='form-group mb-8'>
            <label htmlFor="phone" className='block mb-2'>Phone:</label>
            <input className='input-field' placeholder='Phone number' id='phone' type='number' name='phone' ref={phone} value={formResult.phone} onChange={handleChange} />
          </div>
          
          <div className='form-group'>
            <button type='submit' className='btn-submit'>Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default FormContact;