import React from "react";
import { SafeEnvironmentContainer } from "./SafeEnvironment.style.";
import { Container } from "@material-ui/core";
import { FiLock } from "react-icons/fi";

export const SafeEnvironment = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente Seguro <FiLock size={15} />
      </Container>
    </SafeEnvironmentContainer>
  );
};
