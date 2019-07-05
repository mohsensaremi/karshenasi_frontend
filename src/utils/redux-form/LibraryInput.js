import LibraryInput from 'js/components/LibraryInput';
import createComponent from './create-component'

export default createComponent(LibraryInput, ({
    componentProps,
    input: {value, onChange},
    ...props
}) => {
    const {maxCount} = props;
    return {
        ...props,
        ...componentProps,
        onChange,
        value: maxCount === 1 ?
            value instanceof Object ? value : null
            :
            Array.isArray(value) ? value : [],
    };
});