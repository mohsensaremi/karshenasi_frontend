import React, {useMemo} from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuButton from 'utils/components/MenuButton';
import NotificationIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import List from '../../containers/List';

const Button = (props) => {

    const {
        classes,
        count,
        setCount,
    } = props;

    const menuProps = useMemo(() => ({
        classes: {
            list: classes.list,
        },
        MenuListProps: {
            disablePadding: true,
        },
        // anchorOrigin: {vertical: 'bottom', horizontal: 'left'},
    }), [classes]);

    return (
        <MenuButton
            component={IconButton}
            color={"inherit"}
            menuProps={menuProps}
            menuEnd={(popupState) => (
                <List
                    onClose={popupState.close}
                    setCount={setCount}
                />
            )}
        >
            <Badge badgeContent={count} color="secondary">
                <NotificationIcon/>
            </Badge>
        </MenuButton>
    );
};

export default Button;
