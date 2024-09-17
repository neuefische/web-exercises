import BoxWithStyledComponents from "@/components/BoxWIhtStyledComponents.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";

export default function HomePage() {
  return (
    <div>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
    </div>
  );
}
