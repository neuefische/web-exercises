import Link from "next/link";
import styled from "styled-components";
import { colors, actionSizes } from "@/styles";

const ActionLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  font-weight: normal;
  transition: background-color 0.2s ease-in-out;
  text-decoration: none;
  padding: ${({ $size = "normal" }) => actionSizes[$size].padding};
  height: ${({ $size = "normal" }) => actionSizes[$size].height};
  font-size: ${({ $size = "normal" }) => actionSizes[$size].fontSize};
  background-color: ${({ $type = "default" }) => colors[$type]};
  &:hover {
    background-color: ${({ $type = "default" }) => colors[`${$type}Hover`]};
  }
`;

export default ActionLink;
