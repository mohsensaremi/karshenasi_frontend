import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import EnhancedTableHead from '../TableHead';

const EnhancedTable = (props) => {

    const {
        classes,
        order,
        orderBy,
        limit,
        skip,
        columns,
        total,

        onChangePage,
        onChangeRowsPerPage,
        onClickSort,
        loading,
        children,
    } = props;

    const page = Math.floor(skip / limit);

    return (
        <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
                <Table className={classes.table}>
                    <EnhancedTableHead
                        order={order}
                        orderBy={orderBy}
                        onClickSort={onClickSort}
                        rowCount={total}
                        columns={columns}
                        loading={loading}
                    />
                    {children}
                </Table>
            </div>
            <TablePagination
                rowsPerPageOptions={[5, 25, 50, 100]}
                component="div"
                count={total}
                rowsPerPage={limit}
                page={page}
                backIconButtonProps={{
                    'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page',
                }}
                onChangePage={onChangePage}
                onChangeRowsPerPage={onChangeRowsPerPage}
            />
        </Paper>
    );
};

EnhancedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default EnhancedTable;
