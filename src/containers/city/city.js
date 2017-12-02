import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userActions from '../../redux/actions/user';
import '../../styles/App.scss';
import { Header } from '../../components/header'

class City extends Component {

  componentDidMount(){
    this.props.userActions.getCitys();
  }

  chooseCity = (city)=>{
    localStorage.setItem('city', JSON.stringify(city));
    this.props.history.push('/');
  };

  render() {
    return (
      <div className='City'>
        {/*头部搜索*/}
        <Header />
        <div className="cityList">
          <div className='title'>
            <h3>热门城市选择</h3>
          </div>
            {
              this.props.citys.hotCitys
                ?
               (
                   <Row className='body'>
                       {this.props.citys.hotCitys.map((item)=>(
                           <Col span={6} key={item.name} className='item' onClick={this.chooseCity.bind(this, item)}>
                             {item.name}
                           </Col>
                       ))}
                   </Row>
               )
                 :
               (
                  <span>城市正在加载中...</span>
               )
            }
        </div>
        <div className="cityList">
          <div className='title'>
            <h3>其他城市选择</h3>
          </div>
            {
              this.props.citys.hotCitys
                ?
               (
                   <Row className='body'>
                       {this.props.citys.citys.map((item)=>(
                           <Col span={6} key={item.name} className='item'>
                             <Link to={'/city/'+item.name}>{item.name}</Link>
                           </Col>
                       ))}
                   </Row>
               )
                 :
               (
                  <span>城市正在加载中...</span>
               )
            }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    citys: state.citys,
  }
};

const mapDispatchToProps = (dispatch)=>{
  return {
      userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City);
