import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Uploader from "../../containers/Uploader";

const UploaderField = (props) => {

    const {
        classes,
        className,
        formGroupProps,
        formLabelProps,
        label,
        ...otherProps
    } = props;

    return (
        <FormGroup className={className} {...formGroupProps}>
            <FormLabel className={classes.label} {...formLabelProps}>
                {label}
            </FormLabel>
            <Uploader
                {...otherProps}
            />
        </FormGroup>
    );
};

export default UploaderField;
