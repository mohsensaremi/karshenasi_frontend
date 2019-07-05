import Radio from '@material-ui/core/Radio';
import createComponent from './create-component'

export default createComponent(Radio, ({
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
