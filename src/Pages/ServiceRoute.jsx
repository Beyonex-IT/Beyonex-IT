import { useParams } from "react-router-dom";
import { useServiceCatalog } from "../hooks/useServiceCatalog";
import AppLoader from "../Components/Layout/AppLoader/AppLoader";
import ServiceCategory from "./ServiceCategory/ServiceCategory";
import ServiceDetails from "./ServiceDetails/ServiceDetails";

export default function ServiceRoute() {
  const { serviceKey } = useParams();
  const { catalog, getCategory, isLoading, isFetching, usingFallback } =
    useServiceCatalog();

  const waitingForCatalog =
    !usingFallback && catalog.length === 0 && (isLoading || isFetching);

  if (waitingForCatalog) {
    return <AppLoader />;
  }

  return getCategory(serviceKey) ? <ServiceCategory /> : <ServiceDetails />;
}
