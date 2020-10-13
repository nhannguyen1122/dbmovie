import React, {Component} from 'react';
import {connect} from 'react-redux';
import MovieDetails from '../../component/MovieDetails';
import PropsTypes from 'prop-types';
import * as actions from "../action";
import { bindActionCreators } from 'redux';
import MenuComponent from '../../component/Header/Menu';
class MovieDetailsContainer extends Component {
  
  componentDidMount(){
    
  }
  render() {
    const Details=this.props.MovieReducer.MovieDetails;
    const {OpenVideoTrailerModal,getMovieyoutube,setValueAutocomplete,handleLogout,getUsername,getTopRatedMovie}=this.props.actions;
    const{authState}=this.props;
    console.log('moviecontainer render');
    return (
      <div>
        <MenuComponent getTopRatedMovie={getTopRatedMovie}
        getUsername={getUsername}
        handleLogout={handleLogout}
        authState={authState}
        setValueAutocomplete={setValueAutocomplete}
        />
       {Details? <MovieDetails
       openTrailer={OpenVideoTrailerModal}
       Details={Details}
       getMovieyoutube={getMovieyoutube}
       
       />:""}
      </div>
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
  MovieDetails:PropsTypes.object,
  actions:PropsTypes.object,
}