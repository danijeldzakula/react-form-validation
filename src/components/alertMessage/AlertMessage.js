import React, { useEffect, useRef } from 'react';

const AlertMessage = ({ message, time }) => {
  const alertBox = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (alertBox.current) alertBox.current.classList.remove('is-show');
    }, 2000);
  }, [ alertBox, message ]);

  return (
    <div className='alert-message is-show' ref={alertBox}>
      <h1>{message}</h1>
    </div>
  )
}

export default AlertMessage;