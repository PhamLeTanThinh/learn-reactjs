
import PropTypes from 'prop-types';
import React from 'react';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';


InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled } = props;
    const {errors, formState} = form;
    const hasError = errors[name];
    console.log(errors[name], formState.touched[name]);

    return (
        <Controller

            name={name}
            control={form.control}
            as={TextField}
            
            fullWidth
            label={label}
            disabled={disabled}
            variant="outlined"
            margin="normal"
                    
            error={!!hasError}
            helperText= {errors[name]?.message}
     />
    );
}

export default InputField;