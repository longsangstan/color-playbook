import "./IconButton.css";

import React from "react";
import posed from "react-pose";
import styled from "styled-components";

interface IconButtonProps {
  iconName: string;
  isActive?: boolean;
  filled?: boolean;
  onClick: () => void;
}
const PoseWrapper = posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 },
});

const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  isActive = false,
  filled = true,
  onClick,
}) => {
  const IconWrapper = styled.div`
    cursor: pointer;
    outline: none;
    box-shadow: none;
    height: 24px;
    width: 24px;
    padding: 3px;
    border-radius: 100px;
    border: 3px ${isActive && !filled ? "#e0e0e0" : "transparent"} solid;
    background: ${isActive && filled ? "#e0e0e0" : "transparent"};
  `;

  return (
    <PoseWrapper>
      <div className={["animated", "bounceIn"].join(" ")}>
        <IconWrapper onClick={onClick}>
          <i className="material-icons md-dark">{iconName}</i>
        </IconWrapper>
      </div>
    </PoseWrapper>
  );
};

export default IconButton;
