import {Component, createElement} from 'react'

/**
 * Creates a component class that renders the given Material UI component
 *
 * @param MaterialUIComponent The material ui component to render
 * @param mapProps A mapping of props provided by redux-form to the props the Material UI
 * component needs
 */
export default function createComponent(MaterialUIComponent, mapProps = ({input, ...props}) => {
    return {
        ...input,
        ...props
    };
}) {
    class InputComponent extends Component {
        getRenderedComponent() {
            return this.refs.component
        }

        render() {
            const p = {
                ...mapProps(this.props),
                meta: this.props.meta,
                ...this.props.componentProps,
            };

            return createElement(MaterialUIComponent, p
                //     {
                //     ...mapProps(this.props),
                //     ...this.props.input,
                //     // ref: 'component'
                // }
            )
        }
    }
    InputComponent.displayName = `ReduxForm${MaterialUIComponent.name}`
    return InputComponent
}