import React from 'react';
import './feed-post.scss';
import hearthIcon from '../../icons/svg/hearth.svg';

interface feedPostProps {

}

export const FeedPost: React.FC<feedPostProps> = () => {
    const classes = `feed-post`;
    return (
        <div className={classes}>
            <div className="feed-post__header">
                <img className="feed-post__header-img" src="https://images.generated.photos/2Buk3GsSIaH3XgfEwjuBnn1o7v3MCYJ4pgX-E4aNAIg/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0Mjg0MTAuanBn.jpg" alt="Calum Lewis"/>
                <div className="feed-post__header-name">Calum Lewis</div>
            </div>
            <div className="feed-post__body">
                <img className="feed-post__body-img" src="https://static01.nyt.com/images/2017/03/24/dining/24COOKING-CLASSICPANCAKES/24COOKING-CLASSICPANCAKES-articleLarge.jpg" alt="Pancake"/>
                <div className="feed-post__body-icon-container">
                    <img className="feed-post__body-icon" src={hearthIcon} alt="Hearth"/>
                </div>
            </div>

            <div className="feed-post__footer">
                <h2 className="text-start">Pancake</h2>
                <div className="text-start small-text">Food | 60 mins</div>
            </div>

        </div>
    )
}

export default FeedPost;