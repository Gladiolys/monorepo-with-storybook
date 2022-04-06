import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ComponentExampleProps {}

const StyledComponentExample = styled.div`
  color: pink;
`;

export function ComponentExample(props: ComponentExampleProps) {
  return (
    <StyledComponentExample>
      <h1>Welcome to ComponentExample!</h1>
    </StyledComponentExample>
  );
}

export default ComponentExample;

