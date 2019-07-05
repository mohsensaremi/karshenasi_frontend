import ScoreInput from 'util/components/ScoreInput';
import createComponent from './create-component';
import isNumber from 'lodash/isNumber';

export default createComponent(ScoreInput, ({
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