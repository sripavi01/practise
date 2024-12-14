import React from 'react'
import "./Footer.css"
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <div>
        <div className='main'>
      <div className='draw-1'>
      <div className='heading'><h2>▶ VIDEVO </h2> <h3>by FREEPIK</h3></div>
      <hr />
      </div>
      <div className='draw-2'>
     
        <div className='sub-1'>
            <h3>ABOUT VIDEVO</h3>
            <p>Videvo offers free stock videos and motion graphics for
            use in any project. You may use these video clips free of
            charge, in both personal and commercial productions.
            Video clips that carry the Creative Commons 3.0 license
            must be attributed to the original author.

            If you have any suggestions for the site, or would like to
            make a request for free stock footage please contact us 
            at: support@videvo.net and we'll do our best to help.
            </p>
        </div>
        <div className='sub-2'>
            <h3>QUICK LINKS</h3>
            <ul>
                <li>Stock video</li>
                <li>Footage</li>
                <li>Motion Graphics</li>
                <li>Video templates</li>
                <li>Privacy Policy</li>
                <li>Terms And Conditions</li>
                <li>API</li>
            </ul>
        </div>
        <div className='sub-3'>
            <ul>
                <li>Browse</li>
                <li>Premium</li>
                <li>Affiliates</li>
                <li>Blog</li>
                <li>Licensing</li>
                <li>Contact</li>
                <li>Cookies Settings</li>
            </ul>
        </div>
        <div className='sub-1'>
            <h3>SOCIAL MEDIA</h3>
            <p>For recent updates and news follow our social media feeds</p>
            <div className='icon'>
            < YouTubeIcon sx={{color:'red',fontSize:50}}/>
            <InstagramIcon sx={{color:'violet',fontSize:50}}/>
            <FacebookIcon sx={{color:'blue',fontSize:50}}/>
            <TwitterIcon sx={{color:'lightblue',fontSize:50}}/>
            </div>
            <h3>SITE LANGUAGE</h3>
            <div className='flag'>
            🇬🇧 English
            🇪🇸 Spanish
              Detsu
            </div>
        </div>
      </div>
     
      <div className='draw-3'>
      <hr />
        <div className='footer'><h2>FREEPIK</h2>
        <p>Copyright ©2024 Freepik Company S.L. All rights reserved.</p></div>
      </div>
    </div>
    </div>
  )
}

export default Footer
