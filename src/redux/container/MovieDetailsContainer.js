import React, {Component} from 'react';
import {connect} from 'react-redux';
import MovieDetails from '../../component/MovieDetails';
import PropTypes from 'prop-types';
import * as actions from "../action";
import { bindActionCreators } from 'redux';
import MenuComponent from '../../component/Header/Menu';
import Footer from '../../component/Footer/Footer';
class MovieDetailsContainer extends Component {
  render() {
    const{MovieReducer,match,actions,authState}=this.props;
    const{DetailsInfor}=MovieReducer;
    const Details=MovieReducer.MovieDetails;
    const {casts}=DetailsInfor;
    const {OpenVideoTrailerModal,getMovieyoutube,setValueAutocomplete,handleLogout,
    getUsername,getTopRatedMovie,getCasts,openFlist,openDetailDrawer,getDetailCast}=actions;
   
    return (
      < >
        <MenuComponent 
        getTopRatedMovie={getTopRatedMovie}
        getUsername={getUsername}
        handleLogout={handleLogout}
        authState={authState}
        setValueAutocomplete={setValueAutocomplete}
        
        />
       {Details? <MovieDetails
       openFlist={openFlist}
       casts={casts}
       getCasts={getCasts}
       match={match}
       openTrailer={OpenVideoTrailerModal}
       Details={Details}
       getMovieyoutube={getMovieyoutube}
       openDetailDrawer={openDetailDrawer}
       getDetailCast={getDetailCast}
       />:""}
        <Footer/>
      </>
    );
  }
}

const mapStateToProps = state => {
 return {
  MovieReducer:state.MovieReducer,
  authState:state.AuthReducer
 }
}
const mapDispatchToProps = dispatch => {
  return {
    actions:bindActionCreators(actions,dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer)
MovieDetailsContainer.propsTypes={
    match:PropTypes.object,
    authState:PropTypes.shape({
      loginFormOpenState:PropTypes.bool,
      registerFormOpenState:PropTypes.bool,
      isLogin:PropTypes.bool
    }),
    actions:PropTypes.object,
    MovieReducer:PropTypes.shape({
        SearchResult:PropTypes.array,
        Movies:PropTypes.shape({
            title:PropTypes.bool,
            results:PropTypes.array
        }),
        TopRatedMovie:PropTypes.shape({
            results:PropTypes.array,
            total:PropTypes.number,
            current:PropTypes.number,
        }),
        MovieDetails:PropTypes.object,
        DetailsInfor:PropTypes.shape({
            casts:PropTypes.array,
            personalCast:PropTypes.object
    
        }),
        TrailerOpen:PropTypes.shape({
            openstate:PropTypes.bool,
            MovieTrailer:PropTypes.string
        }),
        topPopularMovie:PropTypes.array,
        upComingMovies:PropTypes.array,
    })
}