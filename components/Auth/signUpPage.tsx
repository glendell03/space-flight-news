import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import * as Styles from "./styles";

import { useDispatch } from "react-redux";
import { user } from "@features/auth/userSlice";
import { useRouter } from "next/dist/client/router";

const SignUpPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    e?.target.reset();
    dispatch(user(data));
    localStorage.setItem("user", JSON.stringify(data));
    router.push("/");
  };

  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.Title>Sign Up</Styles.Title>

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
            <Styles.Button type="submit">Sign Up</Styles.Button>
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

export default SignUpPage;