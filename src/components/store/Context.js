// import { createContext } from 'react';
import React, { Component, createContext } from 'react';

const MyContext = createContext();

export class Context extends Component {
    constructor(props) {
        super(props);
        this.state = {
            context: {
                dtNotifyCart: 0,
                updateNotifyCart: this.updateNotifyCart,
                status: 'paused',
                togglePlayPause: this.togglePlayPause,
            }
        }
    }
    updateNotifyCart = () => {
        var newYC = JSON.parse(localStorage.getItem("YourCart"));
        this.setState({
            context:{
                ...this.state.context,
                dtNotifyCart: newYC.length,
            }
        },()=>console.log(this.state.context))
    }
    togglePlayPause = () => {
        this.setState({
            context:{
                ...this.state.context,
                status: this.state.context.status === 'playing' ? 'paused' : 'playing',
            }
        },()=>console.log(this.state.context))
        
      };

    componentDidMount(){
        var headYC = JSON.parse(localStorage.getItem("YourCart"));
        if (headYC !== null) {
            this.setState({
                context: {
                    ...this.state.context,
                    dtNotifyCart: headYC.length,
                }
                
            })
        }
    }

    render() {
        return (
            //passing the state object as a value prop to all children
            <MyContext.Provider value={this.state.context}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}


export default MyContext;