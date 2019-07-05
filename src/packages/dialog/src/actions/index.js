import TYPES from '../types';

export const open = (name, props) => ({
    type: TYPES.OPEN,
    name,
    props,
});

export const close = (name) => ({
    type: TYPES.CLOSE,
    name,
});

export const set = (name, props) => ({
    type: TYPES.SET,
    name,
    props,
});
