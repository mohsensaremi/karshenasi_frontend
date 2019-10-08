import React from 'react';

export default (hooks) => (WrappedComponent) => {

    return (props) => {
        const hookProps = hooks(props);

        return (
            <WrappedComponent
                {...props}
                {...hookProps}
            />
        );
    }
}
