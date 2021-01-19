import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import './HeaderFooterContainer.scss';


function HeaderFooterContainer(props: React.PropsWithChildren<{}>){
    return <div className="HeaderFooterContainer">
        <NavBar/>
        {props.children}
        <Footer/>
    </div>
}

export default HeaderFooterContainer;
