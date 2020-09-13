export const fetchRestaurants = (filters) => {
  console.log("filter");
  console.log(filters);
  console.log("filter");
  return $.ajax({
    method: "GET",
    url: "/api/restaurants",
    data : { filters }
  });
};

export const fetchRestaurant = restaurantId => {
  return $.ajax({
    method: "GET",
    url: `/api/restaurants/${restaurantId}`,
  });
};
