import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import LinearProgress from '@material-ui/core/LinearProgress';
import Table from "../Table/Table";

const EnhancedTableHead = (props) => {

    const {
        order,
        orderBy,
        columns,
        onClickSort,
        loading,
    } = props;

    return (
        <TableHead>
            <TableRow>
                {columns.map(
                    row => (
                        <TableCell
                            key={row.name}
                            sortDirection={orderBy === row.name ? order : false}
                        >
                            {
                                row.sortable === false ? (row.label) : (
                                    <TableSortLabel
                                        active={orderBy === row.name}
                                        direction={order}
                                        onClick={onClickSort(row.name)}
                                    >
                                        {row.label}
                                    </TableSortLabel>
                                )
                            }
                        </TableCell>
                    ),
                    this,
                )}
            </TableRow>
            {
                loading && (
                    <tr>
                        <td colSpan={columns.length}>
                            <LinearProgress/>
                        </td>
                    </tr>
                )
            }
        </TableHead>
    );
};

EnhancedTableHead.propTypes = {
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
};

export default EnhancedTableHead;
