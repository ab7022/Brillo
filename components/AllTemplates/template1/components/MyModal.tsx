// MyModal.js
import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next"); // Set the app element to make the modal accessible

const MyModal = ({ isOpen, closeModal, content }: any) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <h2>My Modal</h2>
      <p>{content}</p>
      <button onClick={closeModal}>Close Modal</button>
    </Modal>
  );
};

export default MyModal;
