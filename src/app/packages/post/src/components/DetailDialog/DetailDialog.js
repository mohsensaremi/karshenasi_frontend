import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Avatar from '@material-ui/core/Avatar';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const DetailDialog = (props) => {

    const {
        classes,
        title,
        files,
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
                paperScrollPaper: classes.paperScrollPaper,
            }}
        >
            <DialogContent className={classes.dialogContent}>
                <Typography className={classes.title} variant="h1">{title}</Typography>
                <Typography className={classes.content}>{content}</Typography>
                {
                    Array.isArray(files) && (
                        <List>
                            {
                                files.map((file, index) => {
                                    return (
                                        <ListItem
                                            button
                                            component={"a"}
                                            href={file.url}
                                            target={"_blank"}
                                            key={index}
                                            className={classes.listItem}
                                        >
                                            <ListItemIcon>
                                                <Avatar>
                                                    <InsertDriveFileIcon/>
                                                </Avatar>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={file.fileName}
                                            />
                                        </ListItem>
                                    );
                                })
                            }
                        </List>
                    )
                }
            </DialogContent>
        </Dialog>
    );
}

export default DetailDialog;
