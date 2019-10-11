import * as React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {
    usePopupState,
    bindTrigger,
    bindMenu,
} from 'material-ui-popup-state/hooks'

const MenuPopupState = (props) => {

    const {
        component: Component,
        children,
        items,
        menuStart,
        menuEnd,
        menuProps,
        ...otherProps
    } = props;

    const popupState = usePopupState({variant: 'popover', popupId: 'demoMenu'})
    return (
        <React.Fragment>
            <Component variant="contained" {...bindTrigger(popupState)} {...otherProps}>
                {children}
            </Component>
            <Menu
                {...bindMenu(popupState)}
                {...menuProps}
            >
                {
                    menuStart && menuStart(popupState)
                }
                {
                    Array.isArray(items) && items.map((item, index) => {
                        return (
                            <MenuItem
                                key={index}
                                onClick={(e) => {
                                    popupState.close();
                                    item.onClick(e);
                                }}
                            >{item.label}</MenuItem>
                        );
                    })
                }
                {
                    menuEnd && menuEnd(popupState)
                }
            </Menu>
        </React.Fragment>
    )
};

MenuPopupState.defaultProps = {
    component: Button,
};

export default MenuPopupState
