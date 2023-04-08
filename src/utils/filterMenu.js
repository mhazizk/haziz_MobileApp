/**
 * Filter menu based on query
 *
 * @param query - query to be searched
 * @param menu - menu to be filtered
 * @returns array of filtered menu
 */
const filterMenu = (query, menu) => {
  //   console.log(menu.length);
  return menu.filter((item) => {
    const { name, price } = item;
    const nameLowerCase = name.toLowerCase();
    const queryLowerCase = query.toLowerCase();
    if (
      nameLowerCase.includes(queryLowerCase) ||
      price.includes(queryLowerCase)
    ) {
      return item;
    }
  });
};

export default filterMenu;
