import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
export const Service = () => {
  const { services } = useAuth();
  return (
    <>
      <section className="section-services">
        <div className="container">
          <h1 className="main-heading">CTFs</h1>
        </div>
        <div className="container grid grid-three-cols">
          {services.map((curElem, index) => {
            const { price, description, provider, service } = curElem;
            return (
              <div className="card" key={index}>
                <div className="card-img">
                  <img
                    src="/images/download1.png"
                    alt="our services"
                    width="200"
                    
                  />
                </div>
                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p><a href=""></a>{provider}</p>
                    <p>{price}</p>
                  </div>
                  <NavLink to={`/chall/${service}`}>
                  <h2>{service}</h2>
                  </NavLink>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
