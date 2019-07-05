import React from 'react';
import Table from '../../components/Table';
import TableBody from '../../components/TableBody';
import Portal from "@material-ui/core/Portal";
import TextField from '@material-ui/core/TextField';

const DataTable = (props) => {

    const {
        tableFetch,
        settings,
        data,
        total,
        titleBody2Ref,
        searchInput,
        onChangeSearch,
        searchColumns,
        ...otherProps
    } = props;


    return (
        <React.Fragment>
            <Table
                total={total}
                loading={tableFetch.pending}
                {...otherProps}
                {...settings}
            >
                <TableBody
                    data={data}
                    {...otherProps}
                />
            </Table>
            {
                searchColumns && titleBody2Ref && (
                    <Portal
                        container={titleBody2Ref}
                    >
                        <TextField
                            value={searchInput}
                            onChange={onChangeSearch}
                            label={"جستجو"}
                        />
                    </Portal>
                )
            }
        </React.Fragment>
    )
};

export default DataTable;
