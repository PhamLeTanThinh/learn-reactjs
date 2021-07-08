import React, { Component } from 'react'
import ListProduct from './ListProduct';
import PhoneData from '../../data/PhoneData.json'

export default class PracticePropState extends Component {
    


    render() {
        return (
            <div max-witdh="sm">
                <h3 className="text-center text-success">LIST PHONE</h3>
                <ListProduct listProductProps={PhoneData}/>
            </div>
        )
    }
}
