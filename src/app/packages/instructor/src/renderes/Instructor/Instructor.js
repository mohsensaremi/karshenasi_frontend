import React from 'react';
import Loading1 from 'packages/loading/src/components/Loading1';
import InstructorContainer from '../../containers/Instructor';

const Instructor = (props) => {

    const {
        fetch,
    } = props;

    if (fetch.pending) {
        return (
            <Loading1/>
        )
    } else if (fetch.rejected) {
        console.log(fetch);
        return null;
    } else if (fetch.fulfilled) {
        return <InstructorContainer data={fetch.value.data}/>
    }

    return null;
};

export default Instructor;