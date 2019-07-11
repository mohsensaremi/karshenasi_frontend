import React from 'react';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

const DetailDialog = (props) => {

    const {
        classes,
        title,
        content,
        open,
        onClose,
    } = props;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
            classes={{
                paperScrollPaper:classes.paperScrollPaper,
            }}
        >
            <DialogContent className={classes.dialogContent}>
               <Typography className={classes.title} variant="h1">{title}</Typography>
               <Typography className={classes.content}>{content}</Typography>
            </DialogContent>
        </Dialog>
    );
}

export default DetailDialog;