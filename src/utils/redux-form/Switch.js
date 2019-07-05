import Switch from '@material-ui/core/Switch';
import createComponent from './create-component'

export default createComponent(Switch, ({
    componentProps,
    input: {value, ...inputProps},
    ...props
}) => {
    return {
        ...componentProps,
        ...inputProps,
        checked: !!value,
        ...props
    };
});