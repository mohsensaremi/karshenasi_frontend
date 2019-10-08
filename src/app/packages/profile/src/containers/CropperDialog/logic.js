import React from "react";

const INITIAL_STATE = {
    submitting: false,
    file: null,
};

export default (WrappedComponent) => {
    return class extends React.Component {

        state = INITIAL_STATE;
        uploaderRef = null;

        setUploaderRef = (r) => {
            this.uploaderRef = r;
        };

        handleSubmit = () => {
            const {
                onSubmit,
                onClose,
                canvasOptions,
                type,
            } = this.props;

            this.setState({submitting: true});

            this.cropper.getCroppedCanvas({
                fillColor: '#fff',
                imageSmoothingEnabled: false,
                imageSmoothingQuality: 'high',
                ...canvasOptions
            }).toBlob((blob) => {
                return onSubmit(blob, {onClose, type}).finally(() => {
                    this.setState({submitting: false});
                });
            });
        };

        onSelectImage = (arg) => {
            this.setState({
                file: arg[0],
            });
        };

        initCropper = () => {
            require('cropperjs/dist/cropper.min.css');
            const Cropper = require('cropperjs');

            const {
                cropperOptions
            } = this.props;

            const image = document.getElementById(this.state.file.id);
            this.cropper = new Cropper(image, {
                aspectRatio: 16 / 9,
                viewMode: 1,
                ...cropperOptions,
            });
        };

        reset = () => {
            this.setState(INITIAL_STATE);

            if (this.cropper) {
                this.cropper.destroy();
                this.cropper = null;
            }
        };

        componentDidUpdate(prevProps, prevState) {
            if (this.state.file && prevState.file !== this.state.file) {
                this.initCropper();
            }
        }

        render() {

            const {...props} = this.props;
            const {...state} = this.state;

            return (
                <WrappedComponent
                    {...props}
                    {...state}
                    handleSubmit={this.handleSubmit}
                    onSelectImage={this.onSelectImage}
                    uploaderRef={this.uploaderRef}
                    setUploaderRef={this.setUploaderRef}
                    reset={this.reset}
                />
            );
        }
    };
}
