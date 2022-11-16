import React, { useCallback, useState } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import styled from "styled-components";

const GoogleLoginContain = styled.div`
  position: relative;
  margin-top: 13%;
  left: 75%;
`;

const LoginComponent = () => {
  const handleSocialLogin = (user: any) => {
    console.log(user);
  };
  const dsd = process.env.REACT_APP_GOOGLE_CLIENT;
  console.log(dsd);
  return (
    <GoogleLoginContain>
      <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT}`}>
        <GoogleLogin
          onSuccess={(crr) => {
            console.log(crr);
          }}
          onError={() => {
            console.log(":tt");
          }}
        />
      </GoogleOAuthProvider>
    </GoogleLoginContain>
  );
};

export default LoginComponent;
