import React, {Fragment} from 'react';

const LinkCard = props => {

    const linkImagesStyle = {
        backgroundImage: 'url(\'<input type="text" name="linkTitle" minLength="1" maxLength="25" placeholder="25 characters max" />\')'
    };

    const mappedData = props.cards.map((card, i) => {
        return(
            <div key={i} className="linkCard">
                <div className="linkCardImage" style={linkImagesStyle}/>
                <div className="linkCardLink"><h2><a href={card.linkHref}>{card.linkName}</a></h2></div>
            </div>
        )
    })
    
    return(
        <Fragment>
            {mappedData}
        </Fragment>
    )
};

export default LinkCard