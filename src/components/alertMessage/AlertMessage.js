import React, { useEffect, useRef } from 'react';

const AlertMessage = ({ message, time }) => {
  const alertBox = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      alertBox.current.classList.remove('is-show');
    }, time || 2000);
  }, [message]);

  return (
    <div className='alert-message is-show' ref={alertBox}>
      <h1>{message}</h1>
    </div>
  )
}

export default AlertMessage;