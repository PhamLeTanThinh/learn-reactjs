import React, { Component } from 'react'
import classnames from 'classnames'
import './styles.scss';

export default class Task extends Component {

    constructor(props) {
        super(props);
    }

    handleToDoClick = (task, index) => {
        const { onToDoClick } = this.props
        if (!onToDoClick) return;
        onToDoClick(task, index)
    }

    render() {
        const { id, name, status } = this.props.task
        const {index} = this.props
        const { task } = this.props


        return (
            <li key={id} className={classnames({ completed: status === 'completed' })} onClick={() => { this.handleToDoClick(task, index) }}>
                {name}
            </li>
        )
    }
}
