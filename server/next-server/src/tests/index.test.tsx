import { render } from '@testing-library/react';
import HomePage from '../pages';

describe('HomePage', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(<HomePage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
