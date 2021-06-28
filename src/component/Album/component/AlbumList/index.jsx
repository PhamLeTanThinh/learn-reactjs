import React, { Component } from 'react'
import data from '../../../../data/data.json'
import Album from './../Album/index';
import './styles.scss';


export default class AlbumList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            AlbumList: data
        }
    }

    renderPhim = () => {
        return this.state.AlbumList.map((song, index) => {
            return (
                <div key={index}>
                    <Album song={song} />
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderPhim()}
                </div>
            </div>
        )
    }
}
