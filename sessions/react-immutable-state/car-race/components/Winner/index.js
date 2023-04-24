import styled from "styled-components";

export default function Winner({ winner, onRestart }) {
  return (
    <div>
      <h1>
        <WinnerEmoji>{winner.emoji}</WinnerEmoji> won!
      </h1>
      <button onClick={() => onRestart()}>Restart</button>
    </div>
  );
}

const WinnerEmoji = styled.span`
  transform: scaleX(-1);
  display: inline-block;
`;
