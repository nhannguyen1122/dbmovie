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
import { CircularProgress } from '@material-ui/core';
 class HomeContainer extends Component {
     componentDidMount(){
         const {actions,MovieReducer}=this.props;
         const{getTopRatedMovie,getUpcomingMovie,getTopPopularMovie}=actions;
         getUpcomingMovie();
         getTopPopularMovie();
         if(MovieReducer.length>0){

         }
         else{
            getTopRatedMovie();
         }
         
         
     }
    render() {
        const{MovieReducer,actions,SearchResult,title,topPopularMovie,upComingMovies,formValue,authState,render}=this.props;
        const{setValueAutocomplete,handleLogout,getUsername,SearchSuccess,openFlist,SearchWithKeyWord,
            setRender,SearchForKeyWord,getTopRatedMovie}=actions;
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
                SearchSuccess={SearchSuccess}
              
                   />
                   
               </Header>
               <ListMovie title={title}
               
               setCurrentTopRatePage={actions.setCurrentTopRatePage}>
              {MovieReducer.map((item,index)=>{
                  return <Movie key={index} item={item}
                  showDetails={actions.showDetails}
                  getMovieyoutube={actions.getMovieyoutube}
                  openModal={actions.OpenVideoTrailerModal}
                  
                  openFlist={openFlist}
             
                  />
                                        
              })}
              </ListMovie>
              <UpcomingMovie 

              upComingMovies={upComingMovies}
              showDetails={actions.showDetails}
              getMovieyoutube={actions.getMovieyoutube}
              openFlist={openFlist}
              openModal={actions.OpenVideoTrailerModal}/>
              <TopPopularMovies 
              openFlist={openFlist}
              topPopularMovie={topPopularMovie}
              getMovieyoutube={actions.getMovieyoutube}
                showDetails={actions.showDetails}
              openModal={actions.OpenVideoTrailerModal} />
             
              <br />
              <br />
              <div > <Footer/></div>
              
            </div>
        )
    }
  
}
const mapStateToProps =state=>{
    return {
        
        MovieReducer:state.MovieReducer.Movies.results,
        title:state.MovieReducer.Movies.title,
        TrailerOpen:state.MovieReducer.MovieDetails,
        SearchResult:state.MovieReducer.SearchResult,
        topPopularMovie:state.MovieReducer.topPopularMovie,
        upComingMovies:state.MovieReducer.upComingMovies,
        formValue:state.AutoCompleteReducer.formValue,
        render:state.AutoCompleteReducer.render,
        authState:state.AuthReducer,
        loadingReducer:state.loadingReducer,
       
    }
}
const mapDispatchToProps =dispatch=>{
    return {
        actions:bindActionCreators(actions,dispatch),
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

