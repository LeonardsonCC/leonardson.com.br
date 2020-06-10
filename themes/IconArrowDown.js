import styled from "styled-components";

export const Icon = styled.div`
  width: 3rem;
  transform: rotate(90deg);
  fill: ${({ theme }) => theme.text};

  svg:hover {
    animation: bounce 0.5s forwards;
  }
`;
