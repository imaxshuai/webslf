import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import { Row, Col } from 'antd';

export class ItemList1 extends Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){

        return (
            <div className='ItemList1'>
                <Row>
                    <Link to='/job/1'>
                        <Col>
                            <img src={require('../images/logo.svg')} alt='' />
                        </Col>
                        <Col>
                            <h3>这个是信息标题啊！</h3>
                            <div>
                                <span>三室一厅</span>
                                |<span>80㎡</span>
                                |<span>简装</span>
                                |<span>整套</span>
                                |<span>建邺区</span>
                            </div>
                        </Col>
                    </Link>
                </Row>
            </div>
        )
    }


}