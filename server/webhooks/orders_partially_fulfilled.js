const orders_partially_fulfilled_handler = async (
  topic,
  shop,
  webhookRequestBody
) => {
  console.log(topic);
  console.log(webhookRequestBody);
};
module.exports = orders_partially_fulfilled_handler;
