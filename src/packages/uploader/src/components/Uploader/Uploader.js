import React from 'react';
import Item from '../../containers/Item';
import Dropzone from 'react-dropzone';
import classnames from 'classnames';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Uploader = (props) => {

    const {
        classes,
        value,
        onChangeItem,
        onDropAccepted,
        getFileFromState,
        uploadHint,
        uploadButtonText,
        onChangeDelete,
        ...otherProps
    } = props;

    return (
        <Dropzone onDropAccepted={onDropAccepted} {...otherProps}>
            {({getRootProps, getInputProps}) => (
                <div
                    {...getRootProps()}
                    className={classnames(classes.root, {[classes.rootEmpty]: value.length === 0})}
                >
                    <input {...getInputProps()} />
                    {
                        value.length === 0 && (
                            <React.Fragment>
                                <Typography
                                    display={"inline"}
                                    className={classes.uploadHint}
                                >{uploadHint}</Typography>
                                <Button
                                    variant="outlined"
                                    className={classes.uploadButton}
                                    color="default"
                                >
                                    {uploadButtonText}
                                </Button>
                            </React.Fragment>
                        )
                    }
                    {
                        value.map((v) => {

                            return !v.deleted && (
                                <Item
                                    key={v.id || v.name}
                                    value={v}
                                    onChange={onChangeItem}
                                    onDelete={onChangeDelete}
                                    id={v.id || v.name}
                                    file={!v.name && v.id ? getFileFromState(v.id) : null}
                                />
                            );
                        })
                    }
                </div>
            )}
        </Dropzone>
    );
};

Uploader.defaultProps = {
    uploadHint: `برای آپلود فایل\nبه اینجا بکشید و رها کنید`,
    uploadButtonText: `انتخاب فایل`,
};

export default Uploader;
