import styled from 'styled-components';

/* eslint-disable-next-line */
export interface OtherComponentProps {}

const StyledOtherComponent = styled.div`
  color: pink;
`;

export function OtherComponent(props: OtherComponentProps) {
  return (
    <StyledOtherComponent>
      <h1>Welcome to OtherComponent!</h1>
    </StyledOtherComponent>
  );
}

export default OtherComponent;
