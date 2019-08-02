import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from 'utils/redux-form/TextField';
import Checkbox from 'utils/redux-form/Checkbox';
import UploaderField from 'utils/redux-form/UploaderField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Field} from "redux-form";
import Members from "app/packages/course-single/src/containers/Members";
import TableCell from '@material-ui/core/TableCell';

const SubmitDialog = (props) => {

    const {
        submitting,
        onSubmit,
        handleSubmit,
        open,
        onClose,
        type,
        tab,
        setTab,
        onEnter,
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
                                label={"اطلاعات کلی"}
                            />
                            <Tab
                                value={"members"}
                                label={"لیست دانشجویان"}
                            />
                        </Tabs>
                    )
                }
                <div style={{display: tab === "general" ? "block" : "none"}}>
                    <Field
                        component={TextField}
                        name={"title"}
                        margin={"normal"}
                        fullWidth
                        label={"عنوان"}
                        variant="outlined"
                    />
                    <Field
                        component={TextField}
                        name={"content"}
                        margin={"normal"}
                        fullWidth
                        label={"توضیحات"}
                        variant="outlined"
                        multiline
                        rows={10}
                    />
                    <Field
                        component={UploaderField}
                        name={"files"}
                        label={"فایل"}
                    />
                </div>
                <div style={{display: tab === "members" ? "block" : "none"}}>
                    <Members
                        extraHead={(
                            <TableCell>
                                {
                                    type === "attendance" ? "حاضز" : (
                                        type === "grade" ? "نمره" : ""
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
                                        />
                                    ) : (
                                        type === "grade" ? (
                                            <Field
                                                component={TextField}
                                                name={`grade[${row._id}]`}
                                                fullWidth
                                                variant="outlined"
                                            />
                                        ) : null
                                    )
                                }
                            </TableCell>
                        )}
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleSubmit(onSubmit)}
                    color="primary"
                    variant={"outlined"}
                    disabled={submitting}
                >
                    ثبت
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default SubmitDialog;
