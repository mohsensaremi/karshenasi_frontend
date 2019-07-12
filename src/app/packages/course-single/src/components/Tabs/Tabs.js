import React from 'react';
import MuiTabs from '@material-ui/core/Tabs';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import SchoolIcon from '@material-ui/icons/School';
import {Link} from 'react-router-dom';

const ITEMS = [
    {
        value: 'fresh',
        label: 'تاره ها',
        icon: SchoolIcon,
    },
    {
        value: 'alert',
        label: 'اطلاعیه ها',
        icon: SchoolIcon,
    },
    {
        value: 'assignment',
        label: 'تکالیف',
        icon: SchoolIcon,
    },
    {
        value: 'attendance',
        label: 'حضور و غیاب',
        icon: SchoolIcon,
    },
    {
        value: 'project',
        label: 'پروژه ها',
        icon: SchoolIcon,
    },
    {
        value: 'grade',
        label: 'لیست نمرات',
        icon: SchoolIcon,
    },
];

const Tabs = (props) => {

    const {
        classes,
        match,
        activeTab,
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
                            label={(
                                <Grid container alignItems={"center"} justify={"center"}>
                                    <Icon className={classes.icon}/>
                                    {item.label}
                                </Grid>
                            )}
                        />
                    );
                })
            }
        </MuiTabs>
    );
}

export default Tabs;