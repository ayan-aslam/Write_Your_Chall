import { Analytics } from "../components/Analytics";
export const Home = () => {
  return (
    <>
    <main>
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <h2>"Remember If it’s smart, it’s vulnerable"</h2>
            <h1>Welcome to Infosec Cyberlabs</h1>
            <p>
            Cybersecurity has become critical to the fabric of any modern business. As breach after breach hits the headlines, it's clear to everyone that organizations need more professionals focused on cybersecurity. 
            </p>
            <p>The Information Security club will be set with a goal to teach individuals about cybersecurity and help them gain their knowledge necessary to arm themselves against modern-day computer exploits. The club is open to everybody at IIT(ISM) Dhanbad no matter what experience level or major they are.</p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Write Chall</button>
              </a>
              <a href="/service">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/cyber3.jpg" alt="coding together" width="700" height="500"></img>
            
          </div>
        </div>
      </section>
    </main>
    <Analytics />
    <section className="section-hero">
        <div className="container grid grid-two-cols">
        <div className="hero-image">
            <img src="/images/cyber4.jpg" alt="coding together" width="700" height="500"></img>  
          </div>
          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get started today</h1>
            <p>
            This club will help start and maintain a culture in the institute which will go a long way in helping students of current and future batches.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Write Chall</button>
              </a>
              <a href="/service">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
