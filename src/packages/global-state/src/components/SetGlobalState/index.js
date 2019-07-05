import {compose, shouldUpdate, lifecycle, defaultProps, branch, onlyUpdateForKeys} from 'recompose';
import withGlobalState from '../../decorators/withGlobalState';

export default compose(
    defaultProps({
        when: 'mount',
        shouldUpdate: false,
    }),
    branch(
        props => props.shouldUpdate,
        onlyUpdateForKeys(['itemValue']),
        shouldUpdate(() => false),
    ),
    withGlobalState,
    lifecycle({
        componentWillMount() {
            if (this.props.when === 'mount') {
                this.props.setItem(this.props.itemKey, this.props.itemValue);
            }
        },
        componentDidUpdate(prevProps) {
            if (this.props.shouldUpdate) {
                if (this.props.itemValue !== prevProps.itemValue) {
                    this.props.setItem(this.props.itemKey, this.props.itemValue);
                }
            }
        },
        componentWillUnmount() {
            if (this.props.when === 'unmount') {
                this.props.setItem(this.props.itemKey, this.props.itemValue);
            }
        },
    })
)(() => null);
