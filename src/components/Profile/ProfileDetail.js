import React,{useEffect, useState} from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch,useSelector } from "react-redux";
import * as Yup from 'yup';
require("yup-phone");
const initstate = {
    fullname:'',
    username:'',
    email:'',
    address:'',
    phone:''
}
function ProfileDetail(props) {
    const [user,setUser] = useState('')
    const { message } = useSelector(state => state.message);
    useEffect(() => {
        setUser(props.user)
    },[])
    const validationSchema = Yup.object().shape({
        fullname: Yup.string()
            .required('Fullname is required')
            .min(2, 'Fullname must be at least 2 characters')
            .max(40, 'Fullname must not exceed 40 characters'),
        username: Yup.string()
            .required('Username is required')
            .min(2, 'Username must be at least 2 characters')
            .max(20, 'Username must not exceed 20 characters'),
        email: Yup.string()
            .required('Username is required')
            .email('Email is invalid'),
        address: Yup.string()
            .required('Username is required')
            .min(5, 'Username must be at least 5 characters')
            .max(100, 'Username must not exceed 100 characters'),
        phone: Yup.string()
            .phone()
            .required('Username is required'),
      });
      const {
        register,
        control,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(validationSchema)
      });
      const onSubmit = data => {
          console.log(data)
        // dispatch(login(data.username, data.password))
        // .then(() => {
        //   props.history.push("/profile");
        //   window.location.reload();
        // })
        // .catch(() => {
        //   setLoading(false);
        // });
      };
    return (
        <>
            <Container component="main">
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
            }}
            >
            <Typography  variant="h2" color="secondary">
                Profile User
            </Typography>
            <Box component="form" noValidate sx={{ m: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={3}>
                        <Typography  variant="h5" color="secondary" align="center">
                           FullName :
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <TextField
                        margin="normal"
                        fullWidth
                        id="fullname"
                        name="fullname"
                        label={user.fullname}
                        {...register('fullname')}
                        error={errors.fullname ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                        {errors.fullname?.message}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={3}>
                        <Typography  variant="h5" color="secondary" align="center">
                           UserName :
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <TextField
                        margin="normal"
                        fullWidth
                        id="username"
                        name="username"
                        label={user.username}
                        {...register('username')}
                        error={errors.username ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                        {errors.username?.message}
                    </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={3}>
                        <Typography  variant="h5" color="secondary" align="center">
                           Email :
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        name="email"
                        label={user.email}
                        {...register('email')}
                        error={errors.email ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                        {errors.email?.message}
                    </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={3}>
                        <Typography  variant="h5" color="secondary" align="center">
                           Address :
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <TextField
                        margin="normal"
                        fullWidth
                        id="address"
                        name="address"
                        label={user.address}
                        {...register('address')}
                        error={errors.address ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                        {errors.address?.message}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={3}>
                        <Typography  variant="h5" color="secondary" align="center">
                           Phone :
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <TextField
                        margin="normal"
                        fullWidth
                        id="phone"
                        name="phone"
                        label={user.phone}
                        align="right"
                        {...register('phone')}
                        error={errors.phone ? true : false}
                        />
                        <Typography variant="inherit" color="textSecondary">
                        {errors.phone?.message}
                        </Typography>
                    </Grid>
                </Grid>
                <Button
                type="button"
                variant="contained"
                size="nomarl"
                color="secondary"
                sx={{ mt: 3, ml: 50,}}
                onClick={handleSubmit(onSubmit)}
                >
                Chỉnh sửa
                </Button>
                <Grid container>
                </Grid>
            </Box>
            </Box>
        </Container>
        </>
    );
}

export default ProfileDetail;