import { useState } from "react";
import styled from "styled-components";
import Episode from "../Episode";
import Season from "../Season";
import Show from "../Show";

const ShowList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export default function Shows({ initialShows = [] }) {
  const [shows, setShows] = useState(initialShows);

  function handleToggleHasSeen(show, season, episode) {
    setShows((prevShows) => {
      const newShows = [...prevShows];

      const showIndex = newShows.findIndex(
        (prevShow) => prevShow.id === show.id
      );

      const seasonIndex = newShows[showIndex].seasons.findIndex(
        (prevSeason) => prevSeason.number === season.number
      );

      const episodeIndex = newShows[showIndex].seasons[
        seasonIndex
      ].episodes.findIndex(
        (prevEpisode) => prevEpisode.number === episode.number
      );

      console.log({
        prev: newShows[showIndex].seasons[seasonIndex].episodes[episodeIndex]
          .hasSeen,
        next: !newShows[showIndex].seasons[seasonIndex].episodes[episodeIndex]
          .hasSeen,
      });

      newShows[showIndex].seasons[seasonIndex].episodes[episodeIndex].hasSeen =
        !newShows[showIndex].seasons[seasonIndex].episodes[episodeIndex]
          .hasSeen;

      return newShows;
    });
  }

  return (
    <>
      <h1>Favorite Shows</h1>
      <ShowList>
        {shows.map((show) => (
          <li key={show.id}>
            <Show id={show.id} name={show.name}>
              {show.seasons.map((season) => (
                <Season key={season.number} number={season.number}>
                  {season.episodes.map((episode) => (
                    <Episode
                      key={episode.number}
                      number={episode.number}
                      title={episode.title}
                      hasSeen={episode.hasSeen}
                      onToggleHasSeen={() => {
                        handleToggleHasSeen(show, season, episode);
                        // setShows((prevShows) => {
                        //   return prevShows.map((prevShow) => {
                        //     if (prevShow.id !== show.id) {
                        //       return prevShow;
                        //     }
                        //     return {
                        //       ...prevShow,
                        //       seasons: prevShow.seasons.map((prevSeason) => {
                        //         if (prevSeason.number !== season.number) {
                        //           return prevSeason;
                        //         }
                        //         return {
                        //           ...prevSeason,
                        //           episodes: prevSeason.episodes.map(
                        //             (prevEpisode) => {
                        //               if (
                        //                 prevEpisode.number !== episode.number
                        //               ) {
                        //                 return prevEpisode;
                        //               }
                        //               return {
                        //                 ...prevEpisode,
                        //                 hasSeen: !prevEpisode.hasSeen,
                        //               };
                        //             }
                        //           ),
                        //         };
                        //       }),
                        //     };
                        //   });
                        // });
                      }}
                    />
                  ))}
                </Season>
              ))}
            </Show>
          </li>
        ))}
      </ShowList>
    </>
  );
}
