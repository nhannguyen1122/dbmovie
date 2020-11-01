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
import PropTypes from "prop-types";
import MenuComponent from '../../component/Header/Menu';
class TopRatedMovieContainer extends React.Component {

    render(){
        const{totalpage,data,actions,current}=this.props;
        const{getTopRatePage,setCurrentTopRatePage,OpenVideoTrailerModal,
        getUsername,getMovieyoutube,showDetails,getTopRatedMovie,handleLogout,
        setValueAutocomplete,openFlist,getPage}=actions;
        return <>
            <Container>
            <MenuComponent 
            getTopRatedMovie={getTopRatedMovie}
            getUsername={getUsername}
            setValueAutocomplete={setValueAutocomplete}
            handleLogout={handleLogout}
            />
        
            <ListTopRatedMovie
             getPage={getPage}
            current={current}
            getTopRatePage={getTopRatePage}
            >
            {data.map((item,index)=>{
            return <React.Fragment key={index}>
            <TopRatedMovie 
            openModal={OpenVideoTrailerModal}
            getMovieyoutube={getMovieyoutube}
            showDetails={showDetails}
            openFlist={openFlist}
            item={item} key={index}/>
            </React.Fragment>
            })}
            </ListTopRatedMovie>
            <br/>
            <div> 
            <PaginationComponent 
            // history={history}
            totalpage={totalpage} 
            setCurrentTopRatePage={setCurrentTopRatePage}
            current={current}
            /></div>
            <br/>
            <br/>
            </Container>
            <Footer />
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
TopRatedMovieContainer.propTypes = {
    totalpage:PropTypes.number,
    data:PropTypes.array,
    actions:PropTypes.object,
    current:PropTypes.number
}