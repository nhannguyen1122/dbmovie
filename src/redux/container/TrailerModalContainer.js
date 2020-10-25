import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../component/Header/Header';
import ListMovie from '../../component/HomePage/ListMovies';
import Movie from '../../component/HomePage/Movie';
import Footer from '../../component/Footer/Footer';
import AutoCompleteComponent from '../../component/Header/AutoComplete';
import Menu from '../../component/Header/Menu';
import PropTypes from 'prop-types';
import TopTrendingMovies from '../../component/HomePage/UpcomingMovie';
import TopPopularMovies from '../../component/HomePage/TopPopularMovies';
import * as actions from "../action";
import "../../App.css";
import { bindActionCreators } from 'redux';
import VideoModal from '../../component/Modal';
import FlistModal from '../../component/Modal/flistModal';
import BackdropModal from '../../component/Modal/BackdropModal';
 class HomeContainer extends Component {
     
    render() {
        const{TrailerOpen,actions,loadingReducer,FlistReducer,MovieReducer}=this.props;
        const{FlistOpenState,flistModalType,backdropOpenState}=loadingReducer;
       const{CloseVideoTrailerModal,closeFlist,addNewFlist,handleUpdateList,getFlist,addMovieToFlist}=actions;
       const{updateList,list}=FlistReducer;
       const{MovieDetails}=MovieReducer;
       
        return (
            <>
              <VideoModal 
              MovieTrailerid={TrailerOpen.MovieTrailer}
              TrailerOpen={TrailerOpen.openstate}closeModal={CloseVideoTrailerModal}/>
              <FlistModal FlistOpenState={FlistOpenState}
              flistModalType={flistModalType}
              closeFlist={closeFlist}
              addNewFlist={addNewFlist}     
              updateList={updateList}  
              handleUpdateList={handleUpdateList}
              getFlist={getFlist}
              list={list}
              addMovieToFlist={addMovieToFlist}
              MovieDetails={MovieDetails}
              />
              <BackdropModal 
               
                backdropOpenState={backdropOpenState}
              />
            </>
        )
    }
}
const mapStateToProps =state=>{
    return {
        TrailerOpen:state.MovieReducer.TrailerOpen,
        loadingReducer:state.loadingReducer,
        FlistReducer:state.FlistReducer,
        MovieReducer:state.MovieReducer
       
    }
}
const mapDispatchToProps =dispatch=>{
    return {
        actions:bindActionCreators(actions,dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

HomeContainer.propTypes={
 
}