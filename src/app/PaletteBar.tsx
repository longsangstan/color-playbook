import "./PaletteBar.css";

import { ChromePicker, ColorResult } from "react-color";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";

import ColorPlate from "../shared/ColorPlate";
import IconButton from "../shared/IconButton";
import React from "react";
import posed from "react-pose";
import tinycolor from "tinycolor2";
import { useState } from "react";

const Wrapper = posed.div({
  visible: {
    applyAtStart: { display: "" },
    y: 0,
  },
  hidden: {
    applyAtEnd: { display: "none" },
    y: 600,
  },
});

interface PaletteBarProps {
  isVisible: boolean;
  colors: tinycolor.Instance[];
  activeColorKey: number;
  handleColorClick: (key: number) => void;
  handlePickerColorChange: (color: ColorResult) => void;
  handleColorRefreshClick: () => void;
  handleDragEnd: (result: DropResult) => void;
}

type Panel = "picker" | "swatch" | "share";

const PaletteBar: React.FC<PaletteBarProps> = ({
  isVisible,
  colors,
  activeColorKey,
  handleColorClick,
  handlePickerColorChange,
  handleColorRefreshClick,
  handleDragEnd,
}) => {
  const [panel, setPanel] = useState<Panel>("picker");

  return (
    <Wrapper className={`palette-bar`} pose={isVisible ? "visible" : "hidden"}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided) => (
            <div
              ref={provided.innerRef}
              className="palette-bar-row"
              {...provided.droppableProps}
            >
              {colors.map((item, index) => (
                <Draggable
                  key={index}
                  draggableId={index.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ColorPlate
                        key={index}
                        filled={index !== activeColorKey}
                        size={40}
                        tinycolor={item}
                        onColorClick={() => handleColorClick(index)}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className="palette-bar-divider" />

      <div className="palette-bar-panel">
        {panel === "picker" && (
          <ChromePicker
            disableAlpha
            color={colors[activeColorKey].toHexString()}
            onChange={handlePickerColorChange}
          />
        )}

        {panel === "swatch" && <div className="palette-bar-swatch">Swatch</div>}

        {panel === "share" && <div className="palette-bar-share">Share</div>}
      </div>

      <div className="palette-bar-buttons">
        <IconButton
          iconName="colorize"
          onClick={() => setPanel("picker")}
          isActive={panel === "picker"}
        />
        <IconButton
          iconName="invert_colors"
          onClick={() => setPanel("swatch")}
          isActive={panel === "swatch"}
        />
        <IconButton iconName="autorenew" onClick={handleColorRefreshClick} />
        <IconButton
          iconName="share"
          onClick={() => setPanel("share")}
          isActive={panel === "share"}
        />
      </div>
    </Wrapper>
  );
};

export default PaletteBar;
