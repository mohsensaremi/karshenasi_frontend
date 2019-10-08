import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {open, close} from '../actions';

export function useDialog() {
    const dispatch = useDispatch();

    const openDialog = useCallback((...args) => {
        dispatch(open(...args));
    }, [dispatch]);

    const closeDialog = useCallback((...args) => {
        dispatch(close(...args));
    }, [dispatch]);

    return [openDialog, closeDialog];
}
