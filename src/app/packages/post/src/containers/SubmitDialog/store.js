import {connect} from "react-redux";
import {formValueSelector} from 'redux-form';

const selector = formValueSelector("post");

export default connect(
    state => ({
        type: state.globalState.get('courseActiveTab'),
        courseId: state.globalState.get('courseId'),
        postId: selector(state, "id"),
        isEdit: !!selector(state, "id"),
    }),
)
