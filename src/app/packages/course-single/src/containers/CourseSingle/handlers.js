import {withHandlers} from "recompose";
import merge from 'lodash/merge';

export default withHandlers({
    onSubmitSuccess: ({setData}) => (res) => {
        setData(data => merge(data, res.data));
    },
})