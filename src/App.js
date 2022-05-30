import React from 'react';
import Main from './router/Main';
import Header from './components/header/Header';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Main />
    </div>
  )
}

export default App;



















































// import { useState } from "react";
// import ContactForm from "./components/ContactForm.js";
// import ContactList from "./components/ContactList.js";
// import "./index.css";

// function App() {
//   // here we create an array state to store the contact form data
//   const [contacts, updateContacts] = useState([]);

//   const addContact = (contact) => {
//     updateContacts([...contacts, contact]);

//   };


//   return (
//     <div className="app">
//       {/* <ContactForm addContact={addContact} />
//       <ContactList contacts={contacts} /> */}
//     </div>
//   );
// }

// export default App;

























































// import React, { useState } from 'react';
// import Form from './components/Form';
// import Results from './components/Results';

// const App = () => {
//   /* https://www.agirl.codes/complete-guide-build-react-forms-with-usestate-hook */
//   const [ data, setData ] = useState([]);
//   const [ show, setShow ] = useState(false);

//   const submitForm = (file) => {
    
//     let { regions, cities, description, from, to } = file;

//     if (regions.length > 0 && cities.length > 0 && description.length && from === undefined && to === undefined) {
//       setData([...data, file]);
//     }
    
//   }

//   return (
//     <div className='app'>
//       <div className='container mx-auto pl-4 pr-4 max-w-md'>
//         <Form submitForm={submitForm} setShow={setShow} show={show} />
//         <Results data={data} show={show} setShow={setShow} />
//       </div>
//     </div>
//   )
// }

// export default App;