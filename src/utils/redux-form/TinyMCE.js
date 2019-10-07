import {Editor} from '@tinymce/tinymce-react';
import createComponent from './create-component';

export default createComponent(Editor, ({
    input:{onChange, value, ...otherInput},
    ...props
}) => {
    return {
        ...props,
        ...otherInput,
        value,
        onEditorChange: onChange,
    }
});
