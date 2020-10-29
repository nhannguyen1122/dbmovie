
import React, { Component } from 'react'
import { connect } from 'react-redux'
import BackdropModal from '../../component/Modal/BackdropModal';
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
 
}