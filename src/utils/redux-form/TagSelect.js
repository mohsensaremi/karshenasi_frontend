import TagSelect from 'util/components/TagSelect';
import createComponent from './create-component'

const emptyArray = [];

export default createComponent(TagSelect, ({
                                               componentProps,
                                               input: {value, ...inputProps},
                                               ...props
                                           }) => {
    const {single} = props;

    return {
        ...props,
        ...componentProps,
        ...inputProps,
        value: single ?
            (value !== '' ? [value] : emptyArray) :
            (Array.isArray(value) ? value : emptyArray),
    };
});