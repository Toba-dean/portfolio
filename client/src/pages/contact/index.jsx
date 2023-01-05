import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';

import { ContactForm, ContactMenu, ContactRight, NavTop, Sent } from "../../component";
import "./contact.styles.scss";

const Contact = () => {

  useEffect(() => {
    document.title = "dean - contact"
  });

  const userData = {
    name: "",
    email: "",
    message: ""
  }
  const [data, setData] = useState(userData);
  const [loading, setLoading] = useState(false);
  const form = useRef()

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.sendForm(
      'service_71sylbg',
      'template_h1hqbok',
      form.current,
      '8zWqn6oenvTFH5-3n'
    )
      .then(result => {
        setLoading(true)
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    form.current.reset();
  };

  const handleClick = () => {
    setLoading(false)
  }

  return (
    <div className="contact">
      <div className="contact_info">
        <NavTop path="contact" mobilePath="_contact.me" />
        <ContactMenu />
      </div>

      {
        !loading ? (
          <form className="contact_form" ref={form} onSubmit={handleSubmit}>
            <ContactForm data={data} handleChangeInput={handleChangeInput} />
          </form>
        ) : (
          <Sent handleClick={handleClick} />
        )
      }

      <ContactRight data={data} />
    </div>
  )
}

export default Contact