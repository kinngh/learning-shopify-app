const SessionModel = require("../../utils/models/SessionModel");
const StoreModel = require("../../utils/models/StoreModel");

const app_uninstalled_handler = async (topic, shop, webhookRequestBody) => {
  await StoreModel.findOneAndUpdate({ shop }, { isActive: false });
  await SessionModel.deleteMany({ shop });
};

module.exports = app_uninstalled_handler;
