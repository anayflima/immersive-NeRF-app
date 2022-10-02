import logo from './assets/hackmit_logo.png';
import VideoInput from "./components/VideoInput";
import './App.css';
import GitHubIcon from '@mui/icons-material/GitHub';



function App() {
  const handlePageChange = () => {
    window.location.href="https://github.com/anayflima/immersive-NeRF-api"
  }
  return (
    <div className="App">
      <img className="project-logo" src={logo} alt="Logo" />
      <header className="App-header">
        <p>
          Immersive NeRF
        </p>
      </header>
      <main className="App-main">
        Building your own metaverse. Some description of the project
        <VideoInput width={400} height={300} />
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
