export default function getByLocation(propertyList, userLocation) {
  if (!userLocation) {
    return propertyList;
  } else {
    return propertyList.filter((property) => {
      return property.address
        .toLowerCase()
        .includes(userLocation.toLowerCase());
    });
  }
}
