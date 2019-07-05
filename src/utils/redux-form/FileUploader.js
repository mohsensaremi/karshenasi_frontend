import FileUploader from 'js/components/FileUploader';
import createComponent from './create-component';

export default createComponent(FileUploader, ({
    input:{onChange, value},
    ...props
}) => {
    return {
        ...props
        value: Array.isArray(value) ? value : [],
        onChange,
    }
});
