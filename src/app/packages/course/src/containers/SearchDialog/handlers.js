import {withHandlers} from "recompose";
import debounce from "lodash/debounce";

export default withHandlers({
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
