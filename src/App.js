
import "./App.css";
import { BiStopwatch } from 'react-icons/bi';
import image46 from "./images/image46.png"
import Cmpsearch from "./images/Cmpsearch.png"
import vector2 from "./images/Vector (2).png"
import group from "./images/Group (1).png";
import group1 from "./images/Group (1).png";
import vector3 from "./images/Vector (3).png"
function App() {
  return (
    <div>
      <div className="container1">
        <h3>Advantages of the outsource
          Flutter app development</h3>
        <hr id="divider" />
        <h5>
          Our Flutter iOS app development services are built on the best of the
          framework’s offerings which extend beyond cost benefits. We use the
          SDK’s native end-user experience, expressiveness, flexible UI, and
          lightning-fast load speed of 60 FPS to ensure that your application
          becomes the symbol of cross-platform excellence.
        </h5>
      </div>
      {/* ************************************************ */}
      <div className="container2">
        <div className="box1">
          <div className="first1">
            <img src={vector2} />
            <h4>Perfect for MVP</h4>
            <h5>
              Flutter is a perfect platform for prototyping and running a minimum viable product (MVP). A simple app prototype can be built within the shortest terms. With
              Android, similar development requires much more time.
            </h5>
          </div>
          <div className="first1">
            <img src={group} />

            <h4>Framework applicability</h4>
            <h5>
              The experience of our flutter development company has shown that Flutter can cover the needs of most mobile development requests, while functionality and sophistication of the technology allow using it in many areas.
            </h5>
          </div>
          <div className="first1">
            <img src={group1} />

            <h4>Long-term prospects</h4>
            <h5>
              Flutter is an open source project, so developers can support it independently. It will not be closed in the foreseeable future.
            </h5>
          </div>
          <div className="first1">
            <img src={vector3} />

            <h4>Saving on support</h4>
            <h5>
              The need for application support arises immediately after the release. Sometimes, it's technical support that is required when updating the OS, which is followed by bugs that need to be fixed. However, much more often, developers need to work on further development of the functions. Support of an app with a general code is much cheaper and easier than support of two apps for different platforms.
            </h5>
          </div>
        </div>
      </div>
      {/* ************************************************************** */}
      <div className="container3">
        <div className="approach">
          <h3>Our Approach</h3>
          <h5> Get qualified Flutter services from Kushel Digi experts.</h5>
        </div>
        <hr className="divider2" />
        <div className="review">
          <div className="leftreview">
            <h5>Code review</h5>
            <h5>Reduced development time</h5>
            <h5>Increased time-to-market speed</h5>
            <h5>Versatility</h5>
            <h5>Flexibility</h5>
            <h5>Great performance</h5>
          </div>
          <div className="rightreview">
            <img src={Cmpsearch} />
            <div className="codeReview">
              <h5><span className="oi">OI/</span>Code Review</h5>
              <p>Our team will perform end-to-end quality control of the code so that you will never encounter its incorrect operation.</p>
            </div>
          </div>
        </div>

        <div>

        </div>
      </div>
      {/* ********************************************************** */}

      <div className="container4">
        <div className="leftcontainer4">
          <h3>Let's talk about your project</h3>
          <h4>
            Leave a request - we will analyze your current situation and help
            you choose a site to scale your business
          </h4>
        </div>
        <div className="rightcontainer4">
          <img src={image46} className="img46" />
        </div>
      </div>
    </div>
  );
}

export default App;
