import React from "react";

import * as styles from "./Message.module.scss";
import Icon from "../Icon/Icon";

interface MessageProps {
  text: string;
  icon: string;
  animated?: boolean;
  className?: string;
}

const Message: React.FC<MessageProps> = ({
  className,
  icon,
  text,
  animated,
}) => {
  return (
    <div className={`${className} ${styles.message}`}>
      <Icon
        className={animated ? styles.animated : undefined}
        icon={icon}
        size="medium"
      />
      <p>{text}</p>
    </div>
  );
};

export default Message;
