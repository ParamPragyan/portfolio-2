import React from "react";
import './Home.css'


const Home = () => {
  return (
    <section className="home_section">
      <p className="home_greet">Hey, my name is</p>
      <h1 className="home_heading_1">Param</h1>
      <h1 className="home_heading_2">I build things for the Web</h1>
      <p className="home_desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui eaque at
        aut officia. Consequatur culpa dolorem maiores neque recusandae sunt
        modi velit eos aliquid nisi reiciendis doloribus provident suscipit,
        ipsa quia quae alias dolores! Neque unde quod fugiat modi repellendus
        corporis nihil natus vel numquam minus dicta quasi, aperiam
        perspiciatis.
      </p>

      <a href="#work">
        <button className="home_btn">Check out my work!</button>
      </a>
    </section>
  );
};

export default Home;
