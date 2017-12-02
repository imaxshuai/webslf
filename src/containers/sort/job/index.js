import React, {Component} from 'react';
import { connect } from 'react-redux';

class Job extends Component{
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
        this.state = {
            name: 'xushuai',
            password: '123123',
        }
    }

    componentDidMount(){
        console.log(this.props);
    }

    render(){
        return (
            <div>
                <h1>{this.props.match?this.props.match.params.sort:null}</h1>
                <h3>我是招聘列表页面！</h3>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        sort: state.sort,
    }
};


export default connect(
    mapStateToProps
)(Job);