import React from 'react';
import './App.css';
import NavBar from './Navbar';
import SwipeVerticalIcon from '@mui/icons-material/SwipeVertical';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const App = () => {
  return (
    <>
      <NavBar />
      <section
        id="home"
        style={{
            backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/008/014/115/non_2x/tropical-leaves-background-design-summer-leaves-flat-illustration-simple-banner-with-copy-space-free-vector.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
      >
        <div ><h1 className='dev' style={{ color: 'green' }}>Hey Developer <SwipeVerticalIcon sx={{width:'40px', height:
          "30px"
        }} /> <br />This is Umair Younus Khan </h1></div>
      </section>
      <section
        id="about"
        style={{ 
          backgroundImage: "url('https://wallpapers.com/images/featured/high-resolution-background-m2j5j3e5a0xkcawu.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center' 
        }}
      >
        <h1 className='pro' style={{ color: 'yellow' , paddingTop:'50px'}}>This is Prodigy InfoTech</h1>
      </section>
      <section
        id="services"
        style={{ 
          backgroundImage: "url('https://tasbihdigital.com/wp-content/uploads/2022/06/Blue-Backgrounds-HD.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center' 
        }}
      >
        <h1 className='inter' style={{ color: 'blue' }}>Internship Task One</h1>
      </section>
      <section
        id="contact"
        style={{ 
          backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/024/663/796/large_2x/amazing-background-image-high-resolution-desktop-wallpaper-generative-ai-free-photo.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center' 
        }}
      >
        <h1 className='hope' style={{ color: 'red' }}>Hope You Enjoyed it, Thank you <AutoAwesomeIcon/></h1>
      </section>
    </>
  );
};

export default App;
