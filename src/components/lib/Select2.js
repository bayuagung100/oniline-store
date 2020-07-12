import React, { Component } from "react";
import Select from 'react-select';

// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
// ]

class Select2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            options: this.props.options,
            name: this.props.name,
            placeholder: this.props.placeholder
        };
    }
    componentDidMount() {
    }

    handleChange = selectedOption => {
        this.setState(
            { selectedOption },
            () => console.log(`Option selected:`, this.state.selectedOption)
        );
    };

    
    render() {
        const { selectedOption } = this.state;
        return (
        <Select
            className="basic-single"
            classNamePrefix="select"
            name={this.state.name}
            placeholder={this.state.placeholder}
            value={selectedOption}
            onChange={this.handleChange}
            options={this.state.options}
        />
        )
    }

}

export default Select2;

