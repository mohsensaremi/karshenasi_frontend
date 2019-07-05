import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const List = (props) => {

    const {
        classes,
        listFetch,
        data,
    } = props;
    console.log("props", props);

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
                            >
                                اولین کلاس خود را بسازید
                            </Button>
                        </Typography>
                    ) : (
                        data.map(item => {

                            return (
                                <div key={item.id}>
                                    {item.title}
                                </div>
                            );
                        })
                    )
                )
            }
        </div>
    );
}

export default List;