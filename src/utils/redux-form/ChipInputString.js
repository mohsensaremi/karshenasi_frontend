import ChipInputString from 'js/components/ChipInputString';
import createComponent from './create-component'

export default createComponent(ChipInputString, ({
    componentProps,
    input: {value, onChange},
    ...props
}) => {
    return {
        ...props,
        ...componentProps,
        onChange,
        value,
    };
});