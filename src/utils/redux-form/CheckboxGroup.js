import CheckboxGroup from 'util/components/CheckboxGroup';
import createComponent from './create-component'

const emptyArray = [];

export default createComponent(CheckboxGroup, ({
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
