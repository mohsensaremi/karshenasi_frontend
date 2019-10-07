import SwitchField from 'js/components/SwitchField';
import createComponent from './create-component'

export default createComponent(SwitchField, ({
    componentProps,
    input: {value, ...inputProps},
    ...props
}) => {
    return {
        ...componentProps,
        ...inputProps,
        ...props,
        checked: !!value,
    };
});
