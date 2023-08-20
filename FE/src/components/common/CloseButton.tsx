import { useSwiper } from "swiper/react";
import Modal from "react-modal";
import { useState } from "react";
import { CLOSE, CLOSE_ALERT, CONFIRM } from "@/constants/main.en";

Modal.setAppElement("#root");

const CloseButton = () => {
  const swiper = useSwiper();
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    swiper.slideTo(0);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={onOpen} className="p-4 mr-12">
        <img src="/icons/multiply.svg" alt="close" />
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          content: {
            width: "20rem",
            height: "12rem",
            borderRadius: "1rem",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: 0,
          },
          overlay: {
            zIndex: 100,
            backdropFilter: "blur(10px) brightness(0.5)",
          },
        }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex h-full justify-center items-center flex-col flex-1 px-8 text-center font-light">
            {CLOSE_ALERT}
          </div>
          <div className="flex w-full border-t text-[#1F732C] font-semibold">
            <button
              className="flex-1 border-r p-4"
              onClick={() => setIsOpen(false)}
            >
              {CLOSE}
            </button>
            <button className="flex-1 p-4 " onClick={onClose}>
              {CONFIRM}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CloseButton;
