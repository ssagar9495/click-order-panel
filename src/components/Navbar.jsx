"use client";
import { logout } from "@/redux/features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  //on Logout handler
  const onLogoutHandler = () => {
    dispatch(logout());
    router.push("/login");
    toast.success("Logout successfully");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="mx-auto flex justify-between items-center px-4">
        <div>
          <p className="text-2xl font-bold text-emerald-500">Click Order</p>
        </div>
        <div className="d-flex flex-direction-row">
          <div
            className="text-white cursor-pointer hover:text-emerald-500"
            onClick={onLogoutHandler}
          >
            Logout
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
