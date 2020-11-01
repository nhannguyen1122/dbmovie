import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from "../action";
import "../../App.css";
import { bindActionCreators } from 'redux';
import VideoModal from '../../component/Modal';
import FlistModal from '../../component/Modal/flistModal';
import DetailsModal from '../../component/Modal/DetailModal';
 class ModalContainer extends Component {
     
    render() {
       const{actions,loadingReducer,FlistReducer,MovieReducer}=this.props;
       const{CloseVideoTrailerModal,closeFlist,addNewFlist,handleUpdateList,getFlist,addMovieToFlist,openDetailDrawer,closeDetailDrawer}=actions;
       const{FlistOpenState,flistModalType,DrawerModalOpenState,drawerModalContent}=loadingReducer;
       const{updateList,list}=FlistReducer;
       const{MovieDetails,TrailerOpen,DetailsInfor}=MovieReducer;
       const{MovieTrailer,openstate}=TrailerOpen;
       const{personalCast}=DetailsInfor;

        return (
            <>
              <VideoModal 
              MovieTrailerid={MovieTrailer}
              TrailerOpen={openstate}
              closeModal={CloseVideoTrailerModal}/>
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
              <DetailsModal 
              openDetailDrawer={openDetailDrawer}
              closeDetailDrawer={closeDetailDrawer}
              MovieDetails={MovieDetails}
              personalCast={personalCast}
              DrawerModalOpenState={DrawerModalOpenState}
              drawerModalContent={drawerModalContent}
              MovieTrailerid={MovieTrailer}
              />
              
            </>
        )
    }
}
const mapStateToProps =state=>{
    return {
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
export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);

ModalContainer.propTypes={
    actions:PropTypes.object,
    loadingReducer:PropTypes.shape({
        leftLoading:PropTypes.bool,
        rightLoading:PropTypes.bool,
        confirmModalOpenState:PropTypes.bool,
        registerConfirOpenState:PropTypes.bool,
        resetFormState:PropTypes.bool,
        FlistOpenState:PropTypes.bool,
        DrawerModalOpenState:PropTypes.bool,
        flistModalType:PropTypes.number,
        backdropOpenState:PropTypes.bool,
        drawerModalContent:PropTypes.any,
        loginMobileLoading:PropTypes.bool,
    }),
    FlistReducer:PropTypes.shape({
        list:PropTypes.array,
        updateList:PropTypes.object,
    }),
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