import {compose, lifecycle} from 'recompose';
import withToast from '../../decorators/withToast';

export default compose(
    withToast,
    lifecycle({
        componentDidMount() {
            const {openToast, ...props} = this.props;
            openToast(props);
        },
    })
)(() => null);
