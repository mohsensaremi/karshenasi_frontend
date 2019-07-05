import CheckboxField from 'js/components/CheckboxField';
import createComponent from './create-component'

export default createComponent(CheckboxField, ({
    componentProps,
    input: {value, ...inputProps},
    ...props
}) => {
    return {
        ...componentProps,
        ...inputProps,
        ...props
        checked: !!value,
    };
});