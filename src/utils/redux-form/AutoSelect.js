import AutoSelect from 'js/modules/autocomplete/components/AutoSelect';
import createComponent from './create-component'

export default createComponent(AutoSelect, ({
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