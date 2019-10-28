import {
    DatePicker,
} from "@material-ui/pickers";
import createComponent from './create-component';
import {dateFormat} from "../utils/locale";
import {injectIntl} from "react-intl";
import messages from 'i18n/messages/messages';

export default injectIntl(createComponent(DatePicker, ({
                                                           intl: {formatMessage},
                                                           componentProps,
                                                           input: {value, onChange},
                                                           ...props
                                                       }) => {
    return {
        clearable: true,
        autoOk: true,
        okLabel: formatMessage(messages.ok),
        cancelLabel: formatMessage(messages.cancel),
        clearLabel: formatMessage(messages.clear),
        ...componentProps,
        ...props,
        labelFunc: date => date && date.isValid() ? date.format(dateFormat) : "",
        onChange,
        value: value || null,
    };
}));
