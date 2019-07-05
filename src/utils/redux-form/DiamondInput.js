import DiamondInput from 'util/components/DiamondInput';
import createComponent from './create-component';
import isNumber from 'lodash/isNumber';

export default createComponent(DiamondInput, ({
    componentProps,
    input: {value, ...inputProps},
    ...props
}) => {
    return {
        ...props,
        ...componentProps,
        ...inputProps,
        value: isNumber(value) ? value : undefined,
    };
});
