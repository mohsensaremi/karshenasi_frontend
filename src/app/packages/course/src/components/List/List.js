import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SubmitDialog from '../../containers/SubmitDialog';
import Item from '../../containers/Item';

const List = (props) => {

    const {
        classes,
        listFetch,
        listFetchFn,
        data,
        openSubmitDialog,
        onChangeSearch,
        searchInput,
    } = props;

    console.log("listFetch", listFetch);

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
                            onClick={() => openSubmitDialog({})}
                        >
                            کلاس جدید
                        </Button>
                    </Grid>
                </Grid>
            </div>
            {
                listFetch.pending ? (
                    <div className={classes.loading}>
                        <CircularProgress/>
                    </div>
                ) : (
                    !searchInput && data.length === 0 ? (
                        <Typography color={"textSecondary"} className={classes.hint}>
                            شما هیچ کلاسی ایجاد نکرده اید
                            <br/>
                            <Button
                                variant={"contained"}
                                color={"primary"}
                                className={classes.hintButton}
                                onClick={() => openSubmitDialog({})}
                            >
                                اولین کلاس خود را بسازید
                            </Button>
                        </Typography>
                    ) : (
                        <div>
                            {
                                data.map(item => {

                                    return (
                                        <Item
                                            key={item.id}
                                            data={item}
                                            classes={{
                                                root: classes.item,
                                            }}
                                        />
                                    );
                                })
                            }
                        </div>
                    )

                )
            }
            <SubmitDialog
                onSuccess={() => listFetchFn()}
            />
        </div>
    );
}

export default List;