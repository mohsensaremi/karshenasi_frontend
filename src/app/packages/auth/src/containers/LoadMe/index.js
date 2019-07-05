import {compose, lifecycle, shouldUpdate} from "recompose";
import {withGlobalState} from 'packages/global-state';
import network from 'app/network';

export default compose(
    shouldUpdate(() => false),
    withGlobalState,
    network(() => ({
        meFetch: '/me',
    })),
    lifecycle({
        componentDidMount() {
            this.props.setItem('meLoading', true);
        },
        componentDidUpdate() {
            if (!this.props.meFetch.pending) {
                this.props.setItem('meLoading', false);
                if (this.props.meFetch.fulfilled && this.props.meFetch.value && this.props.meFetch.value.data && this.props.meFetch.value.data.me) {
                    this.props.setItem('me', this.props.meFetch.value.data.me);
                }
            }
        },
    })
)(() => null);
