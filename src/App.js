import logo from './assets/hackmit_logo-removebg-preview.png';
import stingray from './assets/stingray.png';
import whale from './assets/whale.png';
import wave from './assets/long_wave.png';
import headerImage from './assets/header_image.jpeg';
import projectLogo from './assets/project_logo.png';
import VideoInput from "./components/VideoInput";
import './App.css';
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {
  const handlePageChange = () => {
    window.location.href="https://github.com/anayflima/immersive-NeRF-api"
  }
  return (
    <div className="App">
      <div>
      {/* <img className="top-left" src={logo} alt="Logo" /> */}
      {/* <img className="top-right" src={stingray} alt="Logo" /> */}
      <img className="header-image" src={projectLogo} alt="Logo" />
      </div>
      <header className="App-header">
      {/* <img className="project-logo" src={logo} alt="Logo" /> */}
        <p>
          Immersive NeRF
        </p>
      </header>
      <main className="App-main">
        Build your own metaverse <br></br>
        Upload a video and dive into it through VR headsets
        <VideoInput width={400} height={300} />
        <a href="https://immersive-nerf.herokuapp.com/">Here's your rendered immersive experience</a>
        <img className="bottom-right" src={whale} alt="Logo" />
        <img className="bottom-left" src={wave} alt="Logo" />
      </main> 
      <footer className="App-footer">
        <div class="github" >
        <span >
          <GitHubIcon onClick={handlePageChange}></GitHubIcon> &nbsp; &nbsp;
        </span>
        <span class="developers" >
        Project developed during HackMIT 2022 by 
        Ana Yoon - Ashley Neall - Joel Julin - John Lee
        </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
