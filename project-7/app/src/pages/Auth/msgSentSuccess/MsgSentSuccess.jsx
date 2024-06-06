import {
  Box,
  Button,
  Card,
  Text,
  Center,
  Icon,
  VStack,
  Container,
} from "@chakra-ui/react";
import React from "react";
import { HiCheckCircle } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";

const MsgSentSuccess = () => {
  const { email } = useParams();
  return (
    <Container>
      <Center minH="100vh" p="4">
        <Card
          maxW="md"
          p={{
            base: "4",
            md: "10",
          }}
          showCard={true}
        >
          <VStack spacing={6}>
            <Icon as={HiCheckCircle} boxSize="48px" color="green" />
            <Text textStyle="h4" fontWeight="medium" color="p.black">
              Successfully Sent
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              We have sent instructions on how to reset your password to{" "}
              <Text as="b" color="p.black">
                {email}
              </Text>{" "}
              Please folow the instructions from the email.
            </Text>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default MsgSentSuccess;
