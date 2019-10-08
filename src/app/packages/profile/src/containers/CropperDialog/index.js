import {compose} from "recompose";
import CropperDialog from '../../components/CropperDialog';
import {withDialog} from 'packages/dialog';
import logic from './logic';

export default compose(
    withDialog({
        name: 'cropper',
    }),
    logic,
)(CropperDialog);
