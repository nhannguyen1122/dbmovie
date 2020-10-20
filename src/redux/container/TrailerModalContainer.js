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
import FlistModal from '../../component/Modal/flistModal';
 class HomeContainer extends Component {
     
    render() {
        const{TrailerOpen,actions,loadingReducer,FlistReducer}=this.props;
        const{FlistOpenState,flistModalType}=loadingReducer;
       const{CloseVideoTrailerModal,closeFlist,addNewFlist,handleUpdateList}=actions;
       const{updateList}=FlistReducer;
       
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
              handleUpdateList={handleUpdateList}       />
            </>
        )
    }
}
const mapStateToProps =state=>{
    return {
        TrailerOpen:state.MovieReducer.TrailerOpen,
        loadingReducer:state.loadingReducer,
        FlistReducer:state.FlistReducer
       
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