import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SubmitDialog from '../../containers/SubmitDialog';
import SearchDialog from '../../containers/SearchDialog';
import JoinDialog from '../../containers/JoinDialog';
import Item from '../../containers/Item';
import Loading1 from 'packages/loading/src/components/Loading1';
import {injectIntl} from "react-intl";
import messages from 'i18n/messages/messages';
import capitalize from 'lodash/capitalize';

const List = (props) => {

    const {
        classes,
        listFetch,
        data,
        openSubmitDialog,
        openSearchDialog,
        onChangeSearch,
        searchInput,
        onNextPage,
        hasNext,
        onSubmitSuccess,
        isInstructor,
        showAddButton,
        settings,
        intl: {formatMessage},
        onDeleteSuccess,
    } = props;

    return (
        <div className={classes.root}>
            <div className={classes.toolbar}>
                <Grid container spacing={1} alignItems={"center"} justify={"space-between"}>
                    <Grid item>
                        <TextField
                            label={capitalize(formatMessage(messages.search))}
                            onChange={onChangeSearch}
                            value={searchInput}
                        />
                    </Grid>
                    {
                        showAddButton && (
                            <Grid item>
                                <Button
                                    variant={"contained"}
                                    color={"primary"}
                                    onClick={() => isInstructor ? openSubmitDialog({}) : openSearchDialog()}
                                >
                                    {isInstructor ? formatMessage(messages.newCourse) : formatMessage(messages.joinCourse)}
                                </Button>
                            </Grid>
                        )
                    }
                </Grid>
            </div>
            <Grid container spacing={2}>
                {
                    listFetch.fulfilled && data.length === 0 && !settings.searchState && (
                        <Grid item xs={12}>
                            <div
                                className={classes.hint}
                            >
                                <Typography align={"center"} color={"textSecondary"}>
                                    {
                                        isInstructor ? (
                                            capitalize(formatMessage(messages.dontHaveAnyCourse))
                                        ) : (
                                            capitalize(formatMessage(messages.dontJoinAnyCourse))
                                        )
                                    }
                                </Typography>
                                <Button
                                    variant={"contained"}
                                    color={"primary"}
                                    onClick={() => isInstructor ? openSubmitDialog({}) : openSearchDialog()}
                                    className={classes.hintButton}
                                >
                                    {isInstructor ? formatMessage(messages.newCourse) : formatMessage(messages.joinCourse)}
                                </Button>
                            </div>
                        </Grid>
                    )
                }
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
                                    onDeleteSuccess={() => onDeleteSuccess(item)}
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
                        {formatMessage(messages.loadMore)}
                    </Button>
                )
            }
            <SubmitDialog
                onSuccess={onSubmitSuccess}
            />
            <SearchDialog/>
            <JoinDialog
                onSuccess={onSubmitSuccess}
            />
        </div>
    );
};

List.defaultProps = {
    showAddButton: true,
};

export default injectIntl(List);
