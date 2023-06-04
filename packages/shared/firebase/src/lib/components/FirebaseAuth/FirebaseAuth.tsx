import { User } from 'firebase/auth';
import { useEffect } from 'react';
import { watchForUserData } from '../../utils/firebaseAuthUtils';
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';

interface FirebaseAuthProps {
  onChanged?: (user: User | null) => void;
}

export function FirebaseAuth({ onChanged }: FirebaseAuthProps) {
  useEffect(() => {
    watchForUserData((user) => {
      console.log('user => ', user);
      onChanged?.(user);
    });
    // TODO: Check is this realy needed, what will happen if onChanged is changed with render and called here whith empty dep array ([])
  }, [onChanged]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
          <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }}>
            Sign In
          </Button>
        </Box>
      </Box>
      {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
    </Container>
  );
}
