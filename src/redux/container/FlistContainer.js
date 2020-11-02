import { connect } from 'react-redux';
import React, { Component } from 'react';
import FlistSection from '../../component/Flist/FlistSection';
import Header from '../../component/Header/Header';
import MenuComponent from '../../component/Header/Menu';
import { bindActionCreators } from 'redux';
import * as actions from "../action";
import PropTypes from "prop-types";
import { Redirect } from 'react-router-dom';

class FlistContainer extends Component {
    
    render() {
            const {actions,loadingReducer,FlistReducer}=this.props;
            const {getUsername,getTopRatedMovie,getMovieyoutube,getFlist,handleLogout,deleteFlist,
            showDetails,openDetailDrawer,closeDetailDrawer,openFlist,handleExpandFlist,setUpdateList,handleDeleteMovie}=actions;
            const{DrawerModalOpenState}=loadingReducer;
            let token= localStorage.getItem('user');
            let username = localStorage.getItem('username')
        return<>{ 
        (token&&username?
        <>
            <Header>
            <MenuComponent 
                getUsername={getUsername}
                getTopRatedMovie={getTopRatedMovie}
                handleLogout={handleLogout}/>
            </Header>

            <FlistSection
                getMovieyoutube={getMovieyoutube}
                handleDeleteMovie={handleDeleteMovie}
                openFlist={openFlist}
                openDetailDrawer={openDetailDrawer}
                closeDetailDrawer={closeDetailDrawer}
                DrawerModalOpenState={DrawerModalOpenState}
                deleteFlist={deleteFlist}
                handleExpandFlist={handleExpandFlist}
                FlistReducer={FlistReducer}
                getFlist={getFlist}
                setUpdateList={setUpdateList}
                showDetails={showDetails}
            />
           
            
       
        </>:<Redirect to="/homepage"/>)}
    
        </>
        
    }
}

const mapStateToProps = state => {
    return {
        loadingReducer:state.loadingReducer,
        FlistReducer:state.FlistReducer
    }
}
const mapDispatchToProps =dispatch =>{
    return {
        actions:bindActionCreators(actions,dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FlistContainer);
FlistContainer.propTypes = {
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
    })
}