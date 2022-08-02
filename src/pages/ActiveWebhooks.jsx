import { navigate } from "raviger";
import { useQuery, gql } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useAppBridge } from "@shopify/app-bridge-react";
import { authenticatedFetch } from "@shopify/app-bridge-utils";
import { Page, Card, DataTable, Button } from "@shopify/polaris";

const ActiveWebhooks = () => {
  const app = useAppBridge();
  const fetch = authenticatedFetch(app);
  const [shop, setShop] = useState();

  const getInstalledWebhooks = gql`
    {
      webhookSubscriptions(first: 90) {
        edges {
          node {
            topic
            endpoint {
              __typename
              ... on WebhookHttpEndpoint {
                callbackUrl
              }
            }
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(getInstalledWebhooks);

  const fetchShop = async () => {
    console.log("Fetching shop");
    const res = await fetch("/apps/api/gql"); //fetch instance of userLoggedInFetch(app)
    const response = await res.json();
    setShop(response.body.data.shop.url.replace(/https:\/\//, ""));
  };

  useEffect(() => {
    fetchShop();
  }, []);

  let rows = [];

  if (loading) {
    console.log("loading", loading);
  }
  if (data) {
    console.log("Rendering Data");
    Object.entries(data.webhookSubscriptions.edges).map(([key, value]) => {
      const topic = value.node.topic;
      const callbackUrl = value.node.endpoint.callbackUrl;
      rows.push([topic, callbackUrl]);
    });
  }

  if (error) {
    rows.push(["Error", "Check console for more info"]);
    console.log("error", error.message);
  }

  return (
    <Page
      fullWidth
      subtitle={`https://${appOrigin}/`}
      title="Registered Webhooks"
      breadcrumbs={[{ content: "Home", onAction: () => navigate("/") }]}
      primaryAction={
        shop && (
          <Button primary url={`https://${appOrigin}/auth?shop=${shop}`}>
            Reauth
          </Button>
        )
      }
    >
      <Card>
        <DataTable
          columnContentTypes={["text", "text"]}
          headings={["Topic", "Callback Url"]}
          rows={rows}
        />
      </Card>
    </Page>
  );
};

export default ActiveWebhooks;
