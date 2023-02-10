import React from 'react'
// import Heading from "../../components/Heading/Heading"
import "./Contact.css"

const Contact = () => {
  return (
    <section className="contact">
        <div className="contact_heading_1"></div>
        <h1 className="contact_heading2">Get in touch</h1>
        <p className='contact_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellendus laudantium dignissimos consequuntur id cumque omnis reprehenderit fugit facere, ducimus quas adipisci. Dolorum tempora dolores, necessitatibus quod reprehenderit ea fuga, odio unde laborum veniam sunt optio et minima adipisci itaque.</p>
        <a href="mailto:parampragyan@gmail.com">
            <button className='contact_btn'>Say Hello</button>
        </a>
    </section>
  )
}

export default Contact