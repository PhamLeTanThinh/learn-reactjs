import React, { Component } from 'react'


export default class Album extends Component {


    constructor(props) {
        super(props);
    }

    render() {
        const {thumbnailURL,name} = this.props.song;
        return (
            <div className="Album">
                <div className="album__thumnail">
                    <img src={thumbnailURL} alt={name} />
                </div>
                <p className="album__name">{name}</p>
            </div>
        )
    }
}
