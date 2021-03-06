import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CustomTextField from './CustomTextField';
import { useStyles } from './useStyles';


export default function Login(props) {
    const classes = useStyles();
    const [error, setError] = useState(false);
    const { setSignUpSelected } = props;

    useEffect(() => {
        const hrefUrl = new URL(window.location.href)
        if (hrefUrl.searchParams.has('error')) {
            setError(true);
        }
    }, [error])

    return (
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign in
                </Typography>
                <form action='/login' method='POST' className={classes.form}>
                    {
                        error && 
                            <Grid container justify='center' alignContent='center'>
                                <Typography color='error'>Invalid e-mail address or password! 😰😰😰</Typography>
                            </Grid>
                    }
                    <CustomTextField
                        error={error}
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='username'
                        label='Email Address'
                        name='username'
                        autoComplete='email'
                        autoFocus
                    />
                    <CustomTextField
                        error={error}
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container justify='space-between'>
                        <Grid item>
                            <Link href='#' variant='body2' className={classes.link} onClick={setSignUpSelected}>
                                {'Don\'t have an account? Sign Up'}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href='/' variant='body2' className={classes.link}>
                                Home page
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Grid>
    );
}