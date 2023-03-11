import React from "react";
import ShorelineImage from "~/assets/img/bg-masthead.jpg";
import MistyImage from "~/assets/img/demo-image-01.jpg";
import MountainsImage from "~/assets/img/demo-image-02.jpg";

const ContentPage = () => {
  return (
    <div>
      <div className="content-container">
        <div className="shoreline">
          <img src={ShorelineImage} alt="Shoreline" />
          <div className="shoreline__text">
            <div className="shoreline-frame">
              <div>
                <h1 className="shoreline-title">Shoreline</h1>
              </div>
              <div>
                <p className="shoreline-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum modi minus eaque, corrupti ipsam saepe ratione,
                  accusantium ea perspiciatis dolores delectus eveniet iure,
                  beatae tempore dolorum. Quam esse enim deserunt?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="misty">
          <div className="image-blank-bottom">
            <img src={MistyImage} alt="Misty" />
          </div>
          <div className="misty__text">
            <div className="misty-frame">
              <div>
                <h1 className="misty-title">Misty</h1>
              </div>
              <div>
                <p className="misty-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, et? Voluptatem error dolorem minima laboriosam non
                  tempora nesciunt dolores suscipit. Explicabo dolorum optio
                  necessitatibus doloremque eum, animi quis dolorem error?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mountains">
          <div className="image-blank-bottom" id="mountains__img">
            <img src={MountainsImage} alt="Mountains" />
          </div>
          <div className="mountains__text">
            <div className="mountains-frame">
              <div>
                <h1 className="mountains-title">Mountains</h1>
              </div>
              <div>
                <p className="mountains-description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cupiditate veritatis excepturi aspernatur quis minima aliquam
                  optio? Laboriosam doloribus enim ut velit, sint qui dolore
                  repudiandae illum itaque assumenda nemo accusamus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
