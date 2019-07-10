import {withHandlers} from "recompose";

export default withHandlers({
    nextMonth: ({fetch, setStateMonth}) => () => {
        setStateMonth(fetch.value.data.nextMonth);
    },
    prevMonth: ({fetch, setStateMonth}) => () => {
        setStateMonth(fetch.value.data.prevMonth);
    },
})