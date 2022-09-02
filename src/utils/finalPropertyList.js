import getByLocation from "./location";
import sortByPrice from "./price";
import getByPropertyType from "./propertyType";
import { useFilter } from "../context/filter-context";
import getByMoveInDate from "./moveInDate";

export default function GetFinalProperty(propertyList) {

  const {
    filterState: { price, propertyType, location, date },
  } = useFilter();

  const priceFilteredData = sortByPrice(propertyList, price);
  const propertyTypeFilteredData = getByPropertyType(priceFilteredData,propertyType);
  const locationFilteredData = getByLocation(propertyTypeFilteredData,location);
  const dateFilteredData = getByMoveInDate(locationFilteredData, date);

  return dateFilteredData;
}
