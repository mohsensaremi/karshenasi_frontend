import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from 'utils/redux-form/TextField';
import Switch from 'utils/redux-form/Switch';
import DateTimePicker from 'utils/redux-form/DateTimePicker';
import Checkbox from 'utils/redux-form/Checkbox';
import Uploader from 'utils/redux-form/Uploader';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Field} from "redux-form";
import Members from "app/packages/course-single/src/containers/Members";
import TableCell from '@material-ui/core/TableCell';
import {injectIntl} from "react-intl";
import messages from 'i18n/messages/messages';
import capitalize from 'lodash/capitalize';
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const SubmitDialog = (props) => {

    const {
        classes,
        submitting,
        onSubmit,
        handleSubmit,
        open,
        onClose,
        type,
        tab,
        setTab,
        onEnter,
        membersLoading,
        isEdit,
        intl: {formatMessage},
    } = props;


    return (
        <Dialog
            open={open}
            onClose={onClose}
            onEnter={onEnter}
            fullWidth
            maxWidth="sm"
        >
            <DialogContent>
                {
                    ["attendance", "grade"].includes(type) && (
                        <Tabs
                            value={tab}
                            onChange={(e, v) => setTab(v)}
                            variant="fullWidth"
                        >
                            <Tab
                                value={"general"}
                                label={formatMessage(messages.postSubmitDialogTabGeneral)}
                            />
                            <Tab
                                value={"members"}
                                label={formatMessage(messages.postSubmitDialogTabMembers)}
                            />
                        </Tabs>
                    )
                }
                <div style={{display: tab === "general" ? "block" : "none"}}>
                    {
                        ["project", "assignment"].includes(type) ? (
                            <Grid
                                spacing={3}
                                container
                            >
                                <Grid item xs={12} md={6}>
                                    <Field
                                        component={TextField}
                                        name={"title"}
                                        fullWidth
                                        label={capitalize(formatMessage(messages.title))}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Field
                                        component={DateTimePicker}
                                        name={"dueDate"}
                                        fullWidth
                                        label={capitalize(formatMessage(messages.dueDate))}
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        ) : (
                            <Field
                                component={TextField}
                                name={"title"}
                                margin={"normal"}
                                fullWidth
                                label={capitalize(formatMessage(messages.title))}
                                variant="outlined"
                            />
                        )
                    }
                    <Field
                        component={TextField}
                        name={"content"}
                        margin={"normal"}
                        fullWidth
                        label={capitalize(formatMessage(messages.content))}
                        variant="outlined"
                        multiline
                        rows={10}
                    />
                    <Field
                        component={Uploader}
                        name={"files"}
                        uploadHint={formatMessage(messages.uploadHint)}
                        uploadButtonText={formatMessage(messages.uploadButtonText)}
                    />
                </div>
                <div style={{display: tab === "members" ? "block" : "none"}}>
                    <Members
                        extraHead={(
                            <TableCell>
                                {
                                    type === "attendance" ? formatMessage(messages.postSubmitDialogAttendance) : (
                                        type === "grade" ? formatMessage(messages.postSubmitDialogGrade) : ""
                                    )
                                }
                            </TableCell>
                        )}
                        extraBody={row => (
                            <TableCell>
                                {
                                    type === "attendance" ? (
                                        <Field
                                            component={Checkbox}
                                            name={`attendance[${row._id}]`}
                                            disabled={membersLoading}
                                        />
                                    ) : (
                                        type === "grade" ? (
                                            <Field
                                                component={TextField}
                                                name={`grade[${row._id}]`}
                                                type={"number"}
                                                disabled={membersLoading}
                                                InputProps={{
                                                    endAdornment: membersLoading && (
                                                        <CircularProgress
                                                            size={20}
                                                        />
                                                    )
                                                }}
                                            />
                                        ) : null
                                    )
                                }
                            </TableCell>
                        )}
                    />
                </div>
            </DialogContent>
            <DialogActions
                classes={{
                    root: isEdit && classes.dialogActions,
                }}
            >
                {
                    isEdit && (
                        <FormGroup>
                            <FormControlLabel
                                control={(
                                    <Field
                                        component={Switch}
                                        name={"sendUpdateNotification"}
                                    />
                                )}
                                label={formatMessage(messages.sendUpdateNotification)}
                            />
                        </FormGroup>
                    )
                }
                <Button
                    onClick={handleSubmit(onSubmit)}
                    color="primary"
                    variant={"outlined"}
                    disabled={submitting}
                >
                    {formatMessage(messages.submit)}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default injectIntl(SubmitDialog);
