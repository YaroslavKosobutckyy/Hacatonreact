import React from 'react';
import Button from './button';
import { Separator } from './style';



class MainBlock extends React.Component {
   
   
      state = {
          foto: this.props.foto,
          fotoAutor: this.props.fotoAutor,
          fotoIcon: this.props.fotoIcon,
          text1: this.props.text1,
          text2: this.props.text2,
          textComent: this.props.textComent,
          mainText: this.props.mainText
      }
   
      
     
   render() {
   return(
   <>
   <div className="a-1">
           <img className="foto" src={this.state.foto} alt="" /> 
           <h2>{this.state.text1}</h2>
           <div className='comment'> <img class='foto-autor' src={this.state.fotoAutor} alt="" />        
              <time  className='time-t' >{this.state.text2}</time>
              <img className='icon-foto' src={this.state.fotoIcon} alt="" />
              <p className='comments'> {this.state.textComent}</p>
           </div>
           <p className='comments'>{this.state.mainText}</p>
           <Button /> 
           <Separator></Separator>
   </div>
   </>
   );
}   
}



export default  MainBlock;