import React from "react";
import "./styles.css";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import UploadIcon from '@mui/icons-material/Upload';

export default function VideoInput(props) {
  const { width, height } = props;

  const inputRef = React.useRef();

  const [source, setSource] = React.useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  return (
    <div className="VideoInput">
      <input
        ref={inputRef}
        className="VideoInput_input"
        type="file"
        onChange={handleFileChange}
        accept=".mov,.mp4"
      />
      <p>
      {!source &&
        <Button variant="contained" onClick={handleChoose}>
          Upload a video
        </Button>}
        {/* <div>
          <br></br>
        <UploadIcon size="large"></UploadIcon>
        </div> */}
      </p>
      {source && (
        <video
          className="VideoInput_video"
          width="100%"
          height={height}
          controls
          src={source}
        />
      )}
      <div className="VideoInput_footer">{source}</div>
    </div>
  );
}
