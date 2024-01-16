import React from "react";
import SectionTitle from "../Templates/Text/SectionTitle";

export default function About() {
  return (
    <div className="container-fluid">
      <div className="row p-30-0">
        {/* header */}
        <SectionTitle
          title="About Me"
          rightTitle="Fri Mar 19, 2021"
          rightClass="art-project-category"
        />

        {/* content */}
        <div className="col-lg-12">
          <div className="art-a art-card">
            {/* <p className="art-lg-text art-white">
              <i>
                Consectetur adipisicing elit. Magni debitis nemo, minus aut
                tempora impedit quis quam omnis, odit saepe ipsa sunt magnam
                culpa quisquam iusto consectetur necessitatibus. Tenetur,
                eligendi!
              </i>
            </p> */}

            <p>
              With over 2+ years of dedicated experience in web design and
              development, I bring a wealth of expertise to craft exceptional
              digital solutions. Proficient in both front-end and back-end
              development, I am dedicated to delivering results that exceed
              expectations. I have developed several web applications from
              scratch but at the same time, I manage and update the client’s
              existing projects also as I have outstanding debugging skills.
            </p>
            <p>
              I'm very proficient in working with the following technologies:
            </p>
            <ul className="art-custom-list">
              <li>React JS</li>
              <li>Typescript </li>
              <li>GraphQL</li>
              <li>JavaScript</li>
              <li>Express.js</li>
              <li>React Native</li>
              <li>Rest APIs</li>
              <li>Test Driver Development</li>
              <li>Node.js</li>
            </ul>
            <p>
              I have been creating JavaScript apps for the last 2+ years: my
              main focus is web development using React.js, Next.js, and
              Node.js, I have a strong background in front-end design and
              development, and happily work in SASS, HTML5, JavaScript, and
              React to create websites that work beautifully for everyone.
            </p>

            {/* <blockquote>
              Let's embark on a journey to transform your ideas into impeccable
              web solutions. Reach out today, and together we'll create digital
              experiences that stand out in the crowd.
            </blockquote> */}

            <p>
              I enjoy being able to help people with advanced solutions to
              complex problems and pride myself in having clients that I have
              worked with and supported for over two years.
            </p>

            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
