import React from "react";
import styled from "styled-components";

import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

interface BootstrapProps {
  colors: tinycolor.Instance[];
}

type variant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | undefined;

const Bootstrap: React.FC<BootstrapProps> = ({ colors }) => {
  const variants: variant[] = [
    "primary",
    "success",
    "danger",
    "warning",
    "info"
  ];

  return (
    <div>
      <style type="text/css">
        {`
            .alert {
                position: relative;
                padding: .75rem 1.25rem;
                margin-bottom: 1rem;
                border: 1px solid transparent;
                border-radius: .25rem;
            }

            .alert-primary {
                color: ${colors[0].toHexString()};
                background-color: ${colors[0]
                  .clone()
                  .brighten(40)
                  .toHexString()};
                border-color: ${colors[0]
                  .clone()
                  .brighten(30)
                  .toHexString()};
            }

            .alert-success {
                color: ${colors[1].toHexString()};
                background-color: ${colors[1]
                  .clone()
                  .brighten(40)
                  .toHexString()};
                border-color: ${colors[1]
                  .clone()
                  .brighten(30)
                  .toHexString()};
            }

            .alert-danger {
                color: ${colors[2].toHexString()};
                background-color: ${colors[2]
                  .clone()
                  .brighten(40)
                  .toHexString()};
                border-color: ${colors[2]
                  .clone()
                  .brighten(30)
                  .toHexString()};
            }

            .alert-warning {
                color: ${colors[3].toHexString()};
                background-color: ${colors[3]
                  .clone()
                  .brighten(40)
                  .toHexString()};
                border-color: ${colors[3]
                  .clone()
                  .brighten(30)
                  .toHexString()};
            }

            .alert-info {
                color: ${colors[4].toHexString()};
                background-color: ${colors[4]
                  .clone()
                  .brighten(40)
                  .toHexString()};
                border-color: ${colors[4]
                  .clone()
                  .brighten(30)
                  .toHexString()};
            }
          `}
      </style>
      {variants.map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </div>
  );
};

export default Bootstrap;
