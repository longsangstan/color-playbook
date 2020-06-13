import "./ButtonBar.css";

import IconButton from "../shared/IconButton";
import React from "react";

interface ButtonBarProps {
  onRefreshClick: () => void;
  isPaletteActive: boolean;
  isPaletteBarOpen: boolean;
  onPaletteClick: () => void;
  isHelpActive: boolean;
  onHelpClick: () => void;
}

const ButtonBar: React.FC<ButtonBarProps> = (props) => {
  const {
    onRefreshClick,
    isPaletteActive,
    isPaletteBarOpen,
    onPaletteClick,
    isHelpActive,
    onHelpClick,
  } = props;

  return (
    <div className="button-bar">
      <IconButton
        iconName="autorenew"
        isActive={false}
        onClick={onRefreshClick}
      />

      <IconButton
        iconName="color_lens"
        isActive={isPaletteActive}
        filled={!isPaletteBarOpen}
        onClick={onPaletteClick}
      />

      <IconButton
        iconName="help_outline"
        isActive={isHelpActive}
        onClick={onHelpClick}
      />
    </div>
  );
};

export default ButtonBar;
