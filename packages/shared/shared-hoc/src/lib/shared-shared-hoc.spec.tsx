import { render } from '@testing-library/react';

import SharedSharedHoc from './shared-shared-hoc';

describe('SharedSharedHoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedSharedHoc />);
    expect(baseElement).toBeTruthy();
  });
});
