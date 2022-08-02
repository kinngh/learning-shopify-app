const inventory_levels_disconnect_handler = async (
  topic,
  shop,
  webhookRequestBody
) => {
  console.log(topic);
  console.log(webhookRequestBody);
};
module.exports = inventory_levels_disconnect_handler;
