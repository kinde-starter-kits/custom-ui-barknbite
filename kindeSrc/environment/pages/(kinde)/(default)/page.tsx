"use server";

import {
  getKindeLoginUrl,
  getKindeWidget,
  getLogoUrl,
  type KindePageEvent,
} from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";
import Layout from "../../layout";

const styles: {
  container: React.CSSProperties;
  loginForm: React.CSSProperties;
  loginFormWrapper: React.CSSProperties;
  heading: React.CSSProperties;
  policies: React.CSSProperties;
  links: React.CSSProperties;
  link: React.CSSProperties;
  signInButtonWrapper: React.CSSProperties;
  signInButton: React.CSSProperties;
} = {
  container: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#FEF5ED",
    color: "#184027",
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
    position: "absolute",
    bottom: "1rem",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "0.8rem",
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
  signInButtonWrapper: {
    position: "absolute",
    top: "2rem",
    right: "2rem",
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
        <div style={styles.signInButtonWrapper}>
          <a href={getKindeLoginUrl()} style={styles.signInButton}>
            SIGN IN
          </a>
        </div>

        <div className="sidepanel">
          <img src={getLogoUrl()} alt={context.widget.content.logo_alt} />
        </div>

        <main style={styles.loginFormWrapper}>
          <div style={styles.loginForm}>
            <h2 style={styles.heading}>{context.widget.content.heading}</h2>

            {getKindeWidget()}
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
