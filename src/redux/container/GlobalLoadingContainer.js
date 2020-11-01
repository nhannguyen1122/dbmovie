
import React, { Component } from 'react'
import { connect } from 'react-redux'
import BackdropModal from '../../component/Modal/BackdropModal';
import PropTypes from 'prop-types';
 class GlobalLoadingContainer extends Component {
     
    render() {
        const{loadingReducer}=this.props;
        const{backdropOpenState}=loadingReducer;
        return (
            <>
              <BackdropModal backdropOpenState={backdropOpenState}
              />
            </>
        )
    }
}
const mapStateToProps =state=>{
    return {
        loadingReducer:state.loadingReducer,
    }
}
const mapDispatchToProps =dispatch=>{
    return { 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GlobalLoadingContainer);

GlobalLoadingContainer.propTypes={
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
    })
}