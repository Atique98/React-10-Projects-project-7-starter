// import {
//   Button,
//   Center,
//   Checkbox,
//   Container,
//   Flex,
//   FormControl,
//   FormErrorMessage,
//   FormLabel,
//   Input,
//   Stack,
//   Text,
//   useToast,
// } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import Card from "../../../components/Card";
// import { useMutation } from "react-query";
// import { signupUser } from "../../../api/query/UserQuery";

// // Define validation schema with Yup
// const validationSchema = Yup.object({
//   name: Yup.string().required("Name is required"),
//   surname: Yup.string().required("Surname is required"),
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   password: Yup.string()
//     .required("Password is required")
//     .min(6, "Password must be at least 6 characters"),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password"), null], "Passwords must match")
//     .required("Confirm Password is required"),
// });

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate();

//   const toast = useToast();
//   const { mutate, isLoading } = useMutation({
//     mutationKey: ["signup"],
//     mutationFn: signupUser,
//     onSuccess: (data) => {
//       console.log(email);
//       if (email != "") {
//         navigate("/email-verify", {
//           state: { email },
//         });
//       }
//     },

//     onError: (error) => {
//       toast({
//         title: "Signup Error",
//         description: error.message,
//         status: "error",
//       });
//     },
//   });

//   return (
//     <Container>
//       <Center minH="100vh">
//         <Card>
//           <Text fontWeight="medium" textStyle="h1">
//             Welcome to Crypto App
//           </Text>
//           <Text textStyle="p2" color="black.60" mt="4">
//             Create a free account by filling data below.
//           </Text>
//           <Formik
//             initialValues={{
//               name: "",
//               surname: "",
//               email: "",
//               password: "",
//               confirmPassword: "",
//             }}
//             validationSchema={validationSchema}
//             onSubmit={(values) => {
//               setEmail(values.email);
//               mutate({
//                 firstName: values.name,
//                 lastName: values.surname,
//                 email: values.email,
//                 password: values.password,
//               });
//             }}
//           >
//             {({ errors, touched }) => (
//               <Form>
//                 <Stack mt="10" spacing="6">
//                   <Flex gap="4">
//                     <Field name="name">
//                       {({ field }) => (
//                         <FormControl isInvalid={errors.name && touched.name}>
//                           <FormLabel htmlFor="name">Name</FormLabel>
//                           <Input
//                             {...field}
//                             id="name"
//                             placeholder="Enter your name ...."
//                           />
//                           {errors.name && touched.name && (
//                             <FormErrorMessage color="red.500">
//                               {errors.name}
//                             </FormErrorMessage>
//                           )}
//                         </FormControl>
//                       )}
//                     </Field>
//                     <Field name="surname">
//                       {({ field }) => (
//                         <FormControl
//                           isInvalid={errors.surname && touched.surname}
//                         >
//                           <FormLabel htmlFor="surname">Surname</FormLabel>
//                           <Input
//                             {...field}
//                             id="surname"
//                             placeholder="Enter your surname ...."
//                           />
//                           {errors.surname && touched.surname && (
//                             <FormErrorMessage color="red.500">
//                               {errors.surname}
//                             </FormErrorMessage>
//                           )}
//                         </FormControl>
//                       )}
//                     </Field>
//                   </Flex>
//                   <Field name="email">
//                     {({ field }) => (
//                       <FormControl isInvalid={errors.email && touched.email}>
//                         <FormLabel htmlFor="email">Email</FormLabel>
//                         <Input
//                           {...field}
//                           id="email"
//                           type="email"
//                           placeholder="Enter your email ...."
//                         />
//                         {errors.email && touched.email && (
//                           <FormErrorMessage color="red.500">
//                             {errors.email}
//                           </FormErrorMessage>
//                         )}
//                       </FormControl>
//                     )}
//                   </Field>
//                   <Field name="password">
//                     {({ field }) => (
//                       <FormControl
//                         isInvalid={errors.password && touched.password}
//                       >
//                         <FormLabel htmlFor="password">Password</FormLabel>
//                         <Input
//                           {...field}
//                           id="password"
//                           type="password"
//                           placeholder="Enter your password ...."
//                         />
//                         {errors.password && touched.password && (
//                           <FormErrorMessage color="red.500">
//                             {errors.password}
//                           </FormErrorMessage>
//                         )}
//                       </FormControl>
//                     )}
//                   </Field>
//                   <Field name="confirmPassword">
//                     {({ field }) => (
//                       <FormControl
//                         isInvalid={
//                           errors.confirmPassword && touched.confirmPassword
//                         }
//                       >
//                         <FormLabel htmlFor="confirmPassword">
//                           Confirm Password
//                         </FormLabel>
//                         <Input
//                           {...field}
//                           id="confirmPassword"
//                           type="password"
//                           placeholder="Enter your password again ...."
//                         />
//                         {errors.confirmPassword && touched.confirmPassword && (
//                           <FormErrorMessage color="red.500">
//                             {errors.confirmPassword}
//                           </FormErrorMessage>
//                         )}
//                       </FormControl>
//                     )}
//                   </Field>
//                   <Checkbox>
//                     <Text textStyle="p3">
//                       I agree with{" "}
//                       <Text as="span" color="p.purple">
//                         Term and Conditions
//                       </Text>
//                     </Text>
//                   </Checkbox>
//                   <Button isLoading={isLoading} type="submit">
//                     Create Account
//                   </Button>
//                   <Text textStyle="p3" color="black.60" textAlign="center">
//                     Already have an account?{" "}
//                     <Link to="/signin">
//                       {" "}
//                       <Text as="span" color="p.purple">
//                         Login
//                       </Text>
//                     </Link>
//                   </Text>
//                 </Stack>
//               </Form>
//             )}
//           </Formik>
//         </Card>
//       </Center>
//     </Container>
//   );
// };

