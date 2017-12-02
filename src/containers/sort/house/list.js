import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';

import '../../../styles/sort.scss';
import { Header } from '../../../components/header';
class HouseList extends Component{

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        return (
            <div className='Sort'>
                <Header />

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
)(HouseList)