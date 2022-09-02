export default function sortByPrice(propertyList, userPriceRange) {
  if (!userPriceRange) {
    return propertyList;
  } else {
    if (userPriceRange === "$1000 - $2000") {
      return propertyList.filter((product) => {
        return product.price >= "1000" && product.price <= "2000";
      });
    } else if (userPriceRange === "$2000 - $4000") {
      return propertyList.filter((product) => {
        return product.price >= "2000" && product.price <= "4000";
      });
    } else if (userPriceRange === "more than $4000") {
      return propertyList.filter((product) => {
        return product.price >= "4000";
      });
    }
  }
}
