import {
    DateTimePicker,
} from "@material-ui/pickers";
import createComponent from './create-component';

export default createComponent(DateTimePicker, ({
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
        labelFunc: date => date && date.isValid() ? date.format("jYYYY/jMM/jDD H:m") : "",
        onChange,
        value: value || null,
    };
});
