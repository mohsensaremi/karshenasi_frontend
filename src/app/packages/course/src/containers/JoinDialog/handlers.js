import {withHandlers} from "recompose";
import debounce from "lodash/debounce";

export default withHandlers({
    onSubmit: ({postHttp, onClose, onSuccess}) => (data) => {
        return postHttp('/course/submit', data).then(res => {
            onClose();
            if (typeof onSuccess === 'function') {
                onSuccess(res.data.data);
            }
        });
    },
    onChangeInput: (props) => (event) => {
        const {setInput} = props;
        const value = event.target.value;
        setInput(value);
        setStateDebounced(value, props);
    },
});

const setStateDebounced = debounce((value, {sendSearchFetch}) => {
    sendSearchFetch(value);
}, 500);
