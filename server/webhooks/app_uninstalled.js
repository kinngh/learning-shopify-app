import SessionModel from "../../utils/models/SessionModel.js";
import StoreModel from "../../utils/models/StoreModel.js";

const app_uninstalled_handler = async (topic, shop, webhookRequestBody) => {
  await StoreModel.findOneAndUpdate({ shop }, { isActive: false });
  await SessionModel.deleteMany({ shop });
};

export default app_uninstalled_handler;
