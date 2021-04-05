export default function sumTotal (productList) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
  const sum = productList.reduce(reducer, 0);
  return sum;
}