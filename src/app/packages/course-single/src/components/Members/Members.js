import React from 'react';
import Loading1 from 'packages/loading/src/components/Loading1';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

const Members = (props) => {

    const {
        classes,
        fetch,
        extraBody,
        extraHead,
    } = props;

    if (fetch.pending) {
        return (
            <Loading1/>
        )
    } else if (fetch.rejected) {
        console.log(fetch);
        return null;
    } else if (fetch.fulfilled) {
        return (
            <div className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>نام</TableCell>
                            {
                                extraHead
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {fetch.value.data.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {`${row.firstName} ${row.lastName}`}
                                </TableCell>
                                {
                                    typeof extraBody === "function" && extraBody(row)
                                }
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }

    return null;
};

export default Members;
