import React from "react";

export default function Image({ src, alt }) {
  return <img className="round-image" src={src} alt={alt} />;
}
