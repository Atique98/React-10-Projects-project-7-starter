import React, { useEffect } from "react";
import Card from "../../../components/Card";
import {
  VStack,
  Icon,
  Text,
  Button,
  Center,
  Container,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { useLocation, useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { sendEmailVerify } from "../../../api/query/UserQuery";

const EmailVerify = () => {
  const toast = useToast();
  const { email } = useParams();

  if (!email) {
    return <Center minH="100vh">Invalid Email</Center>;
  }

  const { mutate, isSuccess, isLoading } = useMutation({
    mutationKey: ["send-verification-mail"],
    mutationFn: sendEmailVerify,
    onSuccess: (data) => {
      console.log(data);
    },

    onError: (error) => {
      toast({
        title: "Signup Error",
        description: error.message,
        status: "error",
      });
    },
    enabled: !!email,
  });

  useEffect(() => {
    mutate({ email });
  }, [email]);

  return (
    <Container>
      <Center minH="100vh">
        <Card
          p={{
            base: "4",
            md: "10",
          }}
          showCard={true}
        >
          <VStack spacing={6}>
            <Icon as={MdEmail} boxSize="48px" color="p.purple" />
            <Text textStyle="h4" fontWeight="medium" color="p.black">
              Email Verification
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              We have sent you an email verification to{" "}
              <Text as="b" color="p.black">
                {email}
              </Text>{" "}
              If you didn't receive it, click the button below.
            </Text>
            <Button
              w="full"
              variant="outline"
              onClick={() => {
                mutate({ email });
              }}
              isLoading={isLoading}
            >
              Re-Send Email
            </Button>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default EmailVerify;
