import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Row, Col } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as sortActions from '../redux/actions/sort';
import '../styles/App.scss';
import { Header } from '../components/header'
import { ItemList1 } from '../components/listItem1'

class App extends Component {

  componentDidMount(){

  }

  render() {
    return (
      <div className='App'>
        {/*头部搜索*/}
        <Header />
        {/*分类图标*/}
        <Row type='flex' justify='space-between' className='sort'>
          <Col xs={6} md={4} type='flex' align='center'>
            <Link to='/house'>
              <Icon type='shop' style={{color: '#39a0f4', fontSize: 30}} />
              <p>房产租售</p>
            </Link>
          </Col>
          <Col xs={6} md={4} type='flex' align='center'>
            <Link to='mine'>
              <Icon type='switcher' style={{color: '#fe4a6c', fontSize: 30}} />
              <p>人才招聘</p>
            </Link>
          </Col>
          <Col xs={6} md={4} type='flex' align='center'>
            <Link to='mine'>
              <Icon type='exception' style={{color: '#42ba7b', fontSize: 30}} />
              <p>商业服务</p>
            </Link>
          </Col>
          <Col xs={6} md={4} type='flex' align='center'>
            <Link to='mine'>
              <Icon type='disconnect' style={{color: '#f6552c', fontSize: 30}} />
              <p>同城二手</p>
            </Link>
          </Col>
          <Col xs={6} md={4} type='flex' align='center'>
            <Link to='mine'>
              <Icon type='car' style={{color: '#0bbaac', fontSize: 30}} />
              <p>二手车</p>
            </Link>
          </Col>
          <Col xs={6} md={4} type='flex' align='center'>
            <Link to='mine'>
              <Icon type='global' style={{color: '#ffb300', fontSize: 30}} />
              <p>生活服务</p>
            </Link>
          </Col>
          <Col xs={6} md={4} type='flex' align='center'>
            <Link to='mine'>
              <Icon type='bank' style={{color: '#42ba7b', fontSize: 30}} />
              <p>教育培训</p>
            </Link>
          </Col>
          <Col xs={6} md={4} type='flex' align='center'>
            <Link to='mine'>
              <Icon type='smile' style={{color: '#39a0f4', fontSize: 30}} />
              <p>宠物</p>
            </Link>
          </Col>
          <Col xs={6} md={4} type='flex' align='center'>
            <Link to='mine'>
              <Icon type='bulb' style={{color: '#fa0064', fontSize: 30}} />
              <p>汽车服务</p>
            </Link>
          </Col>
          <Col xs={6} md={4} type='flex' align='center'>
            <Link to='mine'>
              <Icon type='wallet' style={{color: '#39a0f4', fontSize: 30}} />
              <p>票卡</p>
            </Link>
          </Col>
          <Col xs={6} md={4} type='flex' align='center'>
            <Link to='mine'>
              <Icon type='sync' style={{color: '#ffb300', fontSize: 30}} />
              <p>旧物回收</p>
            </Link>
          </Col>
          <Col xs={6} md={4} type='flex' align='center'>
            <Link to='mine'>
              <Icon type='star' style={{color: '#f6552c', fontSize: 30}} />
              <p>连锁加盟</p>
            </Link>
          </Col>
        </Row>
        {/*数据列表*/}
        <div className="list">
          <div className='header'>
            <h3>猜您喜欢</h3>
            <span>猜您喜欢</span>
          </div>
          <ItemList1 info={this.props.sort.fczs} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    sort: state.sort,
  }
};

const mapDispatchToProps = (dispatch)=>{
  return {
    sortActions: bindActionCreators(sortActions, dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
