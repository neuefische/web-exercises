import ChevronLeft from "../../icons/chevron-left.svg";
import NavigationLink from "../NavigationLink";

export default function AllVolumesNavigation() {
  return (
    <NavigationLink href="/volumes">
      <ChevronLeft /> All Volumes
    </NavigationLink>
  );
}
