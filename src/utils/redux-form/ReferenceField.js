import {ReferenceField} from 'dashboard/packages/reference-field';
import createComponent from './create-component'

const emptyArray = [];

export default createComponent(ReferenceField, (
    {
        componentProps,
        input: {value, ...inputProps},
        ...props
    }
) => {

    return {
        ...props,
        ...componentProps,
        ...inputProps,
        value: props.multi ? Array.isArray(value) ? value : emptyArray : value,
    };
});