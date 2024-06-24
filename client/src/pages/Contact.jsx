import { useState } from "react";
import { useAuth } from "../store/auth";
import {toast} from "react-toastify";

const defaultContactFormData = {
  ctf: "PicoCTF",
  category:"Forensic",
  chall: "",
  solution: "",
}

export const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();
  // if (userData && user) {
  //   setContact({
  //     ctf: "",
  //     category:"",
  //     chall: "",
  //     solution: "",
  //   });
  //   setUserData(false);
  // }

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);

    try{
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body:JSON.stringify(contact),
      })
      console.log(response)
      if(response.ok){
        setContact(defaultContactFormData);
        toast("Chall submitted Successfully")
      }

    }
    catch(error){
      console.log(error);
    }


  };
  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Write your Chall Here</h1>
        </div>
        <div className="container grid grid-two-cols">
          <div className="contact-image">
            <img
              src="/images/support.png"
              alt="ready to help"
              width="500"
              height="500"
            />
          </div>
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
              <label htmlFor="ctf">CTF Name</label>
                <select
                  name="ctf"
                  value={contact.ctf}
                  onChange={handleInput}
                  required
                >
                <option value="PicoCTF">PicoCTF</option>
                <option value="AmateursCTF">AmateursCTF</option>
                <option value="BYUCTF 2024">BYUCTF 2024</option>
                <option value="PearlCTF">PearlCTF</option>
                <option value="NahamConCTF 2024">NahamConCTF 2024</option> 
                <option value="LA CTF 2024">LA CTF 2024</option>
                <option value="JerseyCTF">JerseyCTF</option>
                </select>
              </div>
              <div>
                <label htmlFor="category">category</label>
                <select
                  name="category"
                  value={contact.category}
                  onChange={handleInput}
                  required
                >
                <option value="Forensic">Forensic</option>
                <option value="Web">Web</option>
                <option value="Reversing">Reversing</option>
                <option value="Osint">Osint</option>
                <option value="Pwn">Pwn</option> 
                <option value="Misc">Misc</option>
                </select>
              </div>
              <div>
                <label htmlFor="chall">chall name</label>
                <input
                  type="text"
                  name="chall"
                  id="email"
                  autoComplete="off"
                  value={contact.chall}
                  onChange={handleInput}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="solution">Solution</label>
                <textarea
                  name="solution"
                  cols="30"
                  rows="5"
                  autoComplete="off"
                  value={contact.solution}
                  onChange={handleInput}
                  required
                ></textarea>
              </div>
              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>
        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29478.36784707142!2d85.78332331601582!3d22.549314088501777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1e27763d261b3b%3A0x2f74b3e3ac79f64d!2sChaibasa%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1716378890958!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};
