const inventory_levels_disconnect_handler = async (
  topic,
  shop,
  webhookRequestBody
) => {
  console.log(topic);
  console.log(webhookRequestBody);
};
export default inventory_levels_disconnect_handler;
