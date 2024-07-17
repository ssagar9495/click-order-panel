"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const PublicRoutes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();

  console.log("isAuthenticated==>", isAuthenticated);

  if (isAuthenticated) {
    router.push("/dashboard"); // Redirect to dashboard if authenticated
  } else {
    router.push("/login"); // Redirect to login if not authenticated
  }

  return <></>;
};

export default PublicRoutes;
