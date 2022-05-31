import React, { useRef, useState, useEffect } from 'react';
import AlertMessage from '../../components/alertMessage/AlertMessage';

const FormContact = ({ addContact, myName }) => {
  // all inputs refs
  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  // form results 
  const [ formResult, setFormResult ] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // add error to input
  const handleError = (element, name) => {
    name.length === 0 ? element.current.classList.add('error') : element.current.classList.remove('error');
  }
  
  // set message value
  const [ messages, setMessages ] = useState([]);
  // call messages 
  const callMessage = (value) => {
    setMessages([...messages, value]);
  }

  // handle submit form 
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle input error
    handleError(name, formResult.name);
    handleError(email, formResult.email);
    handleError(phone, formResult.phone);

    // check validation form
    if (formResult.name !== '' && formResult.email !== '' && formResult.phone !== '') {
      // add new contact 
      addContact(formResult);
      // reset state to default values
      setFormResult({ name: "", email: "", phone: "" });
      // write success messages
      callMessage({message: 'Uspesno ste popunili obrazac!'});
    }
  }
  
  // get value with onchange event
  const handleChange = (event) => {
    setFormResult({ ...formResult, [event.target.name]: event.target.value });
  };

  return (
    <section className='section section-add-new-ad'>
      <div className="container max-w-md">
        <form className='form' onSubmit={(event) => handleSubmit(event)}>
          <h2 className='text-center mt-4 mb-4 border-b-[1px] border-zinc-400 pb-4'>{myName}</h2>
          <h2 className='text-center mb-4 mt-4 text-2xl'>Add new Contact</h2>
          {messages.length ? messages.map((message, key) => <AlertMessage message={message.message} time={10000} key={key} /> ) : null}

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