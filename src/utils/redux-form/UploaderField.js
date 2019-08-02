import {UploaderField} from 'packages/uploader';
import createComponent from './create-component'

const emptyArray = [];

export default createComponent(UploaderField, ({
    componentProps,
    input: {value, ...inputProps},
    ...props
}) => {
    return {
        ...props,
        ...componentProps,
        ...inputProps,

        value: Array.isArray(value) ? value : emptyArray,
    };
});
