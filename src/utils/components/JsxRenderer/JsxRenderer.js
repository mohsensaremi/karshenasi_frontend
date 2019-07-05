import React from 'react';
import JsxParser from 'react-jsx-parser';

const JsxRenderer = (props) => {

    const {
        jsx,
        components,
        ...otherProps
    }=props;

    return (
        <JsxParser
            components={{
                ...components,
            }}
            jsx={jsx}
            {...otherProps}
        />
    );
};

export default JsxRenderer;
