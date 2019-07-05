import MultiSelectField from 'js/components/MultiSelectField';
import createComponent from './create-component'

export default createComponent(MultiSelectField, ({
    componentProps,
    input: {value, ...inputProps},
    ...props
}) => {
    return {
        ...props,
        ...componentProps,
        ...inputProps,
        value: Array.isArray(value) ? value : [],
    };
});