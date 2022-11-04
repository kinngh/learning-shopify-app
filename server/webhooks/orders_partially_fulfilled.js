const orders_partially_fulfilled_handler = async (
  topic,
  shop,
  webhookRequestBody
) => {
  console.log(topic);
  console.log(webhookRequestBody);
};
export default orders_partially_fulfilled_handler;
