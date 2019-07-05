import ChipInput from 'js/components/ChipInput';
import createComponent from './create-component'

export default createComponent(ChipInput, ({
    componentProps,
    input: {value,onChange},
    ...props
}) => {
    return {
        ...props,
        ...componentProps,
        onChange,
        value: Array.isArray(value) ? value : [],
    };
});