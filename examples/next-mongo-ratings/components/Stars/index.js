import { useState } from "react";
import Flex from "../Layout/Flex";

const FILL_COLOR = "#ffb703";
const EMPTY_COLOR = "gray";

export default function Stars({
  value = 3,
  count = 5,
  size = 24,
  interactive = false,
  onChange,
}) {
  const [hoverValue, setHoverValue] = useState(value);
  const [rated, setRated] = useState(false);

  function getFill(index) {
    if (interactive) {
      return index >= hoverValue ? EMPTY_COLOR : FILL_COLOR;
    }
    return index >= value ? EMPTY_COLOR : FILL_COLOR;
  }

  function onMouseLeave() {
    setHoverValue(value);
  }

  if (interactive) {
    return (
      <Flex gap={0} onMouseLeave={onMouseLeave}>
        {Array.from({ length: count }, (_, index) => (
          <label key={index}>
            <input
              type="radio"
              name="value"
              style={{ display: "none" }}
              value={index + 1}
              onChange={() => {
                setRated(true);
                onChange(index + 1);
              }}
            />
            <svg
              aria-label={`Rating is ${index + 1} out of ${count}`}
              onMouseEnter={() => setHoverValue(index + 1)}
              stroke={rated ? "#118ab2" : null}
              fill={getFill(index)}
              width={size}
              height={size}
              viewBox={`0 0 24 24`}
            >
              <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z" />
            </svg>
          </label>
        ))}
      </Flex>
    );
  }

  return (
    <Flex gap={0} aria-label={`Rated ${value} out of ${count}`}>
      {Array.from({ length: count }, (_, index) => (
        <svg
          key={index}
          fill={getFill(index)}
          width={size}
          height={size}
          viewBox={`0 0 24 24`}
        >
          <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z" />
        </svg>
      ))}
    </Flex>
  );
}
