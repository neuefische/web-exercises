import Image from "next/image";
import styled from "styled-components";
import ImageContainer from "./ImageContainer";

export default function Card({ place }) {
  return (
    <ListItem>
      <figure>
        <ImageContainer>
          <Image
            alt=""
            fill
            sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            src={place.image}
          />
        </ImageContainer>
        <figcaption>{place.name}</figcaption>
      </figure>
      <p>Location: {place.location}</p>
    </ListItem>
  );
}

const ListItem = styled.li`
  border: 4px solid black;
  text-align: center;
`;
