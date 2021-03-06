import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {injectIntl} from "react-intl";
import messages from 'i18n/messages/messages';
import ButtonAlert from "utils/components/ButtonAlert/ButtonAlert";

const Item = (props) => {

    const {
        classes,
        title,
        onClickDetail,
        userId,
        openSubmitDialog,
        data,
        me,
        onClickDelete,
        loading,
        intl: {formatMessage},
    } = props;

    return (
        <Paper className={classes.root}>
            <Grid container spacing={1} alignItems={"center"} justify={"space-between"}>
                <Grid item>
                    <Typography>
                        {title}
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container spacing={1} alignItems={"center"}>
                        <Grid item>
                            <Button
                                color={"primary"}
                                variant={"outlined"}
                                onClick={onClickDetail}
                            >
                                {formatMessage(messages.details)}
                            </Button>
                        </Grid>
                        {
                            me.get('id') === userId && (
                                <Grid item>
                                    <IconButton
                                        size={"small"}
                                        onClick={() => openSubmitDialog(data)}
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
                                </Grid>
                            )
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default injectIntl(Item);
