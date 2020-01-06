import React, { useState } from "react";

import ImageThumbs from "./ImageThumbs";
import { action } from "@storybook/addon-actions";

export default {
  title: "Image Thumbs",
};

export const list = () => {
  const imgs = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
  ];
  return <ImageThumbs images={imgs} />;
};

export const highlighted = () => {
  const [highlighted, setHighlighted] = useState(3);

  const imgs = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
  ];
  return <ImageThumbs images={imgs} highlighted={highlighted} />;
};

export const selected = () => {
  const [selected, setSelected] = useState(3);

  const imgs = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
  ];
  return (
    <ImageThumbs
      images={imgs}
      selected={selected}
      onSelect={(idx: number) => {
        action("Selected");
        setSelected(idx);
      }}
    />
  );
};
