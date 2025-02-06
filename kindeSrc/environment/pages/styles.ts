// CSS Variables configuration
const kindeVariables = {
  baseFontFamily:
    "-apple-system, system-ui, BlinkMacSystemFont, Helvetica, Arial, Segoe UI, Roboto, sans-serif",
  buttonPrimaryBackgroundColor: "transparent",
  buttonPrimaryColor: "#184027",
  buttonPrimaryBorderWidth: "2px",
  buttonPrimaryBorderColor: "#184027",

  buttonSecondaryBackgroundColor: "transparent",
  buttonSecondaryColor: "#184027",
  buttonSecondaryBorderWidth: "2px",
  buttonSecondaryBorderColor: "#184027",
  buttonSecondaryBorderStyle: "solid",

  buttonBorderRadius: "99px",
} as const;

export const generateCSSVariables = (): string => `
  :root {
    --kinde-base-font-family: ${kindeVariables.baseFontFamily};
    --kinde-button-primary-background-color: ${kindeVariables.buttonPrimaryBackgroundColor};
    --kinde-button-primary-color: ${kindeVariables.buttonPrimaryColor};
    --kinde-button-border-radius: ${kindeVariables.buttonBorderRadius};
    --kinde-button-primary-border-width: ${kindeVariables.buttonPrimaryBorderWidth};
    --kinde-button-primary-border-color: ${kindeVariables.buttonPrimaryBorderColor};

    --kinde-button-secondary-background-color: ${kindeVariables.buttonSecondaryBackgroundColor};
    --kinde-button-secondary-border-width: ${kindeVariables.buttonSecondaryBorderWidth};
    --kinde-button-secondary-border-color: ${kindeVariables.buttonSecondaryBorderColor};
    --kinde-button-secondary-border-style: ${kindeVariables.buttonSecondaryBorderStyle};
    --kinde-control-checkable-border-color: #184027;
    --kinde-control-checkable-border-radius: 0px;
    --kinde-control-checkable-border-width: 2px;
  }



  [data-kinde-control-label] {
    font-weight: 400;
    font-size: 1rem;
  }

  [data-kinde-control-select-text] {
    border: none;
    border-bottom: 1px solid #184027;
  }

  [data-kinde-control-checkable-container] {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  [for=sign_up_sign_in_credentials_p_kp_usr_is_marketing_opt_in] {
    font-weight: 500;
  }

  [data-kinde-fallback-action] {
    display: none;
  }

  @media only screen and (min-width: 600px) {
    .sidepanel {
      display: none;
    }
  }
`;
