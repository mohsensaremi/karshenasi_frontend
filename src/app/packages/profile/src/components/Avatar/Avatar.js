import React from 'react';
import MuiAvatar from "@material-ui/core/Avatar";
import classnames from 'classnames';

const Avatar = (props) => {

    const {
        classes,
        me,
        className,
        ...otherProps
    } = props;

    const avatarProps = {};
    if (me.getIn(["avatar","url"])) {
        avatarProps.src = me.getIn(["avatar","url"]);
        avatarProps.alt = `${me.get('firstName')[0]} ${me.get('lastName')[0]}`;
    } else {
        avatarProps.children = `${me.get('firstName')[0]} ${me.get('lastName')[0]}`;
    }

    return (
        <MuiAvatar
            className={classnames(classes.root, className)}
            {...avatarProps}
            {...otherProps}
        />
    );
};

export default Avatar;
