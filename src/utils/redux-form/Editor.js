import Editor from 'dashboard/components/Editor/Editor';
import createComponent from './create-component'

export default createComponent(Editor, ({
    input:{onChange, value},
    ...props
}) => {
    return {
        ...props,
        value,
        onEditorChange: onChange,
    }
});
