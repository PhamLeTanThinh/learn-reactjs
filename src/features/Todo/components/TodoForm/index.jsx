import React from 'react';
import PropTypes from 'prop-types';
import InputField from './../../../../component/form-controls/InputFields/index';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// import InputField from 'component/form-controls/InputFields/index';



TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};



function TodoForm(props) {

    const schema = yup.object().shape({
        title: yup.string().required('Pls enter title'),
      });
      
    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        console.log('TODO FORM: ', values);
        const {onSubmit} = props;
        if(onSubmit){
            onSubmit(values)
        }
        form.reset();
    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" form={form} label="Todo"/>
        </form>
    );
}

export default TodoForm;