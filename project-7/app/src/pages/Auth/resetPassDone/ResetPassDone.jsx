import {
  Box,
  Button,
  Card,
  Center,
  Container,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { HiCheckCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const ResetPassDone = () => {
  return (
    <Container>
      <Center minH="100vh" p="4">
        <Card
          w="full"
          p={{
            base: "4",
            md: "10",
          }}
        >
          <VStack spacing={6}>
            <Icon as={HiCheckCircle} boxSize="48px" color="green" />
            <Text textStyle="h4" fontWeight="medium" color="p.black">
              Password Reset Done
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              Now you can access your account.
            </Text>
            <Box w="full">
              <Link to="/signin">
                <Button w="full" mb="3" type="submit">
                  Login
                </Button>
              </Link>
            </Box>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default ResetPassDone;
