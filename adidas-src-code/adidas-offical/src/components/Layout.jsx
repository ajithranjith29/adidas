import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Modal from "./Modal";
import '../styles/Layout.css'

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="layout">
      <Header openModal={handleOpenModal} />
      <Outlet context={{ openModal: handleOpenModal }} />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}