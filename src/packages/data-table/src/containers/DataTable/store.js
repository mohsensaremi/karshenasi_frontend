import {connect} from "react-redux";

export default connect(
    (state, {titleBody2Ref}) => ({
        titleBody2Ref: titleBody2Ref || state.globalRef.portalTitleBody2,
    }),
);
