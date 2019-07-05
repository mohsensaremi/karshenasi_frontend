import InstagramInput from 'js/components/InstagramInput';
import createComponent from './create-component'

export default createComponent(InstagramInput, ({
    componentProps,
    input: {value, onChange},
    ...props
}) => {
    return {
        ...props,
        ...componentProps,
        onChange,
        value: Array.isArray(value) ? value : [],
    };
});