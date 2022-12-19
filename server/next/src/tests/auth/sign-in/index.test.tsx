import { render } from '@testing-library/react';
import SignInPage from '../../../pages/auth/sign-in';

describe('SignInPage', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(<SignInPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
