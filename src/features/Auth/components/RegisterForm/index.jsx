import React from 'react';
import PropTypes from 'prop-types';
import InputField from './../../../../component/form-controls/InputFields/index';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { LockOutlined } from '@material-ui/icons';
import { makeStyles, Typography, LinearProgress } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import PasswordField from './../../../../component/form-controls/PasswordField/index';


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


RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};



function RegisterForm(props) {

    const classes = useStyles();

    const schema = yup.object().shape({
        fullname: yup
            .string()
            .required('Please enter your fullname')
            .test('should has at least two words', 'Pls enter at lease two words', value => {
                return value.split(' ').length >= 2;
            }),
        email: yup
            .string()
            .required('Pls enter your Email')
            .email('Pls enter valid Email address'),
        password: yup
            .string()
            .required('Pls enter your Password')
            .min(6, 'Pls enter at least six charater'),
        retypePassword: yup
            .string()
            .required('Pls retype your password.')
            .oneOf([yup.ref('password')], 'password does not match'),
    });

    const form = useForm({
        defaultValues: {
            fullname: '',
            email: '',
            password: '',
            retypePassword: '',
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
                Create an Account
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullname" form={form} label="Fullname" />
                <InputField name="email" form={form} label="Email" />
                <PasswordField name="password" form={form} label="Password" />
                <PasswordField name="retypePassword" form={form} label="Retype Password" />

                <Button size="large" disabled={isSubmitting} type="submit" fullWidth className={classes.submit} variant="contained" color="primary">
                    Create an account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;