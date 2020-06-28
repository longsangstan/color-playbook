import "./AboutPage.css";

import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <h1>Tips</h1>
      <p>
        <b>Show/hide</b> the palette bar by clicking the palette icon.
      </p>
      <p>
        <b>Re-order</b> the colors in the palette bar by dragging and dropping.
      </p>
      <p>
        <b>Share</b> your palette via url in the following format:
        <br />
        <a
          href={`${
            window.location.origin || "http://localhost:3000"
          }/palette?colors=502FF2,323B58,58477D,C94F81,27E5CE`}
        >
          {`${
            window.location.origin || "http://localhost:3000"
          }/palette?colors=502FF2,323B58,58477D,C94F81,27E5CE`}
        </a>
      </p>

      <h1>Credits</h1>
      <p>
        The pattern graphic is{" "}
        <a href="http://www.freepik.com">Designed by Freepik</a>.
      </p>

      <h1>Source Code</h1>
      <a href="https://github.com/longsangstan/color-playbook">
        github/longsangstan/color-playbook
      </a>

      <p>
        Made with{" "}
        <span role="img" aria-label="hearts">
          ❤️💛💚💙💜
        </span>{" "}
        by <a href="https://clss.hk/?utm_source=color">clss.hk</a>
      </p>
    </div>
  );
};

export default AboutPage;
