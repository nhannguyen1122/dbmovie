import { connect } from 'react-redux';
import React, { Component } from 'react';
import FlistSection from '../../component/Flist/FlistSection';
import Header from '../../component/Header/Header';
import MenuComponent from '../../component/Header/Menu';
import AutoCompleteComponent from '../../component/Header/AutoComplete';
import { bindActionCreators } from 'redux';
import * as actions from "../action";
import DetailsModal from '../../component/Modal/DetailModal';
class FlistContainer extends Component {
    
    render() {
        const {actions,loadingReducer}=this.props;
        const {getUsername,setValueAutocomplete,getTopRatedMovie,getMovieyoutube,
            openDetailDrawer,closeDetailDrawer,
        }=actions;
        const{DrawerModalOpenState}=loadingReducer;
        return <>
                <Header>
                    <MenuComponent getUsername={getUsername}
                     setValueAutocomplete={setValueAutocomplete}
                     getTopRatedMovie={getTopRatedMovie}
                    />
                   
                </Header>

                <FlistSection getMovieyoutube={getMovieyoutube}
            openDetailDrawer={openDetailDrawer}closeDetailDrawer={closeDetailDrawer}
            DrawerModalOpenState={DrawerModalOpenState}
                
                />
                <DetailsModal openDetailDrawer={openDetailDrawer}closeDetailDrawer={closeDetailDrawer}
            DrawerModalOpenState={DrawerModalOpenState}/>
            </>
        
    }
}

const mapStateToProps = state => {
    return {
        authState:state.AuthReducer,
        loadingReducer:state.loadingReducer
    }
}
const mapDispatchToProps =dispatch =>{
    return {
        actions:bindActionCreators(actions,dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FlistContainer);
