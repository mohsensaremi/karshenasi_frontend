import * as React from 'react'
import {Link as ReactRouterLink} from 'react-router-dom';
import {localQueryString} from 'utils/utils/locale';

const Link = (props) => {

    const {
        to,
        ...otherProps
    } = props;

    return (
        <ReactRouterLink
            to={`${to}${localQueryString}`}
            {...otherProps}
        />
    )
};

export default Link
