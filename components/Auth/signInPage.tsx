import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import * as Styles from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { user } from "@features/auth/userSlice";
import { useRouter } from "next/dist/client/router";

const SignInPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ username: "", password: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<Inputs> = (data) => setUserData(data);

  useEffect(() => {
    const getUser = localStorage.getItem("user");

    if (getUser) {
      const foundUser = JSON.parse(getUser);

      if (
        foundUser ||
        (foundUser.username === userData.username &&
          foundUser.password === userData.password)
      ) {
        router.push("/");
        dispatch(user(foundUser));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.Title>Sign In</Styles.Title>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Styles.InputContainer>
            <Styles.Input
              type="text"
              placeholder="Username"
              {...register("username", { required: true })}
            />
            {errors.username && <p>This field is required</p>}
            <Styles.Input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.username && <p>This field is required</p>}
            <Styles.Button type="submit">Sign In</Styles.Button>
          </Styles.InputContainer>
        </form>
      </Styles.Wrapper>
    </Styles.Container>
  );
};

type Inputs = {
  username: string;
  password: string;
};

export default SignInPage;
