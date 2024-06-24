import { NavLink, Navigate, Outlet } from "react-router-dom";
import { FaUser, FaHome, FaRegListAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "../../store/auth";
export const AdminLayout = () => {
  const {user, isLoading} = useAuth();

  if(isLoading){
    return <h1>loading ....</h1>
  }
  if(!user.isadmin){
    return <Navigate to="/" /> 
  }
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">
                  <FaUser />
                  users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">
                  <FaMessage />
                  Challs
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/services">
                  <FaRegListAlt />
                  services
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaHome />
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <Outlet />
      </header>
    </>
  );
};
