import React from 'react';
import ReactLoading from 'react-loading';
import './loading.style.css';


        const Example = ({ type, color }) => (
            
            <div className="loading">
            <ReactLoading type={"spinningBubbles"} color={color} height={'5%'} width={'5%'}  />
            </div>
            
        );

        


export default Example;