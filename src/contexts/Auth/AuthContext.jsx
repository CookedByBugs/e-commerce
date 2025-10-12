import axios from "axios";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext();

const initialState = {
  isAuth: false,
  user: null,
  session: null,
};
const AuthProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const handleSignout = () => {
    localStorage.removeItem("authToken");
    setState(initialState);
  };
  const fetchProfile = useCallback(async () => {
    if (!localStorage.getItem("authToken")) {
      setLoading(false);
      return console.log("No token found");
    }
    await axios
      .get(`${import.meta.env.VITE_SERVER}/api/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        setState({ ...state, isAuth: true, user: res.data.user });
        if (res.data.session > new Date().getTime()) return handleSignout();
        setData(res.data);
        // console.log(state)
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  const handleSuccessSignin = async (token) => {
    localStorage.getItem("authToken");
    await fetchProfile();
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (state.isAuth) console.log(state.user);
  return (
    <AuthContext.Provider
      value={{
        ...state,
        data,
        handleSignout,
        dispatch: setState,
        handleSuccessSignin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
