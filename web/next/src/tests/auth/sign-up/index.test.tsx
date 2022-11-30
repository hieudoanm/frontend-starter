import { render } from '@testing-library/react';
import SignUpPage from '../../../pages/auth/sign-up';

describe('SignUpPage', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(<SignUpPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
