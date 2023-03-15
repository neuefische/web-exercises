import styled from "styled-components";
import { List } from "../List.js";

const Wrapper = styled.section`
  width: 60%;
`;

const Title = styled.h3`
  margin: 0;
`;

export default function Comments({ comments }) {
  return (
    <Wrapper>
      <Title>Comments</Title>
      <List role="list">
        {comments.map((comment, index) => (
          <li key={index}>
            <p>
              <q>{comment}</q>
            </p>
          </li>
        ))}
      </List>
    </Wrapper>
  );
}
