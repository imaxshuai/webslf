import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';

import '../../../styles/sort.scss';
import { Header } from '../../../components/header';
class House extends Component{

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        console.log(this.props.sort.fczs);
        return (
            <div className='Sort'>
                <Header />
                {
                    this.props.sort.fczs
                        ?
                    (
                        <Row type='flex'>
                            {this.props.sort.fczs.label.map((item=>(
                                <Col span={6} className='item' key={item.id}>
                                    <Link to={'/house/list/?sort_name='+item.key}>
                                        {item.key}
                                    </Link>
                                </Col>
                            )))}
                        </Row>
                    )
                        :
                    (
                        <div>
                            <h1>数据加载中...</h1>
                        </div>
                    )
                }

            </div>
        )
    }

}


const mapStateToProps = (state)=>{
    return {
        sort: state.sort
    }
}

export default connect(
    mapStateToProps
)(House)