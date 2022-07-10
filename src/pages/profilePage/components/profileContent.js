import { toast } from "react-toastify";
import { useAuth } from "../../../context";

export const ProfileContent = () => {
  const { setAuth } = useAuth();
  const logOutHandler = () => {
    toast.success("Logout Succesfully");
    localStorage.removeItem("token");
    setAuth(() => ({
      token: "",
      isAuth: false,
    }));
  };
  return (
    <>
      <div className="info-content">
        <span className="heading-sm">User Name</span>
        <p className="heading-sm">harshit Paliwal</p>
      </div>
      <div className="info-content">
        <span className="heading-sm">User Email</span>
        <p className="heading-sm">harshit@gmail.com</p>
      </div>
      <button
        className="btn btn-outline profile-logout-btn"
        onClick={logOutHandler}
      >
        Logout
      </button>
    </>
  );
};
