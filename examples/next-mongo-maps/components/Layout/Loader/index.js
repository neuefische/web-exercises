import Flex from "../Flex";
import Spinner from "./spinner.svg";

export default function Loader() {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      flex={1}
    >
      <Spinner />
      Loading...
    </Flex>
  );
}
