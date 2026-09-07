import './App.css'
import { FaHome, FaUser, FaShoppingBag, FaTelegramPlane } from "react-icons/fa";
import { AiFillPicture,AiOutlineMenu } from "react-icons/ai";
import { MdLaptopChromebook } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import ss1 from "./assets/images/ss1.png";
import ss2 from "./assets/images/ss2.png";
import ss3 from "./assets/images/ss3.png";
import ss4 from "./assets/images/ss4.png";

function App() {

  return (

    <>
      <section className='first container d-flex border shadow-lg black rounded-2' id='Home'>
        <div className='left'>
          <h2>HI THERE!</h2>
          <hr />

          <h1>I'M KRISHA</h1>
          <p className='p1'>FullStack Devloper</p>
          <p className='p2'>READY TO HANDELE YOUR NEW PROJECT</p>
          <p className='para'>Hi, I’m Krisha Sangani, a passionate and creative Computer Engineering student and Full Stack Development learner. I enjoy building modern, responsive, and user-friendly websites using technologies like HTML, CSS, JavaScript, React.js,
            Bootstrap, and C++. I love learning new technologies, solving problems through  code, and turning creative ideas into real digital experiences. I’m continuously improving my technical skills and looking forward to growing as a developer while creating meaningful and innovative projects. </p>

          <button className='button'>More About Me</button>
        </div>

        <div className='middle'>
          <img className='mainimg' src="https://tse1.mm.bing.net/th/id/OIP.BnFxTdGXnR3aYi6NeQm41wHaHa?r=0&pid=Api&P=0&h=180" alt="" />
        </div>

        <div className='right'>
          <ul>
            <a href="#Home"><li className='li1'><FaHome /></li></a>
            <a href="#AboutMe"><li className='li2'><FaUser /></li></a>
            <a href="#Resume"><li className='li3'><FaShoppingBag /></li></a>
            <a href="#Portfolio"><li className='li4'><AiFillPicture /></li></a>
            <a href="#Contact"><li className='li5'><FaTelegramPlane /></li></a>
          </ul>
        </div>
      </section>

      <section className='AboutMe container d-flex border shadow-lg black rounded-2 ' id='AboutMe'>
        <div className='start'>
          <div className='secondimg'>
            <img className='Aboutimg' src="https://tse1.mm.bing.net/th/id/OIP.BnFxTdGXnR3aYi6NeQm41wHaHa?r=0&pid=Api&P=0&h=180" alt="" />

            <ul className='category'>
              <a href="#Home"><li className='fs-3'><FaHome /></li></a>
              <a href="#AboutMe"><li className='fs-3'><FaUser /></li></a>
              <a href="#Resume"><li className='fs-3'><FaShoppingBag /></li></a>
              <a href="#Portfolio"><li className='fs-3'><AiFillPicture /></li></a>
              <a href="#Contact"><li className='fs-3'><FaTelegramPlane /></li></a>
            </ul>
          </div>
        </div>

        <li className='media'><AiOutlineMenu /></li>

        <div className='center'>
          <h1>ABOUT ME</h1>
          <aside>
            <p>I'm Krisha Sangani,FullStack Devleoper</p>
            <p>I’m a creative and enthusiastic student with an interest in web development and design. I enjoy learning new technologies, creating projects, and exploring new ideas. I’m always looking for opportunities to improve my skills and grow as a professional.</p>
          </aside>

          <aside className='facts d-flex'>

            <div className='whatido'>
              <h5>What I Do?</h5>

              <p className='wf'>
                <p>Forntend</p>
                <img src="https://tse1.mm.bing.net/th/id/OIP.zl1XWoDC3mhuIjXygha8GwHaE7?r=0&pid=Api&P=0&h=180" alt="" /> I can do Web disginning. I can also use HTML,CSS and JavaScript.
              </p>

              <p className='ws'>
                <p>Backend</p>
                <img src="https://tse2.mm.bing.net/th/id/OIP.KbdLZ9Gc_2i8oLzE5fkJVQHaHa?r=0&pid=Api&P=0&h=180" alt="" /> I can do Web disginning. I can also use HTML,CSS and JavaScript.
              </p>
            </div>

            <div className='fun'>

              <h5>Fun Facts</h5>
              <aside className='d-flex'>
                <p>
                  <h2>2nd</h2>
                  <p className='downl'>Year Student</p>
                </p>

                <p>
                  <h2>10+</h2>
                  <p className='downl'>Certificates</p>
                </p>
              </aside>

              <aside className='d-flex'>
                <p>
                  <h2>20+</h2>
                  <p className='downl'>Projects Done</p>
                </p>

                <p>
                  <h2>300+</h2>
                  <p className='downl'>Happy Clients</p>
                </p>
              </aside>
            </div>
          </aside>
        </div>

      </section>


      <section className='Resume container d-flex border shadow-lg black rounded-2' id='Resume'>

        <div className='start'>
          <div className='secondimg'>
            <img className='Aboutimg' src="https://tse1.mm.bing.net/th/id/OIP.BnFxTdGXnR3aYi6NeQm41wHaHa?r=0&pid=Api&P=0&h=180" alt="" />

            <ul className='category'>
              <a href="#Home"><li className='fs-3'><FaHome /></li></a>
              <a href="#AboutMe"><li className='fs-3'><FaUser /></li></a>
              <a href="#Resume"><li className='fs-3'><FaShoppingBag /></li></a>
              <a href="#Portfolio"><li className='fs-3'><AiFillPicture /></li></a>
              <a href="#Contact"><li className='fs-3'><FaTelegramPlane /></li></a>
            </ul>
          </div>
        </div>

        <li className='media'><AiOutlineMenu /></li>

        <div className='center'>

          <h1>RESUME</h1>
          <h5>EDUCATION</h5>

          <div className='edu d-flex'>
            <aside>
              <span>EDUCATION</span>
              <p>Diploma in Computer Engineering
                A.V.P.T.I
                Rajkot, Gujarat
                2025 – Present
                Currently pursuing Diploma in Computer Engineering with a focus on programming, web development and computer technologies.
                10th Standard
                Palav School
                Gujarat
                Completed</p>
            </aside>

            <aside>
              <span>TECHNICAL SKILLS</span>
              <p>HTML5,
                CSS3,
                JavaScript,
                React.js / JSX,
                Bootstrap,
                C,
                C++,
                Python,
                SQL,
                Git & GitHub,
                Responsive Web Design,
                Photoshop</p>
            </aside>

            <aside>
              <span>COURSE </span>
              <p>Full Stack Development
                Red & White Multimedia Education
                Currently learning:
                Frontend Development
                HTML & CSS
                JavaScript
                Bootstrap
                React.js
                JSX
                Responsive Web Design
                Backend & Database concepts</p>
            </aside>
          </div>

          <h5>EXPERIENCE</h5>
          <div className='edu d-flex'>
            <aside>
              <span>PROJECTS</span>
              <p>Personal Portfolio Website
                Designed and developed a responsive personal portfolio website using HTML, CSS, JavaScript / React.js and Bootstrap.
                Features:
                Responsive design
                Navigation bar
                About Me section
                Skills section
                Projects/Portfolio section
                Contact section.</p>
            </aside>

            <aside>
              <span>STRENGTHS</span>
              <p>Quick Learner,
                Creative Thinking,
                Problem Solving,
                Teamwork,
                Good Communication,
                Willingness to Learn,
                Time Management</p>
            </aside>

            <aside>
              <span>EXPERIENCE</span>
              <p>Computer Engineering student and aspiring Full Stack Developer, currently building projects and developing practical skills in modern web technologies.</p>
            </aside>
          </div>



        </div>

      </section>


      <section className='Portfolio container d-flex border shadow-lg black rounded-2' id='Portfolio'>

        <div className='start'>
          <div className='secondimg'>
            <img className='Aboutimg' src="https://tse1.mm.bing.net/th/id/OIP.BnFxTdGXnR3aYi6NeQm41wHaHa?r=0&pid=Api&P=0&h=180" alt="" />

            <ul className='category'>
              <a href="#Home"><li className='fs-3'><FaHome /></li></a>
              <a href="#AboutMe"><li className='fs-3'><FaUser /></li></a>
              <a href="#Resume"><li className='fs-3'><FaShoppingBag /></li></a>
              <a href="#Portfolio"><li className='fs-3'><AiFillPicture /></li></a>
              <a href="#Contact"><li className='fs-3'><FaTelegramPlane /></li></a>
            </ul>
          </div>
        </div>

        <li className='media'><AiOutlineMenu /></li>

        <div className='center'>
          <h1>PORTFOLIO</h1>
          <div className='images d-flex '>
            <img className='pimg1' src={ss1} alt="" />

            <img className='pimg2' src={ss2} alt="" />
          </div>

          <div className='images d-flex'>
            <img className='pimg3' src={ss3} alt="" />

            <img className='pimg4' src={ss4} alt="" />
          </div>


        </div>
      </section>

      <section className='Contact container d-flex border shadow-lg black rounded-2' id='Contact'>

        <div className='start'>
          <div className='secondimg'>
            <img className='Aboutimg' src="https://tse1.mm.bing.net/th/id/OIP.BnFxTdGXnR3aYi6NeQm41wHaHa?r=0&pid=Api&P=0&h=180" alt="" />

            <ul className='category'>
              <a href="#Home"><li className='fs-3'><FaHome /></li></a>
              <a href="#AboutMe"><li className='fs-3'><FaUser /></li></a>
              <a href="#Resume"><li className='fs-3'><FaShoppingBag /></li></a>
              <a href="#Portfolio"><li className='fs-3'><AiFillPicture /></li></a>
              <a href="#Contact"><li className='fs-3'><FaTelegramPlane /></li></a>
            </ul>
          </div>
        </div>

        <li className='media'><AiOutlineMenu /></li>

        <div className='center'>
          <h1>CONTACT</h1>
          <p className='par'>Feel <span className='free'>Free</span> To contact me!</p>
          <p className='paragraph'>Have a project or idea in mind? Feel free to reach out! I’d love to connect, collaborate, and create something amazing together.</p>
        

        <div className='icons'>
          <ul>
            <li><MdLaptopChromebook /></li>
            <li><IoCallOutline /></li>
            <li><CiUser /></li>
          </ul>
        </div>

        <div className='details'>
        <ul>
          <li>portfolio@gmail.com</li>
          <li id='call'>+918131562310</li>
          <li>user123</li>
        </ul>
        </div>

        
        <h4 className='thank'>THANKS FOR PATIENCE!</h4>
        
        </div>

      </section>
    </>
  )
}


export default App
