export const types = {
    OPEN: 'toast/open',
    CLOSE: 'toast/close',
};

export const actions = {
    open: (data) => ({
        type: types.OPEN,
        data,
    }),
    close: () => ({
        type: types.CLOSE,
    }),
};