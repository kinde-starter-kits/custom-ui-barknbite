"use server";

import { getKindeWidget, type KindePageEvent } from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";
import Layout from "../../layout";

const styles: {
  container: React.CSSProperties;
  sidePanel: React.CSSProperties;
  loginForm: React.CSSProperties;
  heading: React.CSSProperties;
  description: React.CSSProperties;
} = {
  container: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#FEF5ED",
  },
  sidePanel: {
    flex: 1,
    margin: "0.5rem",
    maxWidth: "1024px",
  },
  loginForm: {
    minWidth: "400px",
    margin: "0 auto",
    minInlineSize: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
  },
  heading: {
    fontSize: "32px",
    fontWeight: 400,
    letterSpacing: "-0.02em",
    marginBottom: "1.5rem",
  },
};

const DefaultPage: React.FC<KindePageEvent> = ({ context, request }) => {
  return (
    <Layout context={context} request={request}>
      <div style={styles.container}>
        <div style={styles.sidePanel}></div>

        <main style={styles.loginForm}>
          <div style={{ padding: "2rem" }}>
            <h2 style={styles.heading}>{context.widget.content.heading}</h2>

            {getKindeWidget()}
          </div>
        </main>
      </div>
    </Layout>
  );
};

// Page Component
export default async function Page(event: KindePageEvent): Promise<string> {
  const page = await DefaultPage(event);
  return renderToString(page);
}
