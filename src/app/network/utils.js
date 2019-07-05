export const getAccessToken = () => {
    return window.localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN_NAME);
};
