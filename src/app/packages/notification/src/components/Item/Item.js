import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import {injectIntl} from "react-intl";
import messages from 'i18n/messages/messages';

const Item = (props) => {

    const {
        classes,
        intl: {formatMessage},
        notificationType,
        notificationId,
        notifiable,
        onClickPost,
    } = props;

    let jsx = null;

    if (notifiable) {
        switch (notificationType) {
            case "Post":
                jsx = (
                    <ListItem
                        button
                        className={classes.root}
                        onClick={onClickPost}
                    >
                        <ListItemText
                            className={classes.listItemText}
                            primary={notifiable.title}
                            secondary={notifiable.course && notifiable.course.title}
                        />
                    </ListItem>
                );
                break;
            default:
                jsx = (
                    <ListItem
                        className={classes.root}
                    >
                        <ListItemText
                            className={classes.listItemText}
                            primary={`${formatMessage(messages.unknownNotification)} ${notificationId}`}
                        />
                    </ListItem>
                );
        }
    }

    return jsx;
};

export default injectIntl(Item);
