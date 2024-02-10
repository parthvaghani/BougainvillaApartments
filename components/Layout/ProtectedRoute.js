import { getSession } from "@/helpers/authHelper";
import { useRouter } from "next/router";
const ProtectedRoute = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    let sessionObj = getSession();
    if (!sessionObj) {
      router?.replace("/");
      return null;
    }
    return <WrappedComponent {...props} />;
  };
  return Wrapper;
};
export default ProtectedRoute;
