import React from 'react'
import './About.css'
import profile_pic from "../../assets/profile-pic.jpg"


const About = () => {
  return (
    <section id="about"> 

        <div className="about_container">

            <div className="about_left">
               <p className="about_desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam id in omnis quos eum quia veniam! Aperiam praesentium, quibusdam asperiores beatae impedit repellendus quo a cumque dolores nobis exercitationem delectus porro accusantium, soluta sed est velit accusamus itaque optio cum!</p>
               <p className='about_desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi illo sapiente, assumenda officiis nihil optio modi. Quia, corporis ducimus. Aspernatur quae quibusdam, consequuntur alias, doloribus non incidunt ipsa suscipit consequatur quas ut temporibus quaerat voluptatem voluptatibus numquam nam voluptates ratione?</p>
            </div>

            <div className="about_right">
                <img src={profile_pic} alt="profile_img" className='about_profile_img' />
                <div className="about_img_border"/>
            
            </div>    
        </div>
    </section>
  )
}

export default About