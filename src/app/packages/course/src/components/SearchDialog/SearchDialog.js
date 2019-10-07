import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Avatar from '@material-ui/core/Avatar';
import SchoolIcon from '@material-ui/icons/School';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogContent from '@material-ui/core/DialogContent';
import Loading from 'packages/loading/src/components/Loading1';
import {injectIntl} from "react-intl";
import messages from 'i18n/messages/messages';
import capitalize from 'lodash/capitalize';

const SearchDialog = (props) => {

    const {
        classes,
        open,
        onClose,
        input,
        onChangeInput,
        searchFetch,
        openJoinDialog,
        intl: {formatMessage},
    } = props;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="xs"
        >
            <DialogContent>
                <TextField
                    autoFocus
                    margin={"normal"}
                    fullWidth
                    label={capitalize(formatMessage(messages.searchCourseTitle))}
                    variant="outlined"
                    value={input}
                    onChange={onChangeInput}
                />
                <List component="nav" className={classes.results}>
                    {
                        searchFetch && (
                            searchFetch.pending ? (
                                <Loading/>
                            ) : (
                                searchFetch.fulfilled && (
                                    input && searchFetch.value.data.length === 0 ? (
                                        <Typography className={classes.notResult}>
                                            {formatMessage(messages.noDataFound)}
                                        </Typography>
                                    ) : (
                                        searchFetch.value.data.map(item => {
                                            return (
                                                <React.Fragment
                                                    key={item.id}
                                                >
                                                    <ListItem
                                                        button
                                                        onClick={() => {
                                                            onClose();
                                                            openJoinDialog(item);
                                                        }}
                                                    >
                                                        <Avatar className={classes.avatar}>
                                                            <SchoolIcon/>
                                                        </Avatar>
                                                        <ListItemText
                                                            primary={item.title}
                                                            secondary={`${item.user.firstName} ${item.user.lastName}`}
                                                        />
                                                    </ListItem>
                                                    <Divider/>
                                                </React.Fragment>
                                            );
                                        })
                                    )
                                )
                            )
                        )
                    }
                </List>
            </DialogContent>
        </Dialog>
    );
};

export default injectIntl(SearchDialog);
