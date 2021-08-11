import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import * as Styles from "./styles";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const SignUpPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    e?.target.reset();
    localStorage.setItem("user", JSON.stringify(data));
    router.push("/signIn");
  };

  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.LeftSide>
          <Styles.Header>Space Flight News</Styles.Header>

          <Styles.Center>
            <Styles.Title>Create an Account</Styles.Title>

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
                <Styles.Button type="submit">Sign Up</Styles.Button>
              </Styles.InputContainer>
            </form>
            <Styles.SignUpLink>
              New User?{" "}
              <Link href="/signIn">
                <Styles.Link>Sign In</Styles.Link>
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

export default SignUpPage;
