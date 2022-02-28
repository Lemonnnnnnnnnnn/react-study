import React, { Component, createContext } from 'react'
import { createContext } from 'react'

const { Provider, Consumer } = createContext()

class BigWrapper extends Component {
    nodes = []
    state = {}

    keep = (id, children) => {

    }

    render() {
        return (
            <Provider value={this.keep}>
                {this.props.children}
            </Provider>
        )
    }
}

const Wrapper = WrappedComponent => props => (
    <Consumer>{keep => <WrappedComponent {...props} keep={keep} />}</Consumer>
)

@Wrapper
class Content extends Component{
    constructor(props){
        console.log(props)
    }
    render(){
        return (
            <div>
                
            </div>
        )
    }
}

export default Content