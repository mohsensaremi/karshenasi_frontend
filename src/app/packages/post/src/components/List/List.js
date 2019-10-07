import React from 'react';
import {SetGlobalState} from 'packages/global-state';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Item from '../../containers/Item';
import SubmitDialog from '../../containers/SubmitDialog';
import DetailDialog from '../../containers/DetailDialog';
import Loading1 from "packages/loading/src/components/Loading1";
import {injectIntl} from "react-intl";
import messages from 'i18n/messages/messages';

const List = (props) => {

    const {
        classes,
        match,
        data,
        openSubmitDialog,
        onChangeSearch,
        searchInput,
        onSubmitSuccess,
        isOwner,
        settings,
        listFetch,
        onNextPage,
        hasNext,
        intl: {formatMessage},
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
                            label={formatMessage(messages.search)}
                            onChange={onChangeSearch}
                            value={searchInput}
                        />
                    </Grid>
                    <Grid item>
                        {
                            isOwner && (
                                <Button
                                    variant={"contained"}
                                    color={"primary"}
                                    onClick={() => openSubmitDialog({})}
                                >
                                    {formatMessage(messages.newPost)}
                                </Button>
                            )
                        }
                    </Grid>
                </Grid>
            </div>
            {
                listFetch.fulfilled && data.length === 0 && !settings.searchState && (
                    <Grid item xs={12}>
                        <div
                            className={classes.hint}
                        >
                            <Typography align={"center"} color={"textSecondary"}>
                                {
                                    isOwner ? (
                                        formatMessage(messages.notPostOwner)
                                    ) : (
                                        formatMessage(messages.notPostMember)
                                    )
                                }
                            </Typography>
                            {
                                isOwner && (
                                    <Button
                                        variant={"contained"}
                                        color={"primary"}
                                        onClick={() => openSubmitDialog({})}
                                        className={classes.hintButton}
                                    >
                                        {formatMessage(messages.newPost)}
                                    </Button>
                                )
                            }
                        </div>
                    </Grid>
                )
            }
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
            <DetailDialog/>
        </div>
    );
};

export default injectIntl(List);
