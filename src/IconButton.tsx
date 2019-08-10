import React from "react";

interface IconButtonProps {
  iconName: string;
  isActive: boolean;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = props => {
  const { iconName, isActive, onClick } = props;

  return (
    <div
      className="icon-button-wrapper animated bounceIn"
      style={{
        background: isActive ? "#E0E0E0" : "transparent"
      }}
      onClick={onClick}
    >
      <i className="material-icons md-dark">{iconName}</i>
    </div>
  );
};

IconButton.defaultProps = {
  isActive: false
};

export default IconButton;
