import React from 'react';

const Inbox = () => {
  return (
    <div className='d-box'>
      <h1 className='h'>Write a message.</h1>
      <span className='s'>If you got any questions, please do not hesitate to send us a message. We reply within 24 hours!</span>
      <form action="">
        <label>Name :</label>
        <input type="text" />
        <label>Email :</label>
        <input type="text" />
        <label>Message :</label>
        <textarea></textarea>
        <input type="submit" value={'SEND'} />
      </form>
    </div>
  );
}

export default Inbox;
