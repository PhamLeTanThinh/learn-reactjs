import React, { Component } from 'react'

export default class Product extends Component {
    //thuộc tính



    //phương thức
    render() {
        return (
            <div>
                <div className="card text-left" style={{width:'300px'}}>
                    <img className="card-img-top" src="https://picsum.photos/g/800" alt="" />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Body</p>
                    </div>
                </div>
            </div>
        )
    }
}
