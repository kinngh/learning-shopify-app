const fulfillment_events_create_handler = async (
  topic,
  shop,
  webhookRequestBody
) => {
  console.log(topic);
  console.log(webhookRequestBody);
};
module.exports = fulfillment_events_create_handler;
