import React, { Component } from 'react'
import { Button, CardMedia, Typography } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';

export default class Product extends Component {

    render() {
        let { phone } = this.props;
        const {detailButton} = this.props
        return (
            <div className="col-4">
                {/* <div className="card">
                    <img className="card-img-top" src={phone.hinhAnh} alt="" />
                    <div className="card-body text-center">
                        <h4 className="card-title">{phone.tenSP}</h4>
                        <Button startIcon={<VisibilityIcon />}
                            variant="contained"
                            color="primary"
                            onClick={() => { detailButton(phone) }}
                        >
                            Detail
                        </Button>
                    </div>
                </div> */}
                <Card>
                    <CardMedia
                     style={{width:250, height:300, paddingTop: '30%' }}
                     image={phone.hinhAnh}/>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {phone.tenSP}
                        </Typography>
                        <Button startIcon={<VisibilityIcon />}
                            variant="contained"
                            color="primary"
                            onClick={() => { detailButton(phone) }}
                        >
                            Detail
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
