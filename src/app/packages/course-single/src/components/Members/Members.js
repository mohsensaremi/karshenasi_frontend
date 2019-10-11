import React from 'react';
import Loading1 from 'packages/loading/src/components/Loading1';
import Typography from '@material-ui/core/Typography';
import {injectIntl} from "react-intl";
import messages from 'i18n/messages/messages';

const Members = (props) => {

    const {
        classes,
        fetch,
        extraBody,
        extraHead,
        intl: {formatMessage},
    } = props;

    if (fetch.pending) {
        return (
            <Loading1/>
        )
    } else if (fetch.rejected) {
        console.log(fetch);
        return null;
    } else if (fetch.fulfilled) {
        return (
            <div className={classes.root}>
                <table className={`table table-bordered table-hover ${classes.table}`}>
                    <thead>
                    <tr>
                        <td>
                            <Typography>
                                {formatMessage(messages.name)}
                            </Typography>
                        </td>
                        {
                            extraHead
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {fetch.value.data.map(row => (
                        <tr key={row.id}>
                            <td>
                                <Typography>
                                    {`${row.firstName} ${row.lastName}`}
                                </Typography>
                            </td>
                            {
                                typeof extraBody === "function" && extraBody(row)
                            }
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }

    return null;
};

export default injectIntl(Members);
