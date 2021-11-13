import React, { useState } from "react";
import ContactFormSection from "./ContactFormSection";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="site-btn sb-gradients">
        Bizimle İletişime Geç
      </button>

      {modal && (
        <div className="contailer">
          <div onClick={toggleModal} className="flex"></div>
          <div className="modal-content">
           <ContactFormSection/>
            <button className="close-modal btn btn-danger" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}