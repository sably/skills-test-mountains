"use client";

const Modal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) {
    return <div></div>;
  }
  return (
    <div
      className="overlay fixed top-0 bottom-0 left-0 right-0 z-[1000] bg-[#0009] "
      onClick={onClose}
    >
      <div
        className=" w-[380px] py-3.5 px-10  bg-[#fff] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-r-2"
        onClick={onClose}
      >
        <div className="absolute top-3 right-3 icon plus transfrom rotate-45"></div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
