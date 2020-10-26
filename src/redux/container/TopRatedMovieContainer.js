import { Container } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Footer from '../../component/Footer/Footer';
import PaginationComponent from '../../component/TopRatedMovie';
import ListTopRatedMovie from '../../component/TopRatedMovie/ListTopRatedMovie';
import TopRatedMovie from '../../component/TopRatedMovie/TopratedMovies';
import * as actions from "../action/index";
import  "../../App.css";
import MenuComponent from '../../component/Header/Menu';
class TopRatedMovieContainer extends React.Component {
    componentDidMount(){
        const{actions,current}=this.props;
        const{getPage, getTopRatePage}=actions;
        getPage();
        getTopRatePage(current);
    }

    render(){
        const{totalpage,data,actions,current}=this.props;
        const{getTopRatePage,setCurrentTopRatePage,OpenVideoTrailerModal,
            getUsername,getMovieyoutube,showDetails,getTopRatedMovie,
            setValueAutocomplete,openFlist}=actions;
      
        return  <>
            <Container>
            <MenuComponent getTopRatedMovie={getTopRatedMovie}
            getUsername={getUsername}
            setValueAutocomplete={setValueAutocomplete}
            />
       
          <ListTopRatedMovie>
            {data.map((item,index)=>{
        
        return <React.Fragment key={index}>
           
            <TopRatedMovie 
            openModal={OpenVideoTrailerModal}
            getMovieyoutube={getMovieyoutube}
            showDetails={showDetails}
            openFlist={openFlist}
            item={item} key={index}/></React.Fragment>
            })}

        </ListTopRatedMovie>
        <br/>

      <div> <PaginationComponent totalpage={totalpage} 
      getTopRatePage={getTopRatePage}
      setCurrentTopRatePage={setCurrentTopRatePage}
      current={current}
      /></div>
      <br/>
      <br/>
      </Container>
      <div  className="App">
      <Footer />
        </div>
        </>
    }
}

const mapStateToProps=state=>{
    return {
        totalpage:state.MovieReducer.TopRatedMovie.total,
        data:state.MovieReducer.TopRatedMovie.results,
        current:state.MovieReducer.TopRatedMovie.current
     }
}
const mapDispatchToProps=dispatch=>{
    return {
        actions:bindActionCreators(actions,dispatch)

     }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopRatedMovieContainer)