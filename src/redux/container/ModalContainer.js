import React, { Component } from 'react'
import { connect } from 'react-redux'

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
       const {personalCast}=DetailsInfor;

        return (
            <>
              <VideoModal 
              MovieTrailerid={MovieTrailer}
              TrailerOpen={openstate}closeModal={CloseVideoTrailerModal}/>
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
 
}