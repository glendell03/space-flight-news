import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user } from "@features/auth/userSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { username } = useSelector((state: any) => state.auth.user);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      dispatch(user(foundUser));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (username) {
    return <div>Hello {username}</div>;
  }

  return (
    <div>
      <p className="text-7xl">Hello</p>
    </div>
  );
}
