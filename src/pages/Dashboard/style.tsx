import styled from "styled-components";
import Cores from "../../styles/cores/cores";

export const Container = styled.div`
  &.container-dashboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    height: 100%;
    min-height: 100vh;
    background-color: ${Cores.azulEscuro};
    color: ${Cores.brancoForte};
  }
  .dashboard-welcome {
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    .dashboard-welcome {
      font-size: 1.5rem;
    }
  }
`;

export const TaskContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0.5rem;
    width: 100%;
    max-width: 800px;
    padding: 0.5rem;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-gap: 1rem;
      width: 95%;
    }
`;