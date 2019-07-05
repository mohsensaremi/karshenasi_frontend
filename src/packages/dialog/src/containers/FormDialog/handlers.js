import {withHandlers} from "recompose";

export default withHandlers({
    onEnter: ({initialize, initialValues}) => () => {
        if (initialValues) {
            initialize(initialValues);
        }
    },
})
