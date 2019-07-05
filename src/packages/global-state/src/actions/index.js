export const types = {
    SET: 'globalState/set',
    UNSET: 'globalState/unset',
};

export const actions = {
    set: (key, value) => ({
        type: types.SET,
        key,
        value,
    }),
    unset: (key) => ({
        type: types.UNSET,
        key,
    }),
};