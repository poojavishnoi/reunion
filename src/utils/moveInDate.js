export default function getByMoveInDate(propertyList, userDate) {
  if (!userDate) {
    return propertyList;
  } else {
    return propertyList.filter((property) => {
      var propertyDate = property.move_in_date;
      var date1 = new Date(propertyDate);
      var date2 = new Date(userDate);

      return date2 >= date1;
    });
  }
}
