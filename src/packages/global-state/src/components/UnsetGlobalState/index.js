import {compose, shouldUpdate, lifecycle, defaultProps} from 'recompose';
import withGlobalState from '../../decorators/withGlobalState';

export default compose(
    defaultProps({
        when: 'unmount',
    }),
    shouldUpdate(() => false),
    withGlobalState,
    lifecycle({
        componentWillMount() {
            if (this.props.when === 'mount') {
                this.props.unsetItem(this.props.itemKey, this.props.itemValue);
            }
        },
        componentWillUnmount() {
            if (this.props.when === 'unmount') {
                this.props.unsetItem(this.props.itemKey, this.props.itemValue);
            }
        },
    })
)(()=>null);