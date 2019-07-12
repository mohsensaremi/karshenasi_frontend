import {withHandlers} from "recompose";

export default withHandlers({
    onSuccess: ({setLocalData}) => () => {
        setLocalData(x => ({
            ...x,
            userIsMember: true,
        }));
    },
});
