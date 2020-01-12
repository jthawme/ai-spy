import React, { useCallback, useState, useEffect } from "react";

import Modal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";

import * as styles from "./ImageThumbs.module.scss";
import Button from "../Button/Button";

Modal.setAppElement(document.body);

const ImageThumbsModal: React.FC<{
  show: boolean;
  onClose: () => void;
  img?: string;
}> = ({ show, onClose, img }) => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [contentShow, setContentShow] = useState<boolean>(false);
  const [internalImg, setInternalImg] = useState<string | null>(null);

  const onAnimationComplete = useCallback(() => {
    if (!show) {
      setModalShow(false);
    }
  }, [show]);

  useEffect(() => {
    if (show) {
      setModalShow(true);
    } else {
      setContentShow(false);
    }
  }, [show]);

  useEffect(() => {
    if (img) {
      setInternalImg(img);
    }
  }, [img, setInternalImg]);

  return (
    <Modal
      isOpen={modalShow}
      onAfterOpen={() => setContentShow(true)}
      onAfterClose={() => onClose()}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <AnimatePresence>
        {contentShow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onAnimationComplete={onAnimationComplete}
            className={styles.modalContent}
            onClick={() => onClose()}
          >
            <Button className={styles.close} inline size="small">
              Tap to close
            </Button>
            {internalImg && <img src={internalImg} alt="" />}
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
};

export default ImageThumbsModal;
