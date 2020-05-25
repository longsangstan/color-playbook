import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import React from "react";
import Spinner from "react-bootstrap/Spinner";

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
    "info",
  ];

  const Buttons = (
    <>
      <style type="text/css">
        {`
          .btn {
            display: inline-block;
            font-weight: 400;
            color: #212529;
            text-align: center;
            vertical-align: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-color: transparent;
            border: 1px solid transparent;
            padding: .375rem .75rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: .25rem;
            transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
          }

          .btn-primary {
            color: #fff;
            background-color: ${colors[0].toHexString()};
            border-color: ${colors[0].toHexString()};
          }

          .btn-success {
            color: #fff;
            background-color: ${colors[1].toHexString()};
            border-color: ${colors[1].toHexString()};
          }

          .btn-danger {
            color: #fff;
            background-color: ${colors[2].toHexString()};
            border-color: ${colors[2].toHexString()};
          }

          .btn-warning {
            color: #fff;
            background-color: ${colors[3].toHexString()};
            border-color: ${colors[3].toHexString()};
          }

          .btn-info {
            color: #fff;
            background-color: ${colors[4].toHexString()};
            border-color: ${colors[4].toHexString()};
          }

          .btn-outline-primary {
            color: ${colors[0].toHexString()};
            border-color: ${colors[0].toHexString()};
          }

          .btn-outline-success {
            color: ${colors[1].toHexString()};
            border-color: ${colors[1].toHexString()};
          }

          .btn-outline-danger {
            color: ${colors[2].toHexString()};
            border-color: ${colors[2].toHexString()};
          }

          .btn-outline-warning {
            color: ${colors[3].toHexString()};
            border-color: ${colors[3].toHexString()};
          }

          .btn-outline-info {
            color: ${colors[4].toHexString()};
            border-color: ${colors[4].toHexString()};
          }
        `}
      </style>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {variants.map((variant, idx) => (
          <div style={{ margin: 4 }} key={idx}>
            <Button variant={variant}>{variant}</Button>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {variants.map((variant, idx) => (
          <div style={{ margin: 4 }} key={idx}>
            <Button variant={("outline-" + variant) as variant}>
              {variant}
            </Button>
          </div>
        ))}
      </div>
    </>
  );

  const ProgressBars = (
    <div style={{ padding: 10 }}>
      <style type="text/css">
        {`
          .progress {
            display: flex;
            height: 1rem;
            overflow: hidden;
            font-size: .75rem;
            background-color: #e9ecef;
            border-radius: .25rem;
          }

          .progress-bar-striped {
            background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
            background-size: 1rem 1rem;
          }

          .progress-bar-animated {
            -webkit-animation: progress-bar-stripes 1s linear infinite;
            animation: progress-bar-stripes 1s linear infinite;
          }

          @keyframes progress-bar-stripes {
            0% {
              background-position: 1rem 0;
            }
            100% {
              background-position: 0 0;
            }
          }

          .progress-bar {
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: #fff;
            text-align: center;
            white-space: nowrap;
            background-color: #007bff;
            -webkit-transition: width .6s ease;
            transition: width .6s ease;
            box-shadow: 0 0 black;
          }

          .bg-primary {
            background-color: ${colors[0].toHexString()}!important;
          }

          .bg-success {
            background-color: ${colors[1].toHexString()}!important;
          }

          .bg-danger {
            background-color: ${colors[2].toHexString()}!important;
          }

          .bg-warning {
            background-color: ${colors[3].toHexString()}!important;
          }

          .bg-info {
            background-color: ${colors[4].toHexString()}!important;
          }
      `}
      </style>

      {variants.map((variant, idx) => (
        <div style={{ margin: 4 }} key={idx}>
          <ProgressBar
            striped
            animated
            variant={
              variant as "success" | "danger" | "warning" | "info" | undefined
            }
            now={Math.floor(Math.random() * (90 - 20 + 1) + 20)}
          />
        </div>
      ))}
    </div>
  );

  const Spinners = (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <style type="text/css">{`
        .spinner-border {
          display: inline-block;
          width: 2rem;
          height: 2rem;
          vertical-align: text-bottom;
          border: .25em solid;
          border-right: .25em solid transparent;
          border-radius: 50%;
          -webkit-animation: spinner-border .75s linear infinite;
          animation: spinner-border .75s linear infinite;
      }
      
        .text-primary {
            color: ${colors[0].toHexString()}!important;
        }

        .text-success {
          color: ${colors[1].toHexString()}!important;
        }

        .text-danger {
          color: ${colors[2].toHexString()}!important;
        }

        .text-warning {
          color: ${colors[3].toHexString()}!important;
        }

        .text-info {
          color: ${colors[4].toHexString()}!important;
        }

        @keyframes spinner-border{
          100% {
            -webkit-transform: rotate(1turn);
            transform: rotate(1turn);
          }
        }
      `}</style>

      {variants.map((variant, idx) => (
        <div style={{ margin: 4 }} key={idx}>
          <Spinner animation="border" variant={variant} />
        </div>
      ))}
    </div>
  );

  return (
    <div>
      {Buttons}
      {ProgressBars}
      {Spinners}
    </div>
  );
};

export default Bootstrap;
