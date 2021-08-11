import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import * as Styles from "./styles";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const SignInPage = () => {
  const router = useRouter();
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
        foundUser.username === userData.username &&
        foundUser.password === userData.password
      ) {
        router.push("/");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.LeftSide>
          <Styles.Header>Space Flight News</Styles.Header>

          <Styles.Center>
            <Styles.Title>Welcome Back</Styles.Title>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Styles.InputContainer>
                <Styles.Input
                  type="text"
                  placeholder="Username"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <Styles.Error>This field is required</Styles.Error>
                )}
                <Styles.Input
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors.username && (
                  <Styles.Error>This field is required</Styles.Error>
                )}
                <Styles.Button type="submit">Sign In</Styles.Button>
              </Styles.InputContainer>
            </form>
            <Styles.SignUpLink>
              New User?{" "}
              <Link href="/signUp">
                <Styles.Link>Sign Up</Styles.Link>
              </Link>
            </Styles.SignUpLink>
          </Styles.Center>
        </Styles.LeftSide>
        <Styles.RightSide></Styles.RightSide>
      </Styles.Wrapper>
    </Styles.Container>
  );
};

type Inputs = {
  username: string;
  password: string;
};

export default SignInPage;
