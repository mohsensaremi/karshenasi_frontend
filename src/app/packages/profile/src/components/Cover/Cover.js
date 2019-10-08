import React from 'react';
import classnames from 'classnames';

const Cover = (props) => {

    const {
        classes,
        me,
        className,
        ...otherProps
    } = props;

    const style = {};
    if (me.getIn(["cover", "0", "url"])) {
        style.backgroundImage = `url('${me.getIn(["cover", "0", "url"])}')`;
    }

    console.log("style", style);

    return (
        <div
            className={classnames(classes.root, className)}
            {...otherProps}
        >
            <div
                className={classes.image}
                style={style}
            />
            <div
                className={classes.overlay}
            />
        </div>
    );
};

export default Cover;
