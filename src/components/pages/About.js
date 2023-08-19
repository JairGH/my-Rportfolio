import React from "react";

export default function About() {
  return (
    <section>
      <div className="mid">
        <h5>SERVICES</h5>
        <h1>What I Am Great At</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea numquam
          eveniet autem harum optio,
          <br />
          officiis repudiandae laudantium natus doloribus quia soluta ipsam
          <br />
          voluptate ex magnam, sit, ducimus eligendi vel. Voluptatum.
        </p>
        <h1>My Work</h1>
      </div>
      <div id="cards">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <p>Movie Reviews</p>
            </div>
            <div className="card-back">
              <a href="https://github.com/NekoNoka/Movies-Reviews" id="link">
                <img
                  id="img-card"
                  src="https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1485846234645-a62644f84728%3Fcrop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8Mnx8bW92aWUlMjByZXZpZXd8ZW58MHx8fHwxNjg4NzEwNjcyfDA%26ixlib%3Drb-4.0.3%26q%3D60%26w%3D1200%26auto%3Dformat%26h%3D630%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fauto%253Dformat%2526fit%253Dcrop%2526w%253D750%2526h%253D84%2526q%253D60%2526txt-color%253D000000%2526txt-size%253D40%2526txt-align%253Dmiddle%25252Cleft%2526txt-pad%253D80%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526txt%253Dmovie%252520review%26blend%3D000000"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <p>Dev Shop</p>
            </div>
            <div className="card-back">
              <a href="https://github.com/Antrp1/Event_Planner">
                <img
                  id="img-card"
                  src="https://www.mbarendezvous.com/images/top-stories-img/bannerimage_1558164178.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <p>In Progress...</p>
            </div>
            <div className="card-back">
              <img
                id="img-card"
                src="https://img.freepik.com/free-vector/progress-concept-illustration_114360-1532.jpg?w=2000"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
