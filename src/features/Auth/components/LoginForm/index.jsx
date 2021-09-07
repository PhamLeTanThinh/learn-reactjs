import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../component/form-controls/InputFields/index';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { LockOutlined } from '@material-ui/icons';
import { makeStyles, Typography, LinearProgress } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import PasswordField from '../../../../component/form-controls/PasswordField/index';


const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(4),
        position: 'relative'

    },
    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
    },
    title: {
        textAlign: 'center',
        margin: theme.spacing(2, 0, 3, 0)

    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },

    progress: {
        position: 'absolute',
        top: theme.spacing(1),
        left: 0,
        right: 0,
    }
}))


LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};



function LoginForm(props) {

    const classes = useStyles();

    const schema = yup.object().shape({
        
        identifier: yup
            .string()
            .required('Pls enter your Email')
            .email('Pls enter valid Email address'),
        password: yup
            .string()
            .required('Pls enter your Password')
       
    });

    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values)
        }
    };

    const { isSubmitting } = form.formState;


    return (
        <div className={classes.root}>

            {isSubmitting && <LinearProgress className={classes.progress} />}

            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>
            <Typography className={classes.title} component="h3" variant="h5">
                Sign In
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="identifier" form={form} label="Email" />
                <PasswordField name="password" form={form} label="Password" />

                <Button size="large" disabled={isSubmitting} type="submit" fullWidth className={classes.submit} variant="contained" color="primary">
                    Sign In
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;