import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import DeleteIcon from "@material-ui/icons/Delete";
import fileImage from 'img/file.png';

const Item = (props) => {

    const {
        classes,
        value,
        onDelete,
        progress,
    } = props;

    const progressProps = {};
    if (progress > 0 && progress < 100) {
        progressProps.variant = "determinate";
        progressProps.value = progress;
    }

    return (
        <div className={classes.root}>
            <img src={fileImage}
                 className={classes.image}
                 alt={"file"}
            />
            {
                value.uploading ? (
                    <div className={classes.progressWrapper}>
                        <CircularProgress size={25} {...progressProps}/>
                    </div>
                ) : (
                    <div className={classes.overlay}>
                        <DeleteIcon
                            className={classes.deleteIcon}
                            onClick={onDelete}
                        />
                    </div>
                )
            }
        </div>
    );
};

export default Item;
