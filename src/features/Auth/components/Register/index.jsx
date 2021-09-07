import React from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import RegisterForm from './../RegisterForm/index';
import { register } from './../../userSlice';
import { useSnackbar } from 'notistack';
import { PropTypes } from 'prop-types';

Register.propTypes = {
    closeDialog: PropTypes.func,
};

function Register(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {
        try {
            //auto set username = emaik
            values.username = values.email;

            console.log('Form Submit:', values)
            const action = register(values);
            const resultAction = await dispatch(action)
            unwrapResult(resultAction);

            //close dialog
            const { closeDialog } = props;
            if (closeDialog) {
                closeDialog();
            }
            //do st here on register successfully
            enqueueSnackbar('Reggister Successfully!!!', { variant: 'success' })
        } catch (error) {
            console.log('Failed to register', error);
            enqueueSnackbar(error.message, { variant: 'error' })
        }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;