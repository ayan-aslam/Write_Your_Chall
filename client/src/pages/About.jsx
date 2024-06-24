import { NavLink } from "react-router-dom"
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";
export const About = () => {
  const { user } = useAuth();
    return (<>
     <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              
              <h2>Welcome, { user ? `${user.username} to the world of hacking!` : `to the world of hacking!`}</h2>
              <h1>About us </h1>
              <p>
              The club aims to cover different areas related to cyber security like network security, penetration testing, secure coding, cryptography, and reverse engineering.
              </p>
              <p>
              To present interactive demonstrations with vulnerable web applications and make them learn about different tools and resources to look for.
              </p>
              <p>
              To demonstrate the experts’ approach to a problem through different platforms like youtube and others.Help the students master all tools by hands-on session and different competitions.
              </p>
              <p>
              Host Workshops in the institute for skill development and experience.Host talks by local companies and organizations’ security experts on specific topics of interest.
              </p>
              <p>
              Participate in various colleges’ technical events and online events and represent our college through the club.Conduct competitions within the Institute.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/cyber6.png"
                alt="coding buddies "
                width="700"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
      <Analytics />
    </>);
}
