import React from 'react'

const ContactForm = ({ data, handleChangeInput }) => {
  return (
    <div className="form">
      <div className="input_text">
        <label htmlFor="name">_name:</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChangeInput}
        />
      </div>

      <div className="input_text">
        <label htmlFor="email">_email:</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChangeInput}
        />
      </div>

      <div className="textarea">
        <label htmlFor="">_message:</label>
        <textarea
          name="message"
          id="msg"
          placeholder="send a message.."
          value={data.message}
          onChange={handleChangeInput}
        />
      </div>

      <button type="submit">send-message</button>
    </div>
  )
}

export default ContactForm