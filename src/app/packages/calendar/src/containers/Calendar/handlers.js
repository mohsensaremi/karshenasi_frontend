import {withHandlers} from "recompose";

export default withHandlers({
    nextMonth: ({fetch, setStateMonth}) => () => {
        setStateMonth(fetch.value.nextMonth);
    },
    prevMonth: ({fetch, setStateMonth}) => () => {
        setStateMonth(fetch.value.prevMonth);
    },
})