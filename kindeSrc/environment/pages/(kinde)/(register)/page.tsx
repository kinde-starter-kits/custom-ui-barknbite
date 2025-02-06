"use server";

import {
  getDarkModeLogoUrl,
  getKindeLoginUrl,
  getKindeWidget,
  getLogoUrl,
  type KindePageEvent,
} from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";
import Layout from "../../layout";
import { Header } from "../../components/header";

const styles: {
  container: React.CSSProperties;
  loginForm: React.CSSProperties;
  loginFormWrapper: React.CSSProperties;
  heading: React.CSSProperties;
  policies: React.CSSProperties;
  links: React.CSSProperties;
  link: React.CSSProperties;
  signInButton: React.CSSProperties;
} = {
  container: {
    height: "100vh",
    backgroundColor: "#FEF5ED",
    color: "#184027",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  loginForm: {
    maxWidth: "400px",
    width: "100%",
    margin: "0 auto",
    minInlineSize: "2rem",
  },
  loginFormWrapper: {
    display: "flex",
    padding: "2rem",
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
  policies: {
    textAlign: "center",
    marginTop: "1.5rem",
    fontSize: "0.8rem",
    padding: "2rem",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    marginTop: "0.5rem",
    gap: "0.5rem",
  },
  link: {
    color: "#184027",
    fontWeight: 500,
  },
  signInButton: {
    color: "#184027",
    fontWeight: 500,
    fontSize: "1rem",
    padding: "0.5rem 1rem",
    borderRadius: "99px",
    cursor: "pointer",
    textDecoration: "none",
  },
};

const DefaultPage: React.FC<KindePageEvent> = ({ context, request }) => {
  return (
    <Layout context={context} request={request}>
      <div style={styles.container}>
        <Header logoAlt={context.widget.content.logo_alt} page="register" />
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="sidepanel">
            <img src={getLogoUrl()} alt={context.widget.content.logo_alt} />
          </div>

          <main style={styles.loginFormWrapper}>
            <div style={styles.loginForm}>
              <h2 style={styles.heading}>{context.widget.content.heading}</h2>

              {getKindeWidget()}
            </div>
          </main>
        </div>
        <div style={styles.policies}>
          <p>By continuing, you agree to our policies</p>
          <div style={styles.links}>
            <a style={styles.link} href="#">
              Privacy Policy
            </a>
            ·
            <a style={styles.link} href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Page Component
export default async function Page(event: KindePageEvent): Promise<string> {
  const page = await DefaultPage(event);
  return renderToString(page);
}
