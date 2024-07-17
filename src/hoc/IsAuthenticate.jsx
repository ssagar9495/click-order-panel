import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const router = useRouter();

    // If user is not authenticated, redirect to login page
    if (!isAuthenticated) {
      router.push("/login");
      return null; // or a loading spinner or message while redirecting
    }

    // If authenticated, render the wrapped component
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
