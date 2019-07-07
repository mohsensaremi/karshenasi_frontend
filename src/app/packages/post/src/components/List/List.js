import React from 'react';
import {SetGlobalState} from 'packages/global-state';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Item from '../../containers/Item';
import SubmitDialog from '../../containers/SubmitDialog';

const List = (props) => {

    const {
        classes,
        match,
        data,
        openSubmitDialog,
        onChangeSearch,
        searchInput,
        onSubmitSuccess,
    } = props;


    return (
        <div className={classes.root}>
            <SetGlobalState
                itemKey={"courseActiveTab"}
                itemValue={match.params.type}
                shouldUpdate
            />
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
                            onClick={() => openSubmitDialog({})}
                        >
                            مطلب جدید
                        </Button>
                    </Grid>
                </Grid>
            </div>
            {
                data.map(item => {
                    return (
                        <Item
                            key={item.id}
                            data={item}
                            classes={{
                                root: classes.item,
                            }}
                            openSubmitDialog={openSubmitDialog}
                        />
                    );
                })
            }
            <SubmitDialog
                onSuccess={onSubmitSuccess}
            />
        </div>
    );
}

export default List;