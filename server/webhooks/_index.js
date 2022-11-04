import { Shopify } from "@shopify/shopify-api";
import app_purchases_one_time_update_handler from "./app_purchases_one_time_update.js";
import app_subscriptions_approaching_capped_amount_handler from "./app_subscriptions_approaching_capped_amount.js";
import app_subscriptions_update_handler from "./app_subscriptions_update.js";
import app_uninstalled_handler from "./app_uninstalled.js";
import bulk_operations_finish_handler from "./bulk_operations_finish.js";
import carts_create_handler from "./carts_create.js";
import carts_update_handler from "./carts_update.js";
import checkouts_create_handler from "./checkouts_create.js";
import checkouts_delete_handler from "./checkouts_delete.js";
import checkouts_update_handler from "./checkouts_update.js";
import collections_create_handler from "./collections_create.js";
import collections_delete_handler from "./collections_delete.js";
import collections_update_handler from "./collections_update.js";
import collection_listings_add_handler from "./collection_listings_add.js";
import collection_listings_remove_handler from "./collection_listings_remove.js";
import collection_listings_update_handler from "./collection_listings_update.js";
import customers_create_handler from "./customers_create.js";
import customers_delete_handler from "./customers_delete.js";
import customers_disable_handler from "./customers_disable.js";
import customers_enable_handler from "./customers_enable.js";
import customers_marketing_consent_update_handler from "./customers_marketing_consent_update.js";
import customers_update_handler from "./customers_update.js";
import customer_groups_create_handler from "./customer_groups_create.js";
import customer_groups_delete_handler from "./customer_groups_delete.js";
import customer_groups_update_handler from "./customer_groups_update.js";
import disputes_create_handler from "./disputes_create.js";
import disputes_update_handler from "./disputes_update.js";
import domains_create_handler from "./domains_create.js";
import domains_destroy_handler from "./domains_destroy.js";
import domains_update_handler from "./domains_update.js";
import draft_orders_create_handler from "./draft_orders_create.js";
import draft_orders_delete_handler from "./draft_orders_delete.js";
import draft_orders_update_handler from "./draft_orders_update.js";
import fulfillments_create_handler from "./fulfillments_create.js";
import fulfillments_update_handler from "./fulfillments_update.js";
import fulfillment_events_create_handler from "./fulfillment_events_create.js";
import fulfillment_events_delete_handler from "./fulfillment_events_delete.js";
import inventory_items_create_handler from "./inventory_items_create.js";
import inventory_items_delete_handler from "./inventory_items_delete.js";
import inventory_items_update_handler from "./inventory_items_update.js";
import inventory_levels_connect_handler from "./inventory_levels_connect.js";
import inventory_levels_disconnect_handler from "./inventory_levels_disconnect.js";
import inventory_levels_update_handler from "./inventory_levels_update.js";
import locales_create_handler from "./locales_create.js";
import locales_update_handler from "./locales_update.js";
import locations_create_handler from "./locations_create.js";
import locations_delete_handler from "./locations_delete.js";
import locations_update_handler from "./locations_update.js";
import orders_cancelled_handler from "./orders_cancelled.js";
import orders_create_handler from "./orders_create.js";
import orders_delete_handler from "./orders_delete.js";
import orders_edited_handler from "./orders_edited.js";
import orders_fulfilled_handler from "./orders_fulfilled.js";
import orders_paid_handler from "./orders_paid.js";
import orders_partially_fulfilled_handler from "./orders_partially_fulfilled.js";
import orders_updated_handler from "./orders_updated.js";
import order_transactions_create_handler from "./order_transactions_create.js";
import payment_terms_create_handler from "./payment_terms_create.js";
import payment_terms_delete_handler from "./payment_terms_delete.js";
import payment_terms_update_handler from "./payment_terms_update.js";
import products_create_handler from "./products_create.js";
import products_delete_handler from "./products_delete.js";
import products_update_handler from "./products_update.js";
import product_listings_add_handler from "./product_listings_add.js";
import product_listings_remove_handler from "./product_listings_remove.js";
import product_listings_update_handler from "./product_listings_update.js";
import profiles_create_handler from "./profiles_create.js";
import profiles_delete_handler from "./profiles_delete.js";
import profiles_update_handler from "./profiles_update.js";
import refunds_create_handler from "./refunds_create.js";
import scheduled_product_listings_add_handler from "./scheduled_product_listings_add.js";
import scheduled_product_listings_remove_handler from "./scheduled_product_listings_remove.js";
import scheduled_product_listings_update_handler from "./scheduled_product_listings_update.js";
import segments_create_handler from "./segments_create.js";
import segments_delete_handler from "./segments_delete.js";
import segments_update_handler from "./segments_update.js";
import selling_plan_groups_create_handler from "./selling_plan_groups_create.js";
import selling_plan_groups_delete_handler from "./selling_plan_groups_delete.js";
import selling_plan_groups_update_handler from "./selling_plan_groups_update.js";
import shop_update_handler from "./shop_update.js";
import tender_transactions_create_handler from "./tender_transactions_create.js";
import themes_create_handler from "./themes_create.js";
import themes_delete_handler from "./themes_delete.js";
import themes_publish_handler from "./themes_publish.js";
import themes_update_handler from "./themes_update.js";

const webhookRegistar = () => {
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

export default webhookRegistar;
