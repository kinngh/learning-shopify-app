const scheduled_product_listings_update_handler = async (
  topic,
  shop,
  webhookRequestBody
) => {
  console.log(topic);
  console.log(webhookRequestBody);
};
module.exports = scheduled_product_listings_update_handler;
