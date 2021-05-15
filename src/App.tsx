import React from "react";
import "./App.scss";
import { Button, ButtonVariants } from "./components/button/button";
import { Input } from "./components/input/input";
import Onboarding from "./images/Onboarding.png";
import emailIcon from "./icons/svg/message-2036086.svg";
import lockIcon from "./icons/svg/wallet-2036078.svg";
import searchIcon from "./icons/svg/search-2036105.svg";
import Tab from "./components/tab/tab";
import FeedPost from "./components/feed-post/feed-post";
import RecipeDetails from "./components/recipe-details/recipe-details";
import imgIcon from "./icons/svg/img.svg";
import TextArea from "./components/text-area/text-area";
import Slider from "./components/slider/slider";

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
                  <div className="paragraph-1">
                    Let's join our community to cook better food!
                  </div>
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
                    <div className="paragraph-2">
                      Please enter your account here
                    </div>
                  </div>
                  <Input text="Email or phone number" iconSrc={emailIcon} />
                  <div className="mt-1"></div>
                  <Input text="Password" iconSrc={lockIcon} />
                  <div className="mt-1 paragraph-2 text-end main-text">
                    Forgot password?
                  </div>
                </div>

                <div className="mt-4">
                  <Button text="Login" />
                  <div className="mt-2 paragraph-2">Or continue with</div>
                  <div className="mt-2"></div>
                  <Button text="Google" type={ButtonVariants.Destructive} />
                  <div className="mt-1 paragraph-2 main-text">
                    Don't have any account? <a href="/sign-up">Sign Up</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="screen-frame">
            <div className="screen-frame__content">
              <div className="content">
                <Input text="Search" iconSrc={searchIcon} />
                <h2 className="mt-2 text-start">Category</h2>
                <div className="flex flex-row flex-wrap space-around">
                  <Button text="All" type={ButtonVariants.Primary} />
                  <Button text="Food" type={ButtonVariants.Neutral} />
                  <Button text="Drink" type={ButtonVariants.Neutral} />
                </div>
              </div>
              <hr className="thick-separator" />
              <Tab />
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
              <div className="content height-100 overflow-auto">
                <RecipeDetails />
              </div>
            </div>
          </div>
          <div className="screen-frame">
            <div className="screen-frame__content">
              <div className="p-1-5 flex space-between">
                <div className="bold secondary-color-text">Cancel</div>
                <div className="flex">
                  <div className="bold">1/</div>
                  <div className="bold secondary-text">2</div>
                </div>
              </div>
              <div className="content pt-0-5 height-100 overflow-auto">
                <div className="flex flex-column flex-center border border-dashed p-1">
                  <img className="size-4" src={imgIcon} alt="" />
                  <h3>Add Cover Photo</h3>
                  <div className="paragraph-2">(up to 12 Mb)</div>
                </div>
                <h2 className="align-self-start">Food Name</h2>
                <Input text="Enter food Name" />
                <h2 className="align-self-start">Description</h2>

                <TextArea placeHolder="Tell a little about your food" />

                <div className="flex flex-center paragraph-1">
                  <h2>Cooking Duration</h2>&ensp;(in minutes)
                </div>
                <div className="flex space-between">
                  <h3 className="secondary-text">&lt;10</h3>
                  <h3 className="primary-color-text">30</h3>
                  <h3 className="secondary-text">&gt;60</h3>
                </div>
                <Slider />
              </div>
              <div className="p-1-5">
                <Button text="Next" />
              </div>
            </div>
          </div>
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
