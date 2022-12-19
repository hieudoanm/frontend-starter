import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { NextPage } from 'next';
import { FormEvent, useState } from 'react';

const SignInPage: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (event: FormEvent) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="w-screen h-screen">
      <div className="h-full container mx-auto px-8 md:px-16">
        <div className="w-full h-full flex justify-center items-center">
          <div className="max-w-md w-full shadow-2xl border rounded px-8 py-4 md:px-16 md:py-8">
            <form onSubmit={signIn}>
              <div className="mb-8">
                <h1 className="text-center uppercase text-4xl">Sign In</h1>
              </div>
              <div className="mb-8">
                <TextField
                  label="Email Address"
                  id="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full"
                  required
                />
              </div>
              <div className="mb-8">
                <TextField
                  type="password"
                  label="Password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full"
                  required
                />
              </div>
              <Button
                type="submit"
                variant="outlined"
                size="large"
                className="w-full"
              >
                Sign In
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
