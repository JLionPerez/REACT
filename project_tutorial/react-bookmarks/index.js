/* jshint esversion: 6 */
import React, {Fragment, useState} from 'react';
import ReactDom from 'react-dom';
import LinkCard from './components/LinkCard';

import './main.css';

// Create the app
const App = () => {
    const [cardData, setCardDatat] = useState([{ linkName: 'my link', linkHref: 'https://github.com' }]);
    const [newCard, setNewCard] = useState({ linkName: '', linkHref: '' });

    const dispatchCardSet = (payload) => {
        let oldArray = cardData;
        let newArray = [...oldArray, payload];
        setCardDatat(newArray);
        setNewCard({linkHref: '', linkName: ''});
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
                    <form onSubmit={e => e.preventDefault()}>
                        <h2 className="formTitle">Add a bookmark</h2>
                        <div>
                            <label htmlFor="linkTitle" className="formLabel">Enter a bookmark name</label>
                            <input value={newCard.linkName} onChange={e => setNewCard({...newCard, linkName: e.currentTarget.value})} type="text" name="linkTitle" minLength="1" maxLength="25" placeholder="25 characters max" />
                        </div>
                        <div>
                            <label htmlFor="linkHref" className="formLabel">Enter a bookmark name</label>
                            <input value={newCard.linkHref} onChange={e => setNewCard({...newCard, linkHref: e.currentTarget.value})} type="text" name="linkHref" minLength="7" maxLength="25" placeholder="https://example.com/" />
                        </div>
                        <button onClick={() => dispatchCardSet(newCard)}>Add</button>
                    </form>
                </div>
                <div className="rightContent">
                    <LinkCard cards={cardData}/>
                </div>
            </main>
        </Fragment>
    )
}

ReactDom.render(
    <App/>,
    document.getElementById('app')
)