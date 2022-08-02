const { Shopify } = require("@shopify/shopify-api");
const app_purchases_one_time_update_handler = require("./app_purchases_one_time_update.js");
const app_subscriptions_approaching_capped_amount_handler = require("./app_subscriptions_approaching_capped_amount.js");
const app_subscriptions_update_handler = require("./app_subscriptions_update.js");
const app_uninstalled_handler = require("./app_uninstalled.js");
const bulk_operations_finish_handler = require("./bulk_operations_finish.js");
const carts_create_handler = require("./carts_create.js");
const carts_update_handler = require("./carts_update.js");
const checkouts_create_handler = require("./checkouts_create.js");
const checkouts_delete_handler = require("./checkouts_delete.js");
const checkouts_update_handler = require("./checkouts_update.js");
const collections_create_handler = require("./collections_create.js");
const collections_delete_handler = require("./collections_delete.js");
const collections_update_handler = require("./collections_update.js");
const collection_listings_add_handler = require("./collection_listings_add.js");
const collection_listings_remove_handler = require("./collection_listings_remove.js");
const collection_listings_update_handler = require("./collection_listings_update.js");
const customers_create_handler = require("./customers_create.js");
const customers_delete_handler = require("./customers_delete.js");
const customers_disable_handler = require("./customers_disable.js");
const customers_enable_handler = require("./customers_enable.js");
const customers_marketing_consent_update_handler = require("./customers_marketing_consent_update.js");
const customers_update_handler = require("./customers_update.js");
const customer_groups_create_handler = require("./customer_groups_create.js");
const customer_groups_delete_handler = require("./customer_groups_delete.js");
const customer_groups_update_handler = require("./customer_groups_update.js");
const disputes_create_handler = require("./disputes_create.js");
const disputes_update_handler = require("./disputes_update.js");
const domains_create_handler = require("./domains_create.js");
const domains_destroy_handler = require("./domains_destroy.js");
const domains_update_handler = require("./domains_update.js");
const draft_orders_create_handler = require("./draft_orders_create.js");
const draft_orders_delete_handler = require("./draft_orders_delete.js");
const draft_orders_update_handler = require("./draft_orders_update.js");
const fulfillments_create_handler = require("./fulfillments_create.js");
const fulfillments_update_handler = require("./fulfillments_update.js");
const fulfillment_events_create_handler = require("./fulfillment_events_create.js");
const fulfillment_events_delete_handler = require("./fulfillment_events_delete.js");
const inventory_items_create_handler = require("./inventory_items_create.js");
const inventory_items_delete_handler = require("./inventory_items_delete.js");
const inventory_items_update_handler = require("./inventory_items_update.js");
const inventory_levels_connect_handler = require("./inventory_levels_connect.js");
const inventory_levels_disconnect_handler = require("./inventory_levels_disconnect.js");
const inventory_levels_update_handler = require("./inventory_levels_update.js");
const locales_create_handler = require("./locales_create.js");
const locales_update_handler = require("./locales_update.js");
const locations_create_handler = require("./locations_create.js");
const locations_delete_handler = require("./locations_delete.js");
const locations_update_handler = require("./locations_update.js");
const orders_cancelled_handler = require("./orders_cancelled.js");
const orders_create_handler = require("./orders_create.js");
const orders_delete_handler = require("./orders_delete.js");
const orders_edited_handler = require("./orders_edited.js");
const orders_fulfilled_handler = require("./orders_fulfilled.js");
const orders_paid_handler = require("./orders_paid.js");
const orders_partially_fulfilled_handler = require("./orders_partially_fulfilled.js");
const orders_updated_handler = require("./orders_updated.js");
const order_transactions_create_handler = require("./order_transactions_create.js");
const payment_terms_create_handler = require("./payment_terms_create.js");
const payment_terms_delete_handler = require("./payment_terms_delete.js");
const payment_terms_update_handler = require("./payment_terms_update.js");
const products_create_handler = require("./products_create.js");
const products_delete_handler = require("./products_delete.js");
const products_update_handler = require("./products_update.js");
const product_listings_add_handler = require("./product_listings_add.js");
const product_listings_remove_handler = require("./product_listings_remove.js");
const product_listings_update_handler = require("./product_listings_update.js");
const profiles_create_handler = require("./profiles_create.js");
const profiles_delete_handler = require("./profiles_delete.js");
const profiles_update_handler = require("./profiles_update.js");
const refunds_create_handler = require("./refunds_create.js");
const scheduled_product_listings_add_handler = require("./scheduled_product_listings_add.js");
const scheduled_product_listings_remove_handler = require("./scheduled_product_listings_remove.js");
const scheduled_product_listings_update_handler = require("./scheduled_product_listings_update.js");
const segments_create_handler = require("./segments_create.js");
const segments_delete_handler = require("./segments_delete.js");
const segments_update_handler = require("./segments_update.js");
const selling_plan_groups_create_handler = require("./selling_plan_groups_create.js");
const selling_plan_groups_delete_handler = require("./selling_plan_groups_delete.js");
const selling_plan_groups_update_handler = require("./selling_plan_groups_update.js");
const shop_update_handler = require("./shop_update.js");
const tender_transactions_create_handler = require("./tender_transactions_create.js");
const themes_create_handler = require("./themes_create.js");
const themes_delete_handler = require("./themes_delete.js");
const themes_publish_handler = require("./themes_publish.js");
const themes_update_handler = require("./themes_update.js");

