import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SubmitDialog from '../../containers/SubmitDialog';

const List = (props) => {

    const {
        classes,
        listFetch,
        listFetchFn,
        data,
        openSubmitDialog,
    } = props;

    return (
        <div className={classes.root}>
            {
                listFetch.pending ? (
                    <div className={classes.loading}>
                        <CircularProgress/>
                    </div>
                ) : (
                    data.length === 0 ? (
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
                            <Button
                                variant={"contained"}
                                color={"primary"}
                                onClick={() => openSubmitDialog({})}
                            >
                                کلاس جدید
                            </Button>
                            {
                                data.map(item => {

                                    return (
                                        <div key={item.id}>
                                            {item.title}
                                        </div>
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