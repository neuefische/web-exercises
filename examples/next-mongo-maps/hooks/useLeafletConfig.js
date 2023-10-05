import { useEffect } from "react";
import Leaflet from "leaflet";

export default function useLeafletConfig() {
  useEffect(() => {
    delete Leaflet.Icon.Default.prototype._getIconUrl;
    Leaflet.Icon.Default.mergeOptions({
      iconRetinaUrl: "/leaflet/images/marker-icon-2x.png",
      iconUrl: "/leaflet/images/marker-icon.png",
      shadowUrl: "/leaflet/images/marker-shadow.png",
    });
  }, []);
}
