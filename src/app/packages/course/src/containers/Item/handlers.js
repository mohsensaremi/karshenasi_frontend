import {withHandlers} from "recompose";

export default withHandlers({
    onSuccess: ({setData}) => () => {
        setData(x => ({
            ...x,
            userIsMember: true,
        }));
    },
});
