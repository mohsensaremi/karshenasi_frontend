import React from 'react';
import ItemComponent from '../../components/Item';
import axios from "axios";

class Item extends React.Component {

    deleted = false;

    componentDidMount() {
        if (this.props.file !== null) {
            this.upload();
        }
    }

    componentWillUnmount() {
        this.deleted = true;
    }

    onDelete = (event) => {
        this.props.onDelete(this.props.id)(event);
    };

    upload = () => {
        const {file, onChange, setProgress, id} = this.props;

        const fd = new FormData();
        fd.append('file', file);
        onChange(id)({
            uploading: true,
        });
        const headers = {authorization: `Bearer ${window.localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN_NAME)}`};
        axios({
            method: 'POST',
            headers,
            url: `${process.env.REACT_APP_UPLOAD_TMP_URL}`,
            data: fd,
            onUploadProgress: (progressEvent) => {
                const uploadProgress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setProgress(uploadProgress);
            }
        }).then(res => {
            if (!this.deleted) {
                onChange(id)({
                    uploading: false,
                    name: res.data.data.name,
                });
            }
        }).catch(err => {
            console.log('err', err);
        });
    };

    render() {
        return (
            <ItemComponent
                {...this.props}
                onDelete={this.onDelete}
            />
        );
    }
}

export default Item;