const webhookSetup = () => {
  Shopify.Webhooks.Registry.addHandlers({
    APP_PURCHASES_ONE_TIME_UPDATE: {
      path: "/webhooks/app_purchases_one_time_update",
      webhookHandler: app_purchases_one_time_update_handler,
    },
    APP_SUBSCRIPTIONS_APPROACHING_CAPPED_AMOUNT: {
      path: "/webhooks/app_subscriptions_approaching_capped_amount",
      webhookHandler: app_subscriptions_approaching_capped_amount_handler,
    },
    APP_SUBSCRIPTIONS_UPDATE: {
      path: "/webhooks/app_subscriptions_update",
      webhookHandler: app_subscriptions_update_handler,
    },
    APP_UNINSTALLED: {
      path: "/webhooks/app_uninstalled",
      webhookHandler: app_uninstalled_handler,
    },
    BULK_OPERATIONS_FINISH: {
      path: "/webhooks/bulk_operations_finish",
      webhookHandler: bulk_operations_finish_handler,
    },
    CARTS_CREATE: {
      path: "/webhooks/carts_create",
      webhookHandler: carts_create_handler,
    },
    CARTS_UPDATE: {
      path: "/webhooks/carts_update",
      webhookHandler: carts_update_handler,
    },
    CHECKOUTS_CREATE: {
      path: "/webhooks/checkouts_create",
      webhookHandler: checkouts_create_handler,
    },
    CHECKOUTS_DELETE: {
      path: "/webhooks/checkouts_delete",
      webhookHandler: checkouts_delete_handler,
    },
    CHECKOUTS_UPDATE: {
      path: "/webhooks/checkouts_update",
      webhookHandler: checkouts_update_handler,
    },
    COLLECTIONS_CREATE: {
      path: "/webhooks/collections_create",
      webhookHandler: collections_create_handler,
    },
    COLLECTIONS_DELETE: {
      path: "/webhooks/collections_delete",
      webhookHandler: collections_delete_handler,
    },
    COLLECTIONS_UPDATE: {
      path: "/webhooks/collections_update",
      webhookHandler: collections_update_handler,
    },
    COLLECTION_LISTINGS_ADD: {
      path: "/webhooks/collection_listings_add",
      webhookHandler: collection_listings_add_handler,
    },
    COLLECTION_LISTINGS_REMOVE: {
      path: "/webhooks/collection_listings_remove",
      webhookHandler: collection_listings_remove_handler,
    },
    COLLECTION_LISTINGS_UPDATE: {
      path: "/webhooks/collection_listings_update",
      webhookHandler: collection_listings_update_handler,
    },
    CUSTOMERS_CREATE: {
      path: "/webhooks/customers_create",
      webhookHandler: customers_create_handler,
    },
    CUSTOMERS_DELETE: {
      path: "/webhooks/customers_delete",
      webhookHandler: customers_delete_handler,
    },
    CUSTOMERS_DISABLE: {
      path: "/webhooks/customers_disable",
      webhookHandler: customers_disable_handler,
    },
    CUSTOMERS_ENABLE: {
      path: "/webhooks/customers_enable",
      webhookHandler: customers_enable_handler,
    },
    CUSTOMERS_MARKETING_CONSENT_UPDATE: {
      path: "/webhooks/customers_marketing_consent_update",
      webhookHandler: customers_marketing_consent_update_handler,
    },
    CUSTOMERS_UPDATE: {
      path: "/webhooks/customers_update",
      webhookHandler: customers_update_handler,
    },
    CUSTOMER_GROUPS_CREATE: {
      path: "/webhooks/customer_groups_create",
      webhookHandler: customer_groups_create_handler,
    },
    CUSTOMER_GROUPS_DELETE: {
      path: "/webhooks/customer_groups_delete",
      webhookHandler: customer_groups_delete_handler,
    },
    CUSTOMER_GROUPS_UPDATE: {
      path: "/webhooks/customer_groups_update",
      webhookHandler: customer_groups_update_handler,
    },
    DISPUTES_CREATE: {
      path: "/webhooks/disputes_create",
      webhookHandler: disputes_create_handler,
    },
    DISPUTES_UPDATE: {
      path: "/webhooks/disputes_update",
      webhookHandler: disputes_update_handler,
    },
    DOMAINS_CREATE: {
      path: "/webhooks/domains_create",
      webhookHandler: domains_create_handler,
    },
    DOMAINS_DESTROY: {
      path: "/webhooks/domains_destroy",
      webhookHandler: domains_destroy_handler,
    },
    DOMAINS_UPDATE: {
      path: "/webhooks/domains_update",
      webhookHandler: domains_update_handler,
    },
    DRAFT_ORDERS_CREATE: {
      path: "/webhooks/draft_orders_create",
      webhookHandler: draft_orders_create_handler,
    },
    DRAFT_ORDERS_DELETE: {
      path: "/webhooks/draft_orders_delete",
      webhookHandler: draft_orders_delete_handler,
    },
    DRAFT_ORDERS_UPDATE: {
      path: "/webhooks/draft_orders_update",
      webhookHandler: draft_orders_update_handler,
    },
    FULFILLMENTS_CREATE: {
      path: "/webhooks/fulfillments_create",
      webhookHandler: fulfillments_create_handler,
    },

    FULFILLMENTS_UPDATE: {
      path: "/webhooks/fulfillments_update",
      webhookHandler: fulfillments_update_handler,
    },
    FULFILLMENT_EVENTS_CREATE: {
      path: "/webhooks/fulfillment_events_create",
      webhookHandler: fulfillment_events_create_handler,
    },
    FULFILLMENT_EVENTS_DELETE: {
      path: "/webhooks/fulfillment_events_delete",
      webhookHandler: fulfillment_events_delete_handler,
    },
    INVENTORY_ITEMS_CREATE: {
      path: "/webhooks/inventory_items_create",
      webhookHandler: inventory_items_create_handler,
    },
    INVENTORY_ITEMS_DELETE: {
      path: "/webhooks/inventory_items_delete",
      webhookHandler: inventory_items_delete_handler,
    },
    INVENTORY_ITEMS_UPDATE: {
      path: "/webhooks/inventory_items_update",
      webhookHandler: inventory_items_update_handler,
    },
    INVENTORY_LEVELS_CONNECT: {
      path: "/webhooks/inventory_levels_connect",
      webhookHandler: inventory_levels_connect_handler,
    },
    INVENTORY_LEVELS_DISCONNECT: {
      path: "/webhooks/inventory_levels_disconnect",
      webhookHandler: inventory_levels_disconnect_handler,
    },
    INVENTORY_LEVELS_UPDATE: {
      path: "/webhooks/inventory_levels_update",
      webhookHandler: inventory_levels_update_handler,
    },
    LOCALES_CREATE: {
      path: "/webhooks/locales_create",
      webhookHandler: locales_create_handler,
    },
    LOCALES_UPDATE: {
      path: "/webhooks/locales_update",
      webhookHandler: locales_update_handler,
    },
    LOCATIONS_CREATE: {
      path: "/webhooks/locations_create",
      webhookHandler: locations_create_handler,
    },
    LOCATIONS_DELETE: {
      path: "/webhooks/locations_delete",
      webhookHandler: locations_delete_handler,
    },
    LOCATIONS_UPDATE: {
      path: "/webhooks/locations_update",
      webhookHandler: locations_update_handler,
    },
    ORDERS_CANCELLED: {
      path: "/webhooks/orders_cancelled",
      webhookHandler: orders_cancelled_handler,
    },
    ORDERS_CREATE: {
      path: "/webhooks/orders_create",
      webhookHandler: orders_create_handler,
    },
    ORDERS_DELETE: {
      path: "/webhooks/orders_delete",
      webhookHandler: orders_delete_handler,
    },
    ORDERS_EDITED: {
      path: "/webhooks/orders_edited",
      webhookHandler: orders_edited_handler,
    },
    ORDERS_FULFILLED: {
      path: "/webhooks/orders_fulfilled",
      webhookHandler: orders_fulfilled_handler,
    },
    ORDERS_PAID: {
      path: "/webhooks/orders_paid",
      webhookHandler: orders_paid_handler,
    },
    ORDERS_PARTIALLY_FULFILLED: {
      path: "/webhooks/orders_partially_fulfilled",
      webhookHandler: orders_partially_fulfilled_handler,
    },
    ORDERS_UPDATED: {
      path: "/webhooks/orders_updated",
      webhookHandler: orders_updated_handler,
    },
    ORDER_TRANSACTIONS_CREATE: {
      path: "/webhooks/order_transactions_create",
      webhookHandler: order_transactions_create_handler,
    },
    PAYMENT_TERMS_CREATE: {
      path: "/webhooks/payment_terms_create",
      webhookHandler: payment_terms_create_handler,
    },
    PAYMENT_TERMS_DELETE: {
      path: "/webhooks/payment_terms_delete",
      webhookHandler: payment_terms_delete_handler,
    },
    PAYMENT_TERMS_UPDATE: {
      path: "/webhooks/payment_terms_update",
      webhookHandler: payment_terms_update_handler,
    },
    PRODUCTS_CREATE: {
      path: "/webhooks/products_create",
      webhookHandler: products_create_handler,
    },
    PRODUCTS_DELETE: {
      path: "/webhooks/products_delete",
      webhookHandler: products_delete_handler,
    },
    PRODUCTS_UPDATE: {
      path: "/webhooks/products_update",
      webhookHandler: products_update_handler,
    },
    PRODUCT_LISTINGS_ADD: {
      path: "/webhooks/product_listings_add",
      webhookHandler: product_listings_add_handler,
    },
    PRODUCT_LISTINGS_REMOVE: {
      path: "/webhooks/product_listings_remove",
      webhookHandler: product_listings_remove_handler,
    },
    PRODUCT_LISTINGS_UPDATE: {
      path: "/webhooks/product_listings_update",
      webhookHandler: product_listings_update_handler,
    },
    PROFILES_CREATE: {
      path: "/webhooks/profiles_create",
      webhookHandler: profiles_create_handler,
    },
    PROFILES_DELETE: {
      path: "/webhooks/profiles_delete",
      webhookHandler: profiles_delete_handler,
    },
    PROFILES_UPDATE: {
      path: "/webhooks/profiles_update",
      webhookHandler: profiles_update_handler,
    },
    REFUNDS_CREATE: {
      path: "/webhooks/refunds_create",
      webhookHandler: refunds_create_handler,
    },
    SCHEDULED_PRODUCT_LISTINGS_ADD: {
      path: "/webhooks/scheduled_product_listings_add",
      webhookHandler: scheduled_product_listings_add_handler,
    },
    SCHEDULED_PRODUCT_LISTINGS_REMOVE: {
      path: "/webhooks/scheduled_product_listings_remove",
      webhookHandler: scheduled_product_listings_remove_handler,
    },
    SCHEDULED_PRODUCT_LISTINGS_UPDATE: {
      path: "/webhooks/scheduled_product_listings_update",
      webhookHandler: scheduled_product_listings_update_handler,
    },
    SEGMENTS_CREATE: {
      path: "/webhooks/segments_create",
      webhookHandler: segments_create_handler,
    },
    SEGMENTS_DELETE: {
      path: "/webhooks/segments_delete",
      webhookHandler: segments_delete_handler,
    },
    SEGMENTS_UPDATE: {
      path: "/webhooks/segments_update",
      webhookHandler: segments_update_handler,
    },
    SELLING_PLAN_GROUPS_CREATE: {
      path: "/webhooks/selling_plan_groups_create",
      webhookHandler: selling_plan_groups_create_handler,
    },
    SELLING_PLAN_GROUPS_DELETE: {
      path: "/webhooks/selling_plan_groups_delete",
      webhookHandler: selling_plan_groups_delete_handler,
    },
    SELLING_PLAN_GROUPS_UPDATE: {
      path: "/webhooks/selling_plan_groups_update",
      webhookHandler: selling_plan_groups_update_handler,
    },
    SHOP_UPDATE: {
      path: "/webhooks/shop_update",
      webhookHandler: shop_update_handler,
    },
    TENDER_TRANSACTIONS_CREATE: {
      path: "/webhooks/tender_transactions_create",
      webhookHandler: tender_transactions_create_handler,
    },
    THEMES_CREATE: {
      path: "/webhooks/themes_create",
      webhookHandler: themes_create_handler,
    },
    THEMES_DELETE: {
      path: "/webhooks/themes_delete",
      webhookHandler: themes_delete_handler,
    },
    THEMES_PUBLISH: {
      path: "/webhooks/themes_publish",
      webhookHandler: themes_publish_handler,
    },
    THEMES_UPDATE: {
      path: "/webhooks/themes_update",
      webhookHandler: themes_update_handler,
    },
  });
};

module.exports = webhookSetup;
