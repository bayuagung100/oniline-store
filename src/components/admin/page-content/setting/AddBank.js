import React, { Component } from "react";

class AddBank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: {
                // show1: this.props.show1,
                // show2: this.props.show2,
                showSetting: false,
                showAddBank: true,
            },
        }
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent() {
        // this.setState({
        //     showSetting: !this.state.show.showSetting,
        //     showAddBank: !this.state.show.showAddBank
        // });
        this.setState(prevState => ({
            show: {                   // object that we want to update
                ...prevState.show,    // keep all other key-value pairs

                // update the value of specific key
                showSetting: !this.state.show.showSetting,
                showAddBank: !this.state.show.showAddBank,
            }
        }))
    }

    componentDidMount(){
    }

    render() {
        return (
            <div>
                {
                    this.state.show.showAddBank === true ? (
                    <div>
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0 text-dark">Add Bank</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    ):(
                    <div></div>
                    )
                }
            </div>
        );
    }
}

export default AddBank;