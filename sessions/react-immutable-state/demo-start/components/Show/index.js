import { useState } from "react";
import styled from "styled-components";
import Episode from "../Episode";
import Season from "../Season";

const Title = styled.h1`
  text-decoration: underline;
  font-size: 1.7rem;
  text-decoration-color: var(--nemo);
  text-underline-offset: 2px;
  text-decoration-thickness: 2px;
  margin: 0;
`;

const StyledShow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export default function Show({ initialSeasons = [] }) {
  const [seasons, setSeasons] = useState(initialSeasons);

  function handleToggleHasSeen(seasonNumber, episodeNumber) {
    setSeasons((prevSeasons) => {
      const season = prevSeasons.find(({ number }) => number === seasonNumber);

      const episode = season.episodes.find(
        ({ number }) => number === episodeNumber
      );

      episode.hasSeen = !episode.hasSeen;

      console.log(prevSeasons);

      return prevSeasons;
    });
  }

  return (
    <StyledShow>
      <Title>A Series of Unfortunate Events</Title>
      {seasons.map((season) => (
        <Season key={season.number} number={season.number}>
          {season.episodes.map((episode) => (
            <Episode
              key={episode.number}
              number={episode.number}
              title={episode.title}
              hasSeen={episode.hasSeen}
              onToggleHasSeen={() => {
                handleToggleHasSeen(season.number, episode.number);
              }}
            />
          ))}
        </Season>
      ))}
    </StyledShow>
  );
}
