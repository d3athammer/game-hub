import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
    <NavBar/>
    <Box padding={5}>
      <div>{isRouteErrorResponse(error) ? 'invalid page' : 'unexpected error'}</div>
    </Box>
    </>
  )
}
export default ErrorPage
