export default function getByPropertyType(propertyList, propertyType) {
  if (!propertyType) {
    return propertyList;
  } else {
    return propertyList.filter((property) => {
      return property.product === propertyType;
    });
  }
}
