import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Form from '../../containers/Form';
import Avatar from '../../containers/Avatar';
import Cover from '../../containers/Cover';
import CropperDialog from '../../containers/CropperDialog';

const Page = (props) => {

    const {
        classes,
        openCropperDialogAvatar,
        openCropperDialogCover,
    } = props;

    return (
        <Paper>
            <Cover
                className={classes.cover}
                onClick={openCropperDialogCover}
            />
            <Grid
                container
                alignItems={'center'}
                justify={"center"}
                className={classes.avatarWrapper}
            >
                <Avatar
                    className={classes.avatar}
                    onClick={openCropperDialogAvatar}
                />
            </Grid>
            <Form/>
            <CropperDialog/>
        </Paper>
    );
};

export default Page;
