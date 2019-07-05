const defaultState = {
    open: false,
    onClose: () => null,
};

export const getDialog = (name) => (state) => {
    if (state.dialog[name]) {
        let result = {
            open: state.dialog[name].open
        };
        if (state.dialog[name].props) {
            result = {
                open: state.dialog[name].open,
                ...state.dialog[name].props,
            };
        }

        return result;
    }
    return defaultState;
};

export const getDialogOpen = (name) => {
    const dialogGetter = getDialog(name);
    return (state) => {
        return dialogGetter(state).open;
    };
};

export const getDialogProps = (name) => {
    const dialogGetter = getDialog(name);
    return (state) => {
        return dialogGetter(state).props;
    };
};
