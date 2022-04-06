import { render } from '@testing-library/react';

import OtherComponent from './other-component';

describe('OtherComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OtherComponent />);
    expect(baseElement).toBeTruthy();
  });
});
