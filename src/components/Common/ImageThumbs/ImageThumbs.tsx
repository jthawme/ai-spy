import React from "react";

import classNames from "classnames";

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
  return (
    <div
      className={`${className} ${styles.list} ${!!highlighted &&
        styles.hasHighlighted}`}
    >
      {images.map((img, index) => {
        const cls = classNames(
          styles.image,
          {
            [styles.selected]: selected === index,
          },
          {
            [styles.highlighted]: highlighted === index,
          }
        );
        return (
          <button
            key={index}
            className={cls}
            onClick={() => onSelect(index)}
            disabled={!!highlighted && highlighted !== index}
          >
            <img src={img} />
          </button>
        );
      })}
    </div>
  );
};

export default ImageThumbs;
