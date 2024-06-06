import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Card from "../../../components/Card";
import { signinUser } from "../../../api/query/UserQuery";
import { useMutation } from "react-query";
import useAuth from "../../../customHooks/useAuth";

// Define validation schema with Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const SignIn = () => {
  const toast = useToast();
  const { login } = useAuth();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["signin"],
    mutationFn: signinUser,
    onSuccess: (data) => {
      // toast({
      //   title: "Signin Success",
      //   description: `${data.firstName} Successfully logged in`,
      //   status: "success",
      // });
      const { token } = data;

      if (token) {
        login(token);
      }
    },
    onError: (error) => {
      toast({
        title: "Signin Error",
        description: error.message,
        status: "error",
      });
    },
  });

  return (
    <Container>
      <Center minH="100vh">
        <Card>
          <Text fontWeight="medium" textStyle="h1">
            Welcome to Crypto App
          </Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Enter your credentials to access the account.
          </Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              // console.log(values);
              mutate({
                email: values.email,
                password: values.password,
              });
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Stack mt="10" spacing="6">
                  <Field name="email">
                    {({ field }) => (
                      <FormControl isInvalid={errors.email && touched.email}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                          {...field}
                          id="email"
                          type="email"
                          placeholder="Enter your email ...."
                        />
                        {errors.email && touched.email && (
                          <FormErrorMessage color="red.500">
                            {errors.email}
                          </FormErrorMessage>
                        )}
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field }) => (
                      <FormControl
                        isInvalid={errors.password && touched.password}
                      >
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                          {...field}
                          id="password"
                          type="password"
                          placeholder="Enter your password ...."
                        />
                        {errors.password && touched.password && (
                          <FormErrorMessage color="red.500">
                            {errors.password}
                          </FormErrorMessage>
                        )}
                      </FormControl>
                    )}
                  </Field>

                  <HStack justify="space-between">
                    <Checkbox>
                      <Text textStyle="p3">Remember me</Text>
                    </Checkbox>
                    <Link to="/forgot-password">
                      <Text textStyle="p3" as="span" color="p.purple">
                        Forgot password?
                      </Text>
                    </Link>
                  </HStack>
                  <Box>
                    <Button isLoading={isLoading} w="full" mb="3" type="submit">
                      Login
                    </Button>
                    <Link to="/signup">
                      <Button variant="outline" w="full">
                        Create Account
                      </Button>
                    </Link>
                  </Box>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default SignIn;