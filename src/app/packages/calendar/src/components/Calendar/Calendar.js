import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import ErrorIcon from '@material-ui/icons/Error';
import HelpIcon from '@material-ui/icons/Help';
import classnames from 'classnames';

const Calendar = (props) => {

    const {
        classes,
        fetch,
        nextMonth,
        prevMonth,
    } = props;

    return (

        <div className={classes.root}>
            <div className={classes.header}>
                <Grid container spacing={1} alignItems="center" justify={"space-between"}>
                    <Grid item>
                        <IconButton
                            onClick={prevMonth}
                            disabled={!fetch.fulfilled}
                        >
                            <ChevronRightIcon/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Typography variant={"h1"}>
                            {
                                fetch.fulfilled && (
                                    fetch.value.data.monthName
                                )
                            }
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton
                            onClick={nextMonth}
                            disabled={!fetch.fulfilled}
                        >
                            <ChevronLeftIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
            <table className={"table table-bordered"}>
                <tbody>
                {
                    [0, 1, 2, 3, 4].map(row => {

                        return (
                            <tr key={row}>
                                {
                                    [0, 1, 2, 3, 4, 5, 6].map(col => {
                                        let data = null;
                                        if (fetch.fulfilled) {
                                            data = fetch.value.data.data[row][col];
                                        }

                                        return (
                                            <td key={col} className={classes.tr}>
                                                {
                                                    data && data.day > 0 && (
                                                        <React.Fragment>
                                                            <Typography className={classes.day}>
                                                                {data.day}
                                                            </Typography>
                                                            <div className={classes.eventsWrapper}>
                                                                {
                                                                    data.alert1 && (
                                                                        <Tooltip title={"امتحان سیگنال سیستم"}>
                                                                            <ErrorIcon
                                                                                className={classnames(classes.icon, classes.iconAlert1)}
                                                                            />
                                                                        </Tooltip>
                                                                    )
                                                                }
                                                                {
                                                                    data.alert2 && (
                                                                        <Tooltip title={"تکلیف آزمایشگاه سبستم عامل"}>
                                                                            <HelpIcon
                                                                                className={classnames(classes.icon, classes.iconAlert2)}
                                                                            />
                                                                        </Tooltip>
                                                                    )
                                                                }
                                                                {
                                                                    data.alert3 && (
                                                                        <Tooltip title={"تحویل پروژه معماری کامپیوتر"}>
                                                                            <ErrorIcon
                                                                                className={classnames(classes.icon, classes.iconAlert3)}
                                                                            />
                                                                        </Tooltip>
                                                                    )
                                                                }
                                                            </div>
                                                        </React.Fragment>
                                                    )
                                                }
                                            </td>
                                        );
                                    })
                                }
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </div>
    );

    return null;

};

export default Calendar;