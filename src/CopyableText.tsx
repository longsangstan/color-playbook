import React, { useState } from "react";

interface CopyableTextProps {
  text: string;
}

const copyMessage = (val: string) => {
  let selBox = document.createElement("textarea");
  selBox.style.position = "fixed";
  selBox.style.left = "0";
  selBox.style.top = "0";
  selBox.style.opacity = "0";
  selBox.value = val;
  document.body.appendChild(selBox);
  selBox.focus();
  selBox.select();
  document.execCommand("copy");
  document.body.removeChild(selBox);
};

const CopyableText: React.FC<CopyableTextProps> = props => {
  const { text } = props;

  const [justCopied, setJustCopied] = useState(false);

  const handleClick = () => {
    copyMessage(text);
    setJustCopied(true);
    setTimeout(() => setJustCopied(false), 400);
  };

  return (
    <div className="copyable-text" onClick={handleClick}>
      {justCopied ? "COPIED!" : text}
    </div>
  );
};

export default CopyableText;
