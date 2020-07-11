import React, { Component } from "react";

class OnlineStore extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         path: props.location.path
    //     }
    // }
    render() {
        // console.log(this.state.path)
        return (
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">Online Store</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default OnlineStore;