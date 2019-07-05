import {
    DatePicker,
} from "material-ui-pickers";
import createComponent from './create-component';
import moment from "moment";

const defaultValue = moment();

export default createComponent(DatePicker, ({
                                                componentProps,
                                                input: {value, onChange},
                                                ...props
                                            }) => {
    return {
        clearable: true,
        autoOk: true,
        okLabel: "تأیید",
        cancelLabel: "لغو",
        clearLabel: "پاک کردن",
        ...componentProps,
        ...props,
        labelFunc: date => date && date.isValid() ? date.format("jYYYY/jMM/jDD") : "",
        onChange,
        value: value || null,
    };
});
