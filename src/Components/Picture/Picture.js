
import customPicture from './picture.jpg'
import './picture.css'
function Picture() {
    return (
      <div className="Picture">
        <header className="App-header">
          <p>
            <h2>Example Picture</h2>
          </p>
          <p><img src={customPicture} class="customPicture" /></p>
        </header>
      </div>
    );
  }
  
  export default Picture;
  