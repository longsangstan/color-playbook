import React from "react";
import posed from "react-pose";

interface IconButtonProps {
  iconName: string;
  isActive: boolean;
  filled?: boolean;
  onClick: () => void;
}
const Wrapper = posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 }
});

const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  isActive = false,
  filled = false,
  onClick
}) => {
  const className = ["icon-button-wrapper", "animated", "bounceIn"];
  if (isActive) {
    if (filled) {
      className.push("highlighted-outline");
    } else {
      className.push("highlighted");
    }
  }

  return (
    <Wrapper>
      <div className={className.join(" ")} onClick={onClick}>
        <i className="material-icons md-dark">{iconName}</i>
      </div>
    </Wrapper>
  );
};

export default IconButton;
