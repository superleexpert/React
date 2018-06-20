import React from 'react';
import PCHeader from './pc_header'
import PCFooter from './pc_footer'

export default class Root extends React.Component{
  render(){
    return(
      <div>
        <PCHeader></PCHeader>
        <PCFooter></PCFooter>
      </div>
    );
  };
}