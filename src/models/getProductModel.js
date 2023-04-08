/**
 * Generate new product model
 *
 * @param menu - existing menu to avoid duplicate food_code
 * @returns new product model
 */
const getProductModel = (menu) => {
  let random4Numbers = Math.floor(Math.random() * 9000) + 1000;
  const FOOD_CODE = `FOOD-${random4Numbers}`;

  while (menu.some((item) => item.food_code === FOOD_CODE)) {
    random4Numbers = Math.floor(Math.random() * 9000) + 1000;
  }

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth().toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const milliseconds = now.getMilliseconds().toString().padStart(6, "0");

  const date = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;

  return {
    food_code: FOOD_CODE,
    name: "",
    price: "0",
    picture: "",
    picture_ori: "",
    created_at: date,
  };
};

export default getProductModel;
