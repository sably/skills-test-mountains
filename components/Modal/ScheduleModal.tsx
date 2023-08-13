"use client";

import { useState } from "react";
import Schedule from "../Accordion/Schedule";
import Modal from "./modal";

const ScheduleModal = ({ content }: any) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setTimeout(() => {
      setModalOpen(true);
    }, 150);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="">
      <button
        className="absolute bg-[#414f6bde] text-white  px-4 py-2 rounded top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        onClick={handleOpenModal}
      >
        show Schedule
      </button>
      {/* <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        {<Schedule scheduleItem={content} />}
      </Modal> */}
      {<Schedule scheduleItem={content} />}
    </div>
  );
};

export default ScheduleModal;
