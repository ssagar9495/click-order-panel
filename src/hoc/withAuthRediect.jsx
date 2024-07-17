import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const withAuthRedirect = (WrappedComponent) => {
  const Wrapper = (props) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const router = useRouter();

    // If user is already authenticated, redirect to dashboard
    if (isAuthenticated) {
      router.push("/dashboard");
      return null; // or a loading spinner or message while redirecting
    }

    // If not authenticated, render the wrapped component (e.g., Login)
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuthRedirect;
