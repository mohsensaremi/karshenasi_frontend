import React from 'react';
import MuiTabs from '@material-ui/core/Tabs';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import SchoolIcon from '@material-ui/icons/School';
import {Link} from 'react-router-dom';
import {injectIntl} from "react-intl";
import messages from 'i18n/messages/messages';

const ITEMS = [
    {
        value: 'fresh',
        icon: SchoolIcon,
    },
    {
        value: 'alert',
        icon: SchoolIcon,
    },
    {
        value: 'assignment',
        icon: SchoolIcon,
    },
    {
        value: 'attendance',
        icon: SchoolIcon,
    },
    {
        value: 'project',
        icon: SchoolIcon,
    },
    {
        value: 'grade',
        icon: SchoolIcon,
    },
];

const Tabs = (props) => {

    const {
        classes,
        match,
        activeTab,
        intl: {formatMessage},
    } = props;


    return (
        <MuiTabs
            value={activeTab}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            className={classes.root}
        >
            {
                ITEMS.map(item => {

                    const Icon = item.icon;

                    return (
                        <Tab
                            key={item.value}
                            value={item.value}
                            classes={{
                                root: classes.tab,
                            }}
                            component={Link}
                            to={`${match.url}/${item.value}`}
                            icon={<Icon className={classes.icon}/>}
                            label={(
                                <Grid container alignItems={"center"} justify={"center"}>
                                    {formatMessage(messages[item.value])}
                                </Grid>
                            )}
                        />
                    );
                })
            }
        </MuiTabs>
    );
};

export default injectIntl(Tabs);
