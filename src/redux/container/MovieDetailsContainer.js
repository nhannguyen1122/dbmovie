import React, {Component} from 'react';
import {connect} from 'react-redux';
import MovieDetails from '../../component/MovieDetails';
import PropsTypes from 'prop-types';
import * as actions from "../action";
import { bindActionCreators } from 'redux';
import MenuComponent from '../../component/Header/Menu';
import spiderman from "../../img/spiderman.jpg";
import Footer from '../../component/Footer/Footer';
class MovieDetailsContainer extends Component {
  
  componentDidMount(){
  
  
  }
  render() {
    const{MovieReducer}=this.props;
    const Details=MovieReducer.MovieDetails;
    const {casts}=MovieReducer.DetailsInfor;
    console.log(casts);
    const {match}=this.props;

    const {OpenVideoTrailerModal,getMovieyoutube,setValueAutocomplete,handleLogout,getUsername,getTopRatedMovie,getCasts}=this.props.actions;
    const{authState}=this.props;
    console.log('moviecontainer render');
    return (
      <div >
        <MenuComponent getTopRatedMovie={getTopRatedMovie}
        getUsername={getUsername}
        handleLogout={handleLogout}
        authState={authState}
        setValueAutocomplete={setValueAutocomplete}
        />
       {Details? <MovieDetails
       casts={casts}
       getCasts={getCasts}
       match={match}
       openTrailer={OpenVideoTrailerModal}
       Details={Details}
       getMovieyoutube={getMovieyoutube}
       
       />:""}
       <div  className="App"> <Footer/></div>
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