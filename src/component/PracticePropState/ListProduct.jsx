import { TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import { Container, Paper } from '@material-ui/core';
import React, { Component } from 'react';
import Product from './Product';
export default class ListProduct extends Component {


    constructor(props) {
        super(props);
        const listProductProps = this.props.listProductProps;
        this.state = {
            productDetail: listProductProps[0],
        }
    }

    renderProduct = () => {
        const { listProductProps } = this.props;
        return listProductProps.map((phone, index) => {
            return (
                <Product key={index} phone={phone} detailButton={this.detailButton} />
            )
        })
    }

    detailButton = (product) => {
        this.setState({
            productDetail: product
        })
    }

    render() {

        let { productDetail } = this.state

        return (
            <Container>
                <Paper elevation={3} variant="outlined" square>
                    <div className="container">
                        <div className="row">
                            {this.renderProduct()}
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-6 text-center">
                                <h3>{this.state.productDetail.tenSP}</h3>
                                <img src={this.state.productDetail.hinhAnh} alt="" width={250} height={300} />
                            </div>
                            <div className="col-6">
                                <h3>Phone Detail</h3>

                                <TableContainer>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Display</TableCell>
                                            <TableCell>{productDetail.manHinh}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>OS</TableCell>
                                            <TableCell>{productDetail.heDieuHanh}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Front-Camera</TableCell>
                                            <TableCell>{productDetail.cameraTruoc}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Back-Camera</TableCell>
                                            <TableCell>{productDetail.cameraSau}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Ram</TableCell>
                                            <TableCell>{productDetail.ram}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>ROM</TableCell>
                                            <TableCell>{productDetail.rom}</TableCell>
                                        </TableRow>
                                    </TableBody>

                                </TableContainer>
                                {/* <table className="table">
                                    <tr>
                                        <th>Display</th>
                                        <th>{productDetail.manHinh}</th>
                                    </tr>
                                    <tr>
                                        <th>OS</th>
                                        <th>{productDetail.heDieuHanh}</th>
                                    </tr>
                                    <tr>
                                        <th>Front-Camera</th>
                                        <th>{productDetail.cameraTruoc}</th>
                                    </tr>
                                    <tr>
                                        <th>Back-Camera</th>
                                        <th>{productDetail.cameraSau}</th>
                                    </tr>
                                    <tr>
                                        <th>RAM</th>
                                        <th>{productDetail.ram}</th>
                                    </tr>
                                    <tr>
                                        <th>ROM</th>
                                        <th>{productDetail.rom}</th>
                                    </tr>
                                </table> */}
                            </div>
                        </div>
                    </div>
                </Paper>
            </Container>


        )
    }
}
