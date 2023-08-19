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
      <button onClick={onOpen} className="p-4">
        <img src="/icons/multiply.svg" alt="close" />
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          content: {
            width: "30rem",
            height: "20rem",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
          overlay: {
            zIndex: 100,
          },
        }}
      >
        <div className="flex flex-col gap-4 items-center justify-center h-full">
          <div>
            {CLOSE_ALERT.split("\n").map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
          <div className="flex gap-4">
            <button onClick={() => setIsOpen(false)}>{CLOSE}</button>
            <button onClick={onClose}>{CONFIRM}</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CloseButton;
