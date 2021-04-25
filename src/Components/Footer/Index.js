import React from 'react';
import { Wrap, FooterText, FooterBt, FooterBottomtext } from './styles';

 const Footer = () => (
<>
 <Wrap>   
 <div>
    <h2>EPAM LAB</h2>
       <FooterBottomtext> <div className='footer-bottomtext'>
        <FooterText>  <p className='footer-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed 
                             diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat sed diam voluptda.</p>
                            <FooterBt><p className='footer-bt'>Copyright © 2020 EPAM</p></FooterBt>
        </FooterText>  
        </div></FooterBottomtext>
       
  </div>
  <div>
                <h2>Talk to us</h2>
        <FooterText>  
                <p className='footer-text'>512 Delicious Street, San Francisco, CA 10880</p>
                <p className='footer-text'>010-020-0909</p>
                <p className='footer-text'>info@company.com</p>
        </FooterText>
  </div>
   
</Wrap> 
 </>
)
export default Footer;


