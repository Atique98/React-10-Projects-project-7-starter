import React, { useEffect, useState } from "react";
import Card from "../../../components/Card";
import {
  Text,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Stack,
  Icon,
  Container,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { sendForgotMailVerify } from "../../../api/query/UserQuery";
import { useMutation } from "react-query";

const ForgotPassword = () => {
  const forgotPasswordValidationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const toast = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const { mutate, isSuccess, isLoading } = useMutation({
    mutationKey: ["forgot-email"],
    mutationFn: sendForgotMailVerify,
    onSuccess: (data) => {
      console.log(data);
    },

    onError: (error) => {
      toast({
        title: "Forgot Error",
        description: error.message,
        status: "error",
      });
    },
  });

  useEffect(() => {
    if (email) {
      // console.log(email, "EMAIL");
      // console.log(`Navigating to /msg-sent-successfully/${email}`);
      navigate(`/msg-sent-successfully/${email}`);
    }
  }, [email]);

  return (
    <Container>
      <Center minH="100vh" p="4">
        <Card>
          <Link to="/signin">
            <Icon as={FaArrowLeft} boxSize={6} />
          </Link>
          <Text fontWeight="medium" textStyle="h1" mt="4">
            Forgot Password
          </Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Enter the email address associated with your account to reset your
            password.
          </Text>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={forgotPasswordValidationSchema}
            onSubmit={(values) => {
              console.log(values);
              // setGmail((prev) => (prev = values.email));
              setEmail(values.email);
              mutate({ email: values.email });
              // console.log(gmail,"GMAIL");
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Stack mt="8" spacing="6">
                  <Field name="email">
                    {({ field }) => (
                      <FormControl isInvalid={errors.email && touched.email}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                          {...field}
                          id="email"
                          type="email"
                          placeholder="name@email.com"
                        />
                        {errors.email && touched.email && (
                          <FormErrorMessage>{errors.email}</FormErrorMessage>
                        )}
                      </FormControl>
                    )}
                  </Field>

                  <Button w="full" mb="3" type="submit">
                    Reset Password
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default ForgotPassword;
