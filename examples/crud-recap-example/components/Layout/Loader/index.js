import Flex from "../Flex";
import Spinner from "./spinner.svg";

export default function Loader() {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Spinner />
      Loading...
    </Flex>
  );
}
