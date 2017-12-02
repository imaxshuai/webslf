import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sortActions from '../redux/actions/sort';

import App from '../containers/App';
import City from '../containers/city/city';
import CityList from '../containers/city/list';
import Job from '../containers/sort/job';
import House from '../containers/sort/house';
import HouseList from '../containers/sort/house/list';

class WebRouter extends Component{

    componentDidMount(){
        this.props.sortActions.getSort();
    }

    render(){
        return (
            <Router>
                <div>
                    <Route exact path='/' component={App} />
                    <Route exact path='/city' component={City} />
                    <Route path='/city/:province' component={CityList} />
                    <Route exact path='/house' component={House} />
                    <Route exact path='/house/list' component={HouseList} />
                    <Route exact path='/job' component={Job} />
                    <Route path='/job/:sort' component={Job} />
                </div>
            </Router>
        )
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
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WebRouter);
