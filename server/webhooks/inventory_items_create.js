const inventory_items_create_handler = async (
  topic,
  shop,
  webhookRequestBody
) => {
  console.log(topic);
  console.log(webhookRequestBody);
};
module.exports = inventory_items_create_handler;