import React from 'react';
import MuiTabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import SchoolIcon from '@material-ui/icons/School';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';

const ITEMS = [
    {
        value: 'courses',
        label: 'کلاس های من',
        icon: SchoolIcon,
    },
    {
        value: 'calendar',
        label: 'در یک نگاه',
        icon: CastForEducationIcon,
    },
];

const Tabs = (props) => {

    const {
        classes,
        location,
    } = props;

    const activeItem = ITEMS.find(item => {
        return location.pathname.indexOf(`/${item.value}`) >= 0;
    });
    let activeTab = false;
    if (activeItem) {
        activeTab = activeItem.value;
    }

    return (
        <Paper className={classes.root}>
            <MuiTabs
                value={activeTab}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
            >
                {
                    ITEMS.map(item => {

                        const Icon = item.icon;

                        return (
                            <Tab
                                key={item.value}
                                value={item.value}
                                icon={<Icon/>}
                                label={item.label}
                            />
                        );
                    })
                }
            </MuiTabs>
        </Paper>
    );
}

export default Tabs;