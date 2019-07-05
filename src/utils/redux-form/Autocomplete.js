import Autocomplete from 'js/components/Autocomplete';
import createComponent from './create-component'

export default createComponent(Autocomplete, ({
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