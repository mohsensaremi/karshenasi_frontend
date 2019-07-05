import Checkbox from '@material-ui/core/Checkbox';
import createComponent from './create-component'

export default createComponent(Checkbox, ({
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