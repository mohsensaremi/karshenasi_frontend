import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SubmitDialog from '../../containers/SubmitDialog';
import JoinDialog from '../../containers/JoinDialog';
import Item from '../../containers/Item';
import Loading1 from 'packages/loading/src/components/Loading1';

const List = (props) => {

    const {
        classes,
        listFetch,
        data,
        openSubmitDialog,
        openJoinDialog,
        onChangeSearch,
        searchInput,
        onNextPage,
        hasNext,
        onSubmitSuccess,
        isInstructor,
    } = props;

    return (
        <div className={classes.root}>
            <div className={classes.toolbar}>
                <Grid container spacing={1} alignItems={"center"} justify={"space-between"}>
                    <Grid item>
                        <TextField
                            label={"جستجو"}
                            onChange={onChangeSearch}
                            value={searchInput}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant={"contained"}
                            color={"primary"}
                            onClick={() => isInstructor ? openSubmitDialog({}) : openJoinDialog()}
                        >
                            {isInstructor ? "کلاس جدید" : "عضویت در کلاس"}
                        </Button>
                    </Grid>
                </Grid>
            </div>
            <Grid container spacing={2}>
                {
                    data.map(item => {

                        return (
                            <Grid
                                item
                                xs={12}
                                md={6}
                                key={item.id}
                            >
                                <Item
                                    data={item}
                                    classes={{
                                        root: classes.item,
                                    }}
                                    openSubmitDialog={openSubmitDialog}
                                />
                            </Grid>
                        );
                    })
                }
            </Grid>
            {
                listFetch.pending && (
                    <Loading1/>
                )
            }
            {
                hasNext && (
                    <Button
                        fullWidth
                        onClick={onNextPage}
                        disabled={listFetch.pending}
                        color={"primary"}
                        className={classes.button}
                    >
                        بیشتر
                    </Button>
                )
            }
            <SubmitDialog
                onSuccess={onSubmitSuccess}
            />
            <JoinDialog/>
        </div>
    );
}

export default List;