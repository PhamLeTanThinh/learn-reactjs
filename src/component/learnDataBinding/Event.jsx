import React, { Component } from 'react'

export default class Event extends Component {

    handleShowMessage = (msg) =>{
        alert(msg);
    }

    render() {
        let msg = "hello Bou"
        
        //cach 1 truyen tham so
        return (
            <div>
                <button onClick={this.handleShowMessage.bind(this,msg)}>Click</button>
                {/* Cach 2 là 
                    đây là hàm nặc danh, sau khi hàm này đc gọi thì nó trả về 1 hàm mới, và hàm mới đc gán trong onclick
                */}
                <button onClick={() => {this.handleShowMessage(msg)}}>Click</button>
            </div>
        )
    }
}