// export default SignUp;

import {
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Card from "../../../components/Card";
import { useMutation } from "react-query";
import { signupUser } from "../../../api/query/UserQuery";

// Define validation schema with Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  surname: Yup.string().required("Surname is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUp = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const toast = useToast();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["signup"],
    mutationFn: signupUser,
    onSuccess: (data) => {
      if (email) {
        navigate(`/register-email-verify/${email}`);
      }
    },

    onError: (error) => {
      toast({
        title: "Signup Error",
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
            Create a free account by filling data below.
          </Text>
          <Formik
            initialValues={{
              name: "",
              surname: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              setEmail(values.email);
              mutate({
                firstName: values.name,
                lastName: values.surname,
                email: values.email,
                password: values.password,
              });
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Stack mt="10" spacing="6">
                  <Flex gap="4">
                    <Field name="name">
                      {({ field }) => (
                        <FormControl isInvalid={errors.name && touched.name}>
                          <FormLabel htmlFor="name">Name</FormLabel>
                          <Input
                            {...field}
                            id="name"
                            placeholder="Enter your name ...."
                          />
                          {errors.name && touched.name && (
                            <FormErrorMessage color="red.500">
                              {errors.name}
                            </FormErrorMessage>
                          )}
                        </FormControl>
                      )}
                    </Field>
                    <Field name="surname">
                      {({ field }) => (
                        <FormControl
                          isInvalid={errors.surname && touched.surname}
                        >
                          <FormLabel htmlFor="surname">Surname</FormLabel>
                          <Input
                            {...field}
                            id="surname"
                            placeholder="Enter your surname ...."
                          />
                          {errors.surname && touched.surname && (
                            <FormErrorMessage color="red.500">
                              {errors.surname}
                            </FormErrorMessage>
                          )}
                        </FormControl>
                      )}
                    </Field>
                  </Flex>
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
                  <Field name="confirmPassword">
                    {({ field }) => (
                      <FormControl
                        isInvalid={
                          errors.confirmPassword && touched.confirmPassword
                        }
                      >
                        <FormLabel htmlFor="confirmPassword">
                          Confirm Password
                        </FormLabel>
                        <Input
                          {...field}
                          id="confirmPassword"
                          type="password"
                          placeholder="Enter your password again ...."
                        />
                        {errors.confirmPassword && touched.confirmPassword && (
                          <FormErrorMessage color="red.500">
                            {errors.confirmPassword}
                          </FormErrorMessage>
                        )}
                      </FormControl>
                    )}
                  </Field>
                  <Checkbox>
                    <Text textStyle="p3">
                      I agree with{" "}
                      <Text as="span" color="p.purple">
                        Term and Conditions
                      </Text>
                    </Text>
                  </Checkbox>
                  <Button isLoading={isLoading} type="submit">
                    Create Account
                  </Button>
                  <Text textStyle="p3" color="black.60" textAlign="center">
                    Already have an account?{" "}
                    <Link to="/signin">
                      {" "}
                      <Text as="span" color="p.purple">
                        Login
                      </Text>
                    </Link>
                  </Text>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default SignUp;
