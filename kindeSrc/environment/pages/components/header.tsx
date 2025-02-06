import {
  getDarkModeLogoUrl,
  getKindeLoginUrl,
  getKindeRegisterUrl,
} from "@kinde/infrastructure";
import React from "react";

export const Header = (props: {
  logoAlt: string;
  page: "login" | "register";
}) => {
  return (
    <>
      <style>
        {`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem;
        }

        .logo {
          display: none;
        }

        .action-button {
          color: #184027;
          font-weight: 500;
          font-size: 1rem;
          padding: 0.5rem 1rem;
          border-radius: 99px;
          cursor: pointer;
          text-decoration: none;
        }

        @media only screen and (min-width: 1024px) {
          .logo {
            width: 150px;
            display: block;
          }
        }
      `}
      </style>
      <div className="header">
        <div>
          <img
            className="logo"
            src={getDarkModeLogoUrl()}
            alt={props.logoAlt}
          />
        </div>
        {props.page === "login" ? (
          <a href={getKindeRegisterUrl()} className="action-button">
            SIGN UP
          </a>
        ) : (
          <a href={getKindeLoginUrl()} className="action-button">
            SIGN IN
          </a>
        )}
      </div>
    </>
  );
};
