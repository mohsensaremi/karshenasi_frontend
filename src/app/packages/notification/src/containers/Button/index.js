import {compose, withState} from "recompose";
import Button from '../../components/Button';
import network from 'app/network';

export default compose(
    withState("count", "setCount", null),
    network((props) => ({
        fetch: {
            url: 'notification/count',
            refreshInterval: 5000,
            then: res => {
                if (res && res.count !== props.props) {
                    props.setCount(res.count);
                }
            },
        }
    }))
)(Button);
