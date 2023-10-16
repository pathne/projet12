
import './index.css'
import { useState, useEffect } from 'react'

import data from '../../data.js'

function Contact(){

  const contact = data.contact

  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = ()=>{
      const tempInput = document.createElement("input");
      tempInput.value = 'patrickthoannes@gmail.com';
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);

      setCopied(true);

      setTimeout(() => {
          setCopied(false);
      }, 1500);
  };

  return (
    <section className="contact" id="contact">
      <h2>{contact.sectionTitle}</h2>
      <p>{contact.presentation}</p>
      <div className="contact-email-container">
        <img src="./images/icon-email.svg" alt="email" />
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <button onClick={copyEmailToClipboard}>
            <img src="./images/icon-copy.svg" alt="copy"/>
            {copied && <div className="contact-email-copied">{contact.emailCopied}</div>}
        </button>
      </div>
    </section>

  )
}

export default Contact
