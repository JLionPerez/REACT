/* jshint esversion: 6 */
import React, {Fragment} from 'react';
import ReactDom from 'react-dom';

import './main.css';

// Create the app
const App = () => {
    const linkImagesStyle = {
        backgroundImage: 'url(\'<input type="text" name="linkTitle" minLength="1" maxLength="25" placeholder="25 characters max" />\')'
    };

    return(
        <Fragment>
            <nav className="navigation">
                <a><img height="40px" src="https://fthmb.tqn.com/cD0PNhMM0BxevlBvAgD1ntpQLac=/3558x2363/filters:fill(auto,1)/Cat-rolling-GettyImages-165893132-58ac5ef05f9b58a3c90a144f.jpg" /></a>
                <ul>
                    <li>Home</li>
                </ul>
            </nav>
            <main>
                <div className="leftContent">
                    <img src="https://fthmb.tqn.com/cD0PNhMM0BxevlBvAgD1ntpQLac=/3558x2363/filters:fill(auto,1)/Cat-rolling-GettyImages-165893132-58ac5ef05f9b58a3c90a144f.jpg" />
                    <form>
                        <h2 className="formTitle">Add a bookmark</h2>
                        <div>
                            <label for="linkTitle" className="formLabel">Enter a bookmark name</label>
                            <input type="text" name="linkTitle" minLength="1" maxLength="25" placeholder="25 characters max" />
                        </div>
                        <div>
                        <label for="linkHref" className="formLabel">Enter a bookmark name</label>
                        <input type="text" name="linkHref" minLength="7" maxLength="25" placeholder="https://example.com/" />
                        </div>
                        <button>Add</button>
                    </form>
                </div>
                <div className="rightContent">
                    <div className="linkCard">
                        <div className="linkCardImage" style={linkImagesStyle}/>
                        <div className="linkCardLink"><h2><a href="#">My link!</a></h2></div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

ReactDom.render(
    <App/>,
    document.getElementById('app')
)