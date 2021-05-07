import React from 'react';
import './App.scss';
import { Button, ButtonVariants} from './components/button/button';
import { Input } from './components/input/input';
import Onboarding from './images/Onboarding.png';
import emailIcon from './icons/svg/message-2036086.svg';
import lockIcon from './icons/svg/wallet-2036078.svg';
import searchIcon from './icons/svg/search-2036105.svg';
import Tab from './components/tab/tab';
import FeedPost from './components/feed-post/feed-post';
import RecipeDetails from './components/recipe-details/recipe-details';

function App() {
  return (
    <div className="App">
      <main>
        <div className="screens">
          <div className="screen-frame">

            <div className="screen-frame__content">

              <img src={Onboarding} alt="Plates with delicious food" />

              <div className="content">

                <div className="message">
                  <h1>Start Cooking</h1>
                  <div className="paragraph-1">Let's join our community to cook better food!</div>
                </div>

                <Button text="Get started" />

              </div>

            </div>
          </div>
          <div className="screen-frame">
            <div className="screen-frame__content">
              <div className="content">
                <div>
                  <div className="message">
                    <h1>Welcome back!</h1>
                    <div className="paragraph-2">Please enter your account here</div>
                  </div>
                  <Input text="Email or phone number" iconSrc={emailIcon} />
                  <div className="mt-1"></div>
                  <Input text="Password" iconSrc={lockIcon} />
                  <div className="mt-1 paragraph-2 text-end main-text">Forgot password?</div>
                </div>

                <div className="mt-4">
                  <Button text="Login" />
                  <div className="mt-2 paragraph-2">Or continue with</div>
                  <div className="mt-2"></div>
                  <Button text="Google" type={ButtonVariants.Destructive}/>
                  <div className="mt-1 paragraph-2 main-text">Don't have any account? <a href="/sign-up">Sign Up</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="screen-frame">
            <div className="screen-frame__content">
              <div className="content">
                <Input text="Search" iconSrc={searchIcon} />
                <h2 className="mt-2 text-start">Category</h2>
                <div className="flex-row flex-wrap space-around">
                  <Button text="All" type={ButtonVariants.Primary}/>
                  <Button text="Food" type={ButtonVariants.Neutral}/>
                  <Button text="Drink" type={ButtonVariants.Neutral}/>
                </div>
              </div>
              <hr className="thick-separator" />
              <Tab  />
              <div className="feed-posts">
                <div className="feed-posts-container">
                  <FeedPost />
                  <FeedPost />
                  <FeedPost />
                  <FeedPost />
                  <FeedPost />
                </div>
              </div>
            </div>
          </div>
          <div className="screen-frame">
            <div className="screen-frame__content">
              <div className="content">
                <RecipeDetails />
              </div>
            </div>
          </div>
          <div className="screen-frame"></div>
          <div className="screen-frame"></div>
          <div className="screen-frame"></div>
          <div className="screen-frame"></div>
          <div className="screen-frame"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
