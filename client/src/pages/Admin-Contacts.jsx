import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
export const AdminContacts = () => {
  const { authorizationToken } = useAuth();
  const [contactData, setContactData] = useState([]);
  const getContactsData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        getContactsData();
        toast.success("deleted successfully");
      } else {
        toast.error("error occured");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);
  return (
    <>
      <section className="admin-contacts-section">
        <h1>Admin CTF Challs solution data</h1>
        <div className="container admin-users">
          {contactData.map((curElem, index) => {
            const { ctf, chall, category, _id } = curElem;
            return (
              <div key={index}>
                <p>{ctf}</p>
                <p>{category}</p>
                <p>{chall}</p>
                <button className="btn" onClick={() => deleteContactById(_id)}>
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
