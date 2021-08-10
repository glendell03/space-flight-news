import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    if (!loggedInUser) {
      router.push("/signIn");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p className="text-7xl">Hello</p>
    </div>
  );
}
