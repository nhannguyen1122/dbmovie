import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../component/Header/Header';
import ListMovie from '../../component/HomePage/ListMovies';
import Movie from '../../component/HomePage/Movie';
import Footer from '../../component/Footer/Footer';
import AutoCompleteComponent from '../../component/Header/AutoComplete';
import MenuComponent from '../../component/Header/Menu';
import PropTypes from 'prop-types';
import TopTrendingMovies from '../../component/HomePage/TopTrendingMovies';
import TopPopularMovies from '../../component/HomePage/TopPopularMovies';
import * as actions from "../action";
import "../../App.css";
import { bindActionCreators } from 'redux';
 class HomeContainer extends Component {
     componentDidMount(){
         const {dispatchaction,MovieReducer}=this.props;
         const{getTopRatedMovie,getUpcomingMovie,getTopPopularMovie,}=dispatchaction;
         console.log(getTopPopularMovie);
         getUpcomingMovie();
         getTopPopularMovie();
         
         if(MovieReducer.length>0){

         }
         else{
            getTopRatedMovie();
         }
         
         
     }
    render() {
        const{MovieReducer,dispatchaction,SearchResult,title,topPopularMovie,upComingMovies}=this.props;

       
        return (
            <div  className="App">
               <Header>
                   <MenuComponent getTopRatedMovie={dispatchaction.getTopRatedMovie} />
                   <AutoCompleteComponent
                   SearchResult={SearchResult}
                   SearchForKeyWord={dispatchaction.SearchForKeyWord}
                SearchWithKeyWord={dispatchaction.SearchWithKeyWord}
                   />
                   
               </Header>
               <ListMovie title={title}
               
               setCurrentTopRatePage={dispatchaction.setCurrentTopRatePage}>
              {MovieReducer.map((item,index)=>{
                  return <Movie key={index} item={item}
                  showDetails={dispatchaction.showDetails}
                  getMovieyoutube={dispatchaction.getMovieyoutube}
                  openModal={dispatchaction.OpenVideoTrailerModal}/>
                 
                        
              })}
              </ListMovie>
              <TopTrendingMovies 
              upComingMovies={upComingMovies}
              showDetails={dispatchaction.showDetails}
              getMovieyoutube={dispatchaction.getMovieyoutube}
              openModal={dispatchaction.OpenVideoTrailerModal}/>
              <TopPopularMovies 
              topPopularMovie={topPopularMovie}
              getMovieyoutube={dispatchaction.getMovieyoutube}
                showDetails={dispatchaction.showDetails}
              openModal={dispatchaction.OpenVideoTrailerModal} />
             
              <br />
              <br />
               <Footer/>
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
       
    }
}
const mapDispatchToProps =dispatch=>{
    return {
        dispatchaction:bindActionCreators(actions,dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

HomeContainer.propTypes={
    MovieReducer: PropTypes.array,
    dispatchaction:PropTypes.object,
    TrailerOpen:PropTypes.object,
    topPopularMovie:PropTypes.object,
    upComingMovies:PropTypes.object
}