import { render } from '@testing-library/react';

import ComponentExample from './component-example';

describe('ComponentExample', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentExample />);
    expect(baseElement).toBeTruthy();
  });
});
