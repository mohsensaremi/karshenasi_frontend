import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import {Uploader} from 'packages/uploader';
import messages from "i18n/messages/messages";
import {injectIntl} from "react-intl";
import {Field} from "redux-form";

const CropperDialog = (props) => {

    const {
        classes,
        open,
        onClose,
        reset,
        handleSubmit,
        submitting,
        onSelectImage,
        file,
        uploaderRef,
        setUploaderRef,
        intl: {formatMessage},
    } = props;

    return (
        <Dialog
            fullWidth
            maxWidth={"md"}
            open={open}
            onClose={onClose}
            onEnter={reset}
            classes={{
                paper: classes.dialogPaper,
            }}
        >
            <DialogContent
                classes={{
                    root: classes.dialogContent
                }}
            >
                {
                    file ? (
                        <img
                            src={file.preview}
                            id={file.id}
                            className={classes.image}
                        />
                    ) : (
                        <Uploader
                            value={[]}
                            classes={{
                                root: classes.uploader
                            }}
                            onChange={onSelectImage}
                            uploaderRef={setUploaderRef}
                            uploadHint={formatMessage(messages.uploadHint)}
                            uploadButtonText={formatMessage(messages.uploadButtonText)}
                        />
                    )
                }
            </DialogContent>
            <DialogActions>
                {
                    file && (
                        <Button
                            variant={"contained"}
                            color={"primary"}
                            onClick={() => {
                                uploaderRef.open();
                            }}
                            disabled={submitting}
                        >
                            {formatMessage(messages.uploadButtonText)}
                        </Button>
                    )
                }
                <Button
                    variant={"contained"}
                    color={"primary"}
                    onClick={handleSubmit}
                    disabled={submitting}
                >
                    {formatMessage(messages.submit)}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default injectIntl(CropperDialog);
