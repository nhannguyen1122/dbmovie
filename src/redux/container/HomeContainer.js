import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../component/Header/Header';
import ListMovie from '../../component/HomePage/ListMovies';
import Movie from '../../component/HomePage/Movie';
import Footer from '../../component/Footer/Footer';
import AutoCompleteComponent from '../../component/Header/AutoComplete';
import MenuComponent from '../../component/Header/Menu';
import PropTypes from 'prop-types';
import UpcomingMovie from '../../component/HomePage/UpcomingMovie';
import TopPopularMovies from '../../component/HomePage/TopPopularMovies';
import * as actions from "../action";
import "../../App.css";
import { bindActionCreators } from 'redux';
 class HomeContainer extends Component {
    
    render() {
        const{MovieReducer,actions,AutoCompleteReducer,authState}=this.props;
        const{Movies,topPopularMovie,SearchResult,upComingMovies}=MovieReducer;
        const{formValue,render}=AutoCompleteReducer;
        const{results,title}=Movies;
        const{setValueAutocomplete,handleLogout,getUsername,SearchSuccess,openFlist,SearchWithKeyWord,setCurrentTopRatePage,setRender,
        SearchForKeyWord,getTopRatedMovie,getUpcomingMovie,getTopPopularMovie,showDetails,getMovieyoutube,OpenVideoTrailerModal}=actions;
        return (
            <div >
               <Header>
                   <MenuComponent handleLogout={handleLogout}
                   getUsername={getUsername}
                   authState={authState}
                   setValueAutocomplete={setValueAutocomplete}
                   getTopRatedMovie={getTopRatedMovie} />
                   
                   <AutoCompleteComponent
                   render={render}
                   setRender={setRender}
                   setValueAutocomplete={setValueAutocomplete}
                   formValue={formValue}
                   SearchResult={SearchResult}
                   SearchForKeyWord={SearchForKeyWord}
                   SearchWithKeyWord={SearchWithKeyWord}
                   SearchSuccess={SearchSuccess}/>
                   
               </Header>
                <ListMovie 
                  title={title}
                  getTopRatedMovie={getTopRatedMovie}
                  setCurrentTopRatePage={setCurrentTopRatePage}>
                  {results.map((item,index)=>{
                  return <Movie key={index} item={item}
                  showDetails={showDetails}
                  getMovieyoutube={getMovieyoutube}
                  openModal={OpenVideoTrailerModal}
                  openFlist={openFlist}/>                      
                  })}
              </ListMovie>
              <UpcomingMovie 
                  getUpcomingMovie={getUpcomingMovie}
                  upComingMovies={upComingMovies}
                  showDetails={showDetails}
                  getMovieyoutube={getMovieyoutube}
                  openFlist={openFlist}
                  openModal={OpenVideoTrailerModal}/>
              <TopPopularMovies 
                  getTopPopularMovie={getTopPopularMovie}
                  openFlist={openFlist}
                  topPopularMovie={topPopularMovie}
                  getMovieyoutube={getMovieyoutube}
                  showDetails={showDetails}
                  openModal={OpenVideoTrailerModal} />
              <br />
              <br />
              <Footer/>
              
            </div>
        )
    }
  
}
const mapStateToProps =state=>{
    return {
        
        MovieReducer:state.MovieReducer,
        AutoCompleteReducer:state.AutoCompleteReducer,
        authState:state.AuthReducer,       
    }
}
const mapDispatchToProps =dispatch=>{
    return {
        actions:bindActionCreators(actions,dispatch),
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

