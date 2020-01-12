import React, { useCallback, useState } from "react";

import { motion } from "framer-motion";

import ImageThumbsModal from "./ImageThumbsModal";

import * as styles from "./ImageThumbs.module.scss";

interface ImageThumbsProps {
  className?: string;
  images: string[];
  selected?: number;
  highlighted?: number;
  onSelect?: (idx: number) => void;
}

const ImageThumbs: React.FC<ImageThumbsProps> = ({
  images,
  className,
  selected,
  highlighted,
  onSelect = () => {},
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onAnimationComplete = useCallback(
    (idx: number) => {
      if (typeof selected !== "undefined" && selected === idx) {
        setShowModal(true);
      }
    },
    [selected, setShowModal]
  );

  const requestCloseModal = useCallback(() => {
    setShowModal(false);
    onSelect(-1);
  }, [setShowModal]);

  return (
    <div className={`${className} ${styles.list}`}>
      {images.map((img, index) => {
        return (
          <motion.button
            animate={{ y: selected === index ? "0%" : "80%" }}
            key={index}
            className={styles.image}
            onClick={() => onSelect(index)}
            onAnimationComplete={() => onAnimationComplete(index)}
          >
            <img src={img} />
          </motion.button>
        );
      })}

      <ImageThumbsModal
        show={showModal}
        img={
          typeof selected !== "undefined" && selected >= 0
            ? images[selected]
            : undefined
        }
        onClose={requestCloseModal}
      />
    </div>
  );
};

export default ImageThumbs;
