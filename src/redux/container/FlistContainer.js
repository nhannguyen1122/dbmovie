import { connect } from 'react-redux';
import React, { Component } from 'react';
import FlistSection from '../../component/Flist/FlistSection';
import Header from '../../component/Header/Header';
import MenuComponent from '../../component/Header/Menu';
import AutoCompleteComponent from '../../component/Header/AutoComplete';
import { bindActionCreators } from 'redux';
import * as actions from "../action";
import DetailsModal from '../../component/Modal/DetailModal';
import Footer from '../../component/Footer/Footer';
import { Redirect } from 'react-router-dom';

class FlistContainer extends Component {
    
    render() {
        const {actions,loadingReducer,FlistReducer}=this.props;
        const {getUsername,setValueAutocomplete,getTopRatedMovie,getMovieyoutube,getFlist,handleLogout,deleteFlist,
            openDetailDrawer,closeDetailDrawer,openFlist,handleExpandFlist,setUpdateList,handleDeleteMovie
        }=actions;
        
        const{DrawerModalOpenState}=loadingReducer;
        let token= localStorage.getItem('user');
        let username = localStorage.getItem('username')
        return<>{ 
        (token&&username?<>
            <Header>
                <MenuComponent getUsername={getUsername}
                 setValueAutocomplete={setValueAutocomplete}
                 getTopRatedMovie={getTopRatedMovie}
                 handleLogout={handleLogout}
                />
               
            </Header>

            <FlistSection getMovieyoutube={getMovieyoutube}
            handleDeleteMovie={handleDeleteMovie}
            openFlist={openFlist}
        openDetailDrawer={openDetailDrawer}closeDetailDrawer={closeDetailDrawer}
        DrawerModalOpenState={DrawerModalOpenState}
        deleteFlist={deleteFlist}
        handleExpandFlist={handleExpandFlist}
        FlistReducer={FlistReducer}
            getFlist={getFlist}
            setUpdateList={setUpdateList}

            />
           
            <DetailsModal openDetailDrawer={openDetailDrawer}closeDetailDrawer={closeDetailDrawer}
        DrawerModalOpenState={DrawerModalOpenState}/>
       
        </>:<Redirect to="/homepage"/>)}
    
        </>
        
    }
}

const mapStateToProps = state => {
    return {
        authState:state.AuthReducer,
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
