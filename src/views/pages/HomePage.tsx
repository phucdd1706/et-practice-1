import React from "react";

const HomePage = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="home-container">
      <div className="home-img">
        <div className="home-content">
          <div>
            <h1 className="home-title">Lorem</h1>
          </div>
          <div>
            <p className="home-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              repudiandae quis eaque vel, quia, odit possimus quasi sequi
              architecto tempora harum fuga culpa aliquam dolor rem adipisci
              doloribus nisi perferendis!
            </p>
          </div>
          <div>
            <button className="home-button" onClick={handleClick}>
              Get ET
            </button>
          </div>
        </div>
      </div>

      {/* black div */}
      <div className="home-div">
        <div className="home-div-content">
          <div>
            <h2 className="home-div-title">Build with ET</h2>
          </div>
          <div>
            <p className="home-div-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              ipsa alias. Molestiae, odit. Nam laboriosam unde necessitatibus
              dicta nulla? Sequi saepe at repellat eaque rem dolorum id,
              voluptatibus earum libero?{" "}
              <a href="/" id="underlined">
                the preview page.
              </a>{" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
              ut quidem quia repudiandae magnam velit sapiente ex hic totam
              tenetur iure iste repellat nihil ullam aspernatur blanditiis,
              ratione veritatis nesciunt!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
