import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../component/Header/Header';
import ListMovie from '../../component/HomePage/ListMovies';
import Movie from '../../component/HomePage/Movie';
import Footer from '../../component/Footer/Footer';
import AutoCompleteComponent from '../../component/Header/AutoComplete';
import Menu from '../../component/Header/Menu';
import PropTypes from 'prop-types';
import TopTrendingMovies from '../../component/HomePage/TopTrendingMovies';
import TopPopularMovies from '../../component/HomePage/TopPopularMovies';
import * as actions from "../action";
import "../../App.css";
import { bindActionCreators } from 'redux';
import VideoModal from '../../component/Modal';
 class HomeContainer extends Component {
     
    render() {
        const{TrailerOpen,dispatchaction}=this.props;
        console.log(dispatchaction);
        console.log(TrailerOpen);
        return (
            <>
              <VideoModal 
              MovieTrailerid={TrailerOpen.MovieTrailer}
              TrailerOpen={TrailerOpen.openstate}closeModal={dispatchaction.CloseVideoTrailerModal}/>
            </>
        )
    }
}
const mapStateToProps =state=>{
    return {
        TrailerOpen:state.MovieReducer.TrailerOpen,
    
       
    }
}
const mapDispatchToProps =dispatch=>{
    return {
        dispatchaction:bindActionCreators(actions,dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

HomeContainer.propTypes={
 
}