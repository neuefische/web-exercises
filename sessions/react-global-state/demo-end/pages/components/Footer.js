import { useState } from "react";

export default function Footer({ dragonCount }) {
  return (
    <>
      Counting since 1899 — Currently there{" "}
      {dragonCount === 1 ? "is one dragon" : `are ${dragonCount} dragons`}.
    </>
  );
}
