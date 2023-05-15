import { render } from '@testing-library/react';

import SharedSharedFnc from './shared-shared-fnc';

describe('SharedSharedFnc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedSharedFnc />);
    expect(baseElement).toBeTruthy();
  });
});
