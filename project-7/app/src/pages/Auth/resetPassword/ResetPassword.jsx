import React from "react";
import {
  Card,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  Box,
  Button,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { verifyForgotToken } from "../../../api/query/UserQuery";
import { useMutation } from "react-query";

const resetPasswordValidationSchema = Yup.object({
  newPassword: Yup.string()
    .required("New Password is required")
    .min(6, "Password must be at least 6 characters"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Repeat New Password is required"),
});
const ResetPassword = () => {
  const toast = useToast();
  const { token } = useParams();

  console.log("TYPE1 :", typeof token);

  const navigate = useNavigate();

  const { mutate, isSuccess, isLoading } = useMutation({
    mutationKey: ["verify-forgot-token"],
    mutationFn: verifyForgotToken,
    enabled: !!token,

    onError: (error) => {
      toast({
        title: "Signup Error",
        description: error.message,
        status: "error",
      });
      navigate("/signup");
    },
    onSettled: () => {
      navigate("/reset-pass-done");
    },
  });
  if (isLoading) {
    <Center h="100vh">
      <Spinner />
    </Center>;
  }

  return (
    <Container>
      <Center minH="100vh">
        <Card
          w="full"
          maxW="md"
          p={{
            base: "4",
            md: "10",
          }}
        >
          <Text fontWeight="medium" textStyle="h1">
            Reset Password
          </Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Enter your new password.
          </Text>
          <Formik
            initialValues={{
              newPassword: "",
              repeatPassword: "",
            }}
            validationSchema={resetPasswordValidationSchema}
            onSubmit={(values) => {
              console.log(values, "VALUES ME PASSWORD HE KIA");
              mutate({ token, password: values.newPassword });
              // mutate({ token, password: values.newPassword });
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Stack mt="10" spacing="6">
                  <Field name="newPassword">
                    {({ field }) => (
                      <FormControl
                        isInvalid={errors.newPassword && touched.newPassword}
                      >
                        <FormLabel htmlFor="newPassword">
                          New Password
                        </FormLabel>
                        <Input
                          {...field}
                          id="newPassword"
                          type="password"
                          placeholder="Enter your new password ...."
                        />
                        {errors.newPassword && touched.newPassword && (
                          <FormErrorMessage color="red.500">
                            {errors.newPassword}
                          </FormErrorMessage>
                        )}
                      </FormControl>
                    )}
                  </Field>
                  <Field name="repeatPassword">
                    {({ field }) => (
                      <FormControl
                        isInvalid={
                          errors.repeatPassword && touched.repeatPassword
                        }
                      >
                        <FormLabel htmlFor="repeatPassword">
                          Repeat New Password
                        </FormLabel>
                        <Input
                          {...field}
                          id="repeatPassword"
                          type="password"
                          placeholder="Repeat your new password ...."
                        />
                        {errors.repeatPassword && touched.repeatPassword && (
                          <FormErrorMessage color="red.500">
                            {errors.repeatPassword}
                          </FormErrorMessage>
                        )}
                      </FormControl>
                    )}
                  </Field>
                  <Box>
                    <Button w="full" mb="3" type="submit">
                      Reset Password
                    </Button>
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

export default ResetPassword;