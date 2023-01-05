export const dateFormatter = new Intl.DateTimeFormat("en-Us");

export const priceFormatter = new Intl.NumberFormat("pt-Br", {
  style: "currency",
  currency: "BRL",
});
