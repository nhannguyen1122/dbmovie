import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from "../action";
import "../../App.css";
import { bindActionCreators } from 'redux';
import VideoModal from '../../component/Modal';
import FlistModal from '../../component/Modal/flistModal';
import BackdropModal from '../../component/Modal/BackdropModal';
import DetailsModal from '../../component/Modal/DetailModal';
 class HomeContainer extends Component {
     
    render() {
        const{TrailerOpen,actions,loadingReducer,FlistReducer,MovieReducer}=this.props;
        const{FlistOpenState,flistModalType,backdropOpenState,DrawerModalOpenState,drawerModalContent}=loadingReducer;
       const{CloseVideoTrailerModal,closeFlist,addNewFlist,handleUpdateList,getFlist,addMovieToFlist,openDetailDrawer,closeDetailDrawer}=actions;
       const{updateList,list}=FlistReducer;
       const{MovieDetails}=MovieReducer;
       const {personalCast}=MovieReducer.DetailsInfor;

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
              handleUpdateList={handleUpdateList}
              getFlist={getFlist}
              list={list}
              addMovieToFlist={addMovieToFlist}
              MovieDetails={MovieDetails}
              
              />
              <DetailsModal openDetailDrawer={openDetailDrawer}closeDetailDrawer={closeDetailDrawer}
              MovieDetails={MovieDetails}
              personalCast={personalCast}
        DrawerModalOpenState={DrawerModalOpenState}
        drawerModalContent={drawerModalContent}
        MovieTrailerid={TrailerOpen.MovieTrailer}
        />
              <BackdropModal 
               
                backdropOpenState={backdropOpenState}
              />
            </>
        )
    }
}
const mapStateToProps =state=>{
    return {
        TrailerOpen:state.MovieReducer.TrailerOpen,
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

HomeContainer.propTypes={
 
}