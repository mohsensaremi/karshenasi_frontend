import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from 'utils/components/Link';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';
import {injectIntl} from "react-intl";
import messages from 'i18n/messages/messages';
import ButtonAlert from 'utils/components/ButtonAlert';

const Item = (props) => {

    const {
        classes,
        title,
        id,
        openSubmitDialog,
        data,
        me,
        userId,
        user,
        userIsMember,
        userIsOwner,
        isInstructor,
        openJoinDialog,
        onClickDelete,
        loading,
        intl: {formatMessage},
    } = props;

    return (
        <Paper className={classes.root}>
            <Typography className={classes.title}>
                {title}
                {
                    me.get('id') === userId && (
                        <React.Fragment>
                            <IconButton
                                size={"small"}
                                onClick={() => openSubmitDialog(data)}
                                disabled={loading}
                            >
                                <EditIcon/>
                            </IconButton>
                            <ButtonAlert
                                component={IconButton}
                                size={"small"}
                                onClick={onClickDelete}
                                disabled={loading}
                            >
                                <DeleteIcon/>
                            </ButtonAlert>
                        </React.Fragment>
                    )
                }
            </Typography>
            <Grid
                container
                alignItems={"center"}
                justify={"space-between"}
            >
                <Grid item>
                    {
                        user && (
                            <Grid container alignItems={"center"}>
                                <Avatar className={classes.userAvatar}>
                                    <FaceIcon/>
                                </Avatar>
                                <Typography
                                    className={classes.user}
                                    component={Link}
                                    to={`/instructor/${user.id}`}
                                >
                                    {`${user.firstName} ${user.lastName}`}
                                </Typography>
                            </Grid>
                        )
                    }
                </Grid>
                <Grid item>
                    {
                        userIsMember || userIsOwner ? (
                            <Button
                                color={"primary"}
                                variant={"outlined"}
                                component={Link}
                                to={`/course/${id}`}
                            >
                                {formatMessage(messages.enterCourse)}
                            </Button>
                        ) : !isInstructor && (
                            <Button
                                color={"primary"}
                                variant={"contained"}
                                onClick={openJoinDialog}
                            >
                                {formatMessage(messages.joinCourse)}
                            </Button>
                        )
                    }
                </Grid>
            </Grid>
        </Paper>
    );
};

export default injectIntl(Item);
