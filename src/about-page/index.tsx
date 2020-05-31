import "./AboutPage.css";

import React from "react";

const HelpPage: React.FC = () => {
  return (
    <div className="about-page">
      <h1>Tips</h1>
      <p>Click the palette icon to show/hide the palette bar.</p>
      <p>
        You can re-order the colors in the palette bar by dragging and dropping.
      </p>
      <p>
        You can share your palette via url in the following format:
        <br />
        <a href="https://color.clss.hk/palette?colors=502FF2,323B58,58477D,C94F81,27E5CE">
          https://color.clss.hk/palette?colors=502FF2,323B58,58477D,C94F81,27E5CE
        </a>
      </p>

      <h1>Credits</h1>
      <p>
        The app is heavily inspired by{" "}
        <a href="https://chrome.google.com/webstore/detail/color-by-fardos/iibpgpkhpfggipbacjfeijkloidhmiei">
          Color by Fardos
        </a>{" "}
        and <a href="https://colorsupplyyy.com/app">Color Supply</a>.
      </p>
      <p>
        The graphic is <a href="http://www.freepik.com">Designed by Freepik</a>.
      </p>

      <h1>Source Code</h1>
      <a href="https://github.com/longsangstan/color-app">
        github/longsangstan/color-app
      </a>
    </div>
  );
};

export default HelpPage;
