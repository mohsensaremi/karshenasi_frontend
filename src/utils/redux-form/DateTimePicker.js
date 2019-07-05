import {DateTimePicker} from 'material-ui-pickers';
import createComponent from './create-component';

export default createComponent(DateTimePicker, ({
    componentProps,
    input: {value, onBlur, ...inputProps},
    ...props
}) => {
    return {
        ...componentProps,
        ...inputProps,
        ...props
        value: value == '' ? new Date() : value,
    };
});