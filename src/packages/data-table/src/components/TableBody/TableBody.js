import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const EnhancedTableBody = (props) => {

    const {
        classes,
        data,
        columns,
    } = props;

    return (
        <TableBody>
            {
                data.map((n, index) => {

                    return (
                        <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={n.id}
                            className={index % 2 === 1 && classes.greyRow}
                        >
                            {
                                columns.map(c => (
                                    <TableCell key={c.name}>
                                        {
                                            typeof c.render === 'function' ?
                                                c.render(n) :
                                                n[c.name]
                                        }
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    );
                })}
        </TableBody>
    );
};

EnhancedTableBody.propTypes = {};

export default EnhancedTableBody;
