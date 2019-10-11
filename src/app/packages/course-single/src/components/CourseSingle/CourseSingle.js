import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import SchoolIcon from '@material-ui/icons/School';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Collapse from '@material-ui/core/Collapse';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import SubmitDialog from "app/packages/course/src/containers/SubmitDialog";
import pick from 'lodash/pick';
import Tabs from '../../containers/Tabs';
import PostList from 'app/packages/post/src/containers/List';
import {SetGlobalState} from 'packages/global-state';
import {injectIntl} from "react-intl";
import messages from 'i18n/messages/messages';
import Members from "../../containers/Members";

const CourseSingle = (props) => {

    const {
        classes,
        title,
        user,
        me,
        onSubmitSuccess,
        openSubmitDialog,
        data,
        match,
        activeTab,
        isOwner,
        intl: {formatMessage},
    } = props;

    const [detailExpand, setDetailExpand] = useState(false);

    return (
        <React.Fragment>
            <SetGlobalState
                itemKey={"courseId"}
                itemValue={data.id}
                shouldUpdate
            />
            <SetGlobalState
                itemKey={"courseUserId"}
                itemValue={data.userId}
                shouldUpdate
            />
            <Paper className={classes.header}>
                <Grid container spacing={1} alignItems={"center"} justify={"space-between"}>
                    <Grid item>
                        <Typography variant="h1" component={Grid} container alignItems={"center"}>
                            <SchoolIcon fontSize={"inherit"} className={classes.titleIcon}/>
                            {title}
                            {
                                me.get('id') === user.id && (
                                    <div className={classes.actions}>
                                        <IconButton
                                            size={"small"}
                                            onClick={() => openSubmitDialog(pick(data, ['id', 'title', 'hasPassword']))}
                                        >
                                            <EditIcon/>
                                        </IconButton>
                                        <IconButton
                                            size={"small"}
                                        >
                                            <DeleteIcon/>
                                        </IconButton>
                                    </div>
                                )
                            }
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={1} alignItems={"center"}>
                            <IconButton
                                onClick={() => setDetailExpand(x => !x)}
                            >
                                <ExpandMoreIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Collapse in={detailExpand}>
                    {
                        isOwner ? (
                            <Members
                                classes={{
                                    table: classes.table,
                                }}
                            />
                        ) : (
                            <table className={`table table-bordered table-hover ${classes.table}`}>
                                <tr>
                                    <td>
                                        <Typography className={classes.tableTitle}>
                                            {formatMessage(messages.instructor)}
                                        </Typography>
                                    </td>
                                    <td>
                                        <Typography
                                            component={Link}
                                            to={`/instructor/${user.id}`}
                                        >
                                            <Grid container alignItems={"center"}>
                                                <Avatar
                                                    className={classes.avatar}
                                                >
                                                    {`${user.firstName[0]} ${user.lastName[0]}`}
                                                </Avatar>
                                                <Typography
                                                    className={classes.userName}
                                                    display={"inline"}
                                                >
                                                    {`${user.firstName} ${user.lastName}`}
                                                </Typography>
                                            </Grid>
                                        </Typography>
                                    </td>
                                </tr>
                            </table>
                        )
                    }
                </Collapse>
                <div className={classes.tabWrapper}>
                    <Tabs/>
                </div>
            </Paper>
            <Switch>
                <Route
                    key={activeTab}
                    path={`${match.url}/:type(fresh|alert|assignment|attendance|project|grade)`}
                    excat
                    component={PostList}
                />
                <Redirect
                    to={`${match.url}/fresh`}
                />
            </Switch>
            <SubmitDialog
                onSuccess={onSubmitSuccess}
            />
        </React.Fragment>
    );
};

export default injectIntl(CourseSingle);
