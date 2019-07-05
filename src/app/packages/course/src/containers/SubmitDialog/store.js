import {connect} from "react-redux";
import {formValueSelector} from "redux-form";

const selector = formValueSelector('course');

export default connect(
    state => ({
        hasPassword: selector(state, "hasPassword") || false,
    }),
)