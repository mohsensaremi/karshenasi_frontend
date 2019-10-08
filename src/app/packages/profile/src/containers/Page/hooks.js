import {useDialog} from 'packages/dialog';
import axios from "axios";

export default (props) => {

    const {
        postHttp,
        setItem,
        change,
    } = props;

    const [openDialog] = useDialog();

    const onSubmit = (data) => {
        return postHttp('/update-profile', data).then((res) => {
            if (res.data) {
                setItem("me", res.data.data);
                change("password", "");
                change("passwordConfirmation", "");
                change("oldPassword", "");
            }
        });
    };

    const onSubmitAvatarOrCover = (blob, url) => {
        const fd = new FormData();
        fd.append('file', blob);
        return postHttp('/upload/tmp', fd).then(res => {
            if (res.data) {
                return postHttp(url, {
                    files: [res.data.data],
                }).then((res) => {
                    if (res.data) {
                        setItem("me", res.data.data);
                    }
                    return res;
                });
            }
        });
    };

    const onSubmitAvatar = (blob, {onClose}) => {
        if (blob) {
            return onSubmitAvatarOrCover(blob, '/update-avatar').then((res) => {
                if (res && res.data) {
                    onClose();
                }
            });
        }
    };

    const onSubmitCover = (blob, {onClose}) => {
        if (blob) {
            return onSubmitAvatarOrCover(blob, '/update-cover').then((res) => {
                if (res && res.data) {
                    onClose();
                }
            });
        }
    };

    const openCropperDialogAvatar = () => openDialog('cropper', {
        onSubmit: onSubmitAvatar,
        cropperOptions: {
            aspectRatio: 1,
        },
    });
    const openCropperDialogCover = () => openDialog('cropper', {
        onSubmit: onSubmitCover
    });

    return {
        onSubmit,
        openCropperDialogAvatar,
        openCropperDialogCover,
    };
}
