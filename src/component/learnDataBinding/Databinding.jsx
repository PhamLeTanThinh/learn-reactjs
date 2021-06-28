import React, { Component } from 'react'

export default class Databinding extends Component {
    hoTen='Pham Le Tan Thinh';
    lop = "12";

    renderThongTin =() => {
        return(
            <ul>
                <li>Ho ten: {this.hoTen}</li>
                <li>lop: {this.lop}</li>
            </ul>
        )
    }
    render() {
        return (
            <div>
                {this.renderThongTin()}
            </div>
        )
    }
}
