import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import { ReactComponent as IconImail } from '../images/icon-email.svg';
import './Contact.css'

function Contact() {
  const [alestMsg, setAlertMsg] = useState('')
  const [alestMsgStyle, setAlertMsgStyle] = useState('')
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setAlertMsg('')
    setAlertMsgStyle('')
    emailjs.sendForm('service_b4d4f6j', 'template_uw1ys4a', form.current, 'user_3oEyefsdSdiP1rh3VWgem')
      .then((result) => {
        setAlertMsg('Le message a bien été envoyé')
        setAlertMsgStyle('success')
        form.current.reset()
      }, (error) => {
        console.log(error.text);
        setAlertMsg(<>Oups! le message n'est pas passé. Vous pouvez réessayer ou m'écrire à cette adresse: <a href="mailto:terjos@neuf.fr">terjos@neuf.fr</a></>)
        setAlertMsgStyle('danger')
      });
  };

  function handleFocus(e) {
    let parent = e.target.parentElement
    parent.classList.add('is-focused')
    parent.classList.add('has-label')
  }

  function handleBlur(e) {
    const el = e.target
    const parent = el.parentElement
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ((el.type === 'email' && !re.test(el.value)) || !el.checkValidity()) {
      parent.classList.add('not-valid')
    } else {
      parent.classList.remove('not-valid')
    }

    if (e.target.value === '') {
      parent.classList.remove('has-label');
    }
    parent.classList.remove('is-focused');
  }

  function handelChange(e) {
    let parent = e.target.parentElement
    if (e.target.value === '') {
      parent.classList.remove('has-label');
    } else {
      parent.classList.add('has-label');
    }
  }

  return (
    <div className="contact">
      <div className={`contact-alert ${alestMsgStyle}`}>{alestMsg}</div>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="field">
          <input
            type="text"
            id="name"
            name="name"
            className="field-input"
            minLength="5"
            onFocus={handleFocus}
            onChange={handelChange}
            onBlur={handleBlur}
            required />
          <label htmlFor="name" className="field-label">Nom complet</label>
        </div>

        <div className="field">
          <input
            type="email"
            id="email"
            name="email"
            className="field-input"
            onFocus={handleFocus}
            onChange={handelChange}
            onBlur={handleBlur}
            required />
          <label htmlFor="email" className="field-label">Email</label>
        </div>

        <div className="field">
          <textarea
            type="text"
            id="message"
            name="message"
            className="field-input"
            minLength="10"
            rows="10"
            onFocus={handleFocus}
            onChange={handelChange}
            onBlur={handleBlur}
            required />
          <label htmlFor="message" className="field-label">Message</label>
        </div>

        <div className="submit">
          <a className="email" href="mailto:terjos@neuf.fr"> <IconImail />terjos@neuf.fr</a>
          <button className="btn" type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
