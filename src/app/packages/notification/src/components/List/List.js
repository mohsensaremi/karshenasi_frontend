import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Item from '../../containers/Item';
import Loading1 from "packages/loading/src/components/Loading1";
import {injectIntl} from "react-intl";
import messages from 'i18n/messages/messages';

const List = (props) => {

    const {
        classes,
        data,
        listFetch,
        onNextPage,
        hasNext,
        onClose,
        setCount,
        intl: {formatMessage},
    } = props;


    return (
        <React.Fragment>
            {
                data.map(item => {
                    return (
                        <Item
                            key={item.id}
                            data={item}
                            onClose={onClose}
                            setCount={setCount}
                        />
                    );
                })
            }
            {
                data.length === 0 && (
                    <Typography
                        className={classes.noData}
                    >
                        {formatMessage(messages.noDataFound)}
                    </Typography>
                )
            }
            {
                listFetch.pending && (
                    <Loading1/>
                )
            }
            {
                hasNext && (
                    <Button
                        fullWidth
                        onClick={onNextPage}
                        disabled={listFetch.pending}
                        color={"primary"}
                        className={classes.button}
                    >
                        {formatMessage(messages.loadMore)}
                    </Button>
                )
            }
        </React.Fragment>
    );
};

export default injectIntl(List);
