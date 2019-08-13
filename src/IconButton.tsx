import React from "react";
import posed from "react-pose";

interface IconButtonProps {
  iconName: string;
  isActive: boolean;
  onClick: () => void;
}
const Wrapper = posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 }
});

const IconButton: React.FC<IconButtonProps> = props => {
  const { iconName, isActive, onClick } = props;

  return (
    <Wrapper>
      <div
        className={`icon-button-wrapper animated bounceIn ${
          isActive ? "is-active" : ""
        }`}
        onClick={onClick}
      >
        <i className="material-icons md-dark">{iconName}</i>
      </div>
    </Wrapper>
  );
};

IconButton.defaultProps = {
  isActive: false
};

export default IconButton;
