export default (props) => {

    const {
        postHttp,
        setItem,
        change,
    } = props;

    const onSubmit = (data) => {
        return postHttp('/update-profile', data).then((res) => {
            if (res.data) {
                setItem("me", res.data.data);
                change("password","");
                change("passwordConfirmation","");
                change("oldPassword","");
            }
        })
    };

    return {
        onSubmit,
    };
}
