import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as userActions from '../../redux/actions/user';
import '../../styles/App.scss';
import {Header} from '../../components/header'

class CityList extends Component {

    componentDidMount() {
        this.props.userActions.getCitys();
        console.log(this.props);
    }

    chooseCity = (city) => {
        localStorage.setItem('city', JSON.stringify(city));
        this.props.history.push('/');
    };

    render() {

        let citys = {};
        if (this.props.citys.citys) {
            this.props.citys.citys.map((item) => {
                if (item.name === this.props.match.params.province) {
                    citys = item;
                }
                return citys;
            })
        }

        return (
            <div className='City'>
                {/*头部搜索*/}
                <Header/>
                <div className="cityList">
                    <div className='title'>
                        <h3>热门城市选择</h3>
                    </div>
                    {
                        this.props.citys.hotCitys
                            ?
                            (
                                <Row className='body'>
                                    {citys.city.map((item) => (
                                        <Col span={6} key={item.name} className='item'
                                             onClick={this.chooseCity.bind(this, item)}>
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
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        citys: state.citys,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityList);
