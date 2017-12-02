import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Icon, Input } from 'antd';
import '../styles/header.scss';

export class Header extends Component {

    componentWillMount(){
        localStorage.getItem('city');
    }

    render() {
        return (
            <Row className='Header' type="flex" justify="space-between" align="middle">
                <Col className='city'>
                    <Link to='/'>搜</Link>丨<Link to='/city'>南京</Link>
                    <Icon type='caret-down' style={{fontSize: 10, marginLeft: 2}} />
                </Col>
                <Col xs={14} sm={18} md={20} className='search'>
                    <Input type='text' name='search' />
                </Col>
                <Col className='mine'>
                    <Link to='/publish'>发布</Link>丨<Link to='/mine'>我的</Link>
                </Col>
            </Row>
        );
    }
}
