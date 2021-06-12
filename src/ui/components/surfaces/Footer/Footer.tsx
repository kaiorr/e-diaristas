import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";
import { Typography } from "@material-ui/core";

export const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <div>
          <FooterTitle>Quem Somos</FooterTitle>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo sit
            aperiam distinctio nemo totam tempore, aliquid veritatis rem soluta
            ex doloremque eveniet praesentium quibusdam, cum mollitia eos sequi
            provident saepe. Optio quas fugit, rerum nihil voluptatem nostrum
            deserunt, velit temporibus ab atque aperiam et necessitatibus. Dolor
            corporis commodi blanditiis, sapiente fuga illo delectus quam
            deleniti laudantium ipsam dicta vero iusto! Blanditiis voluptatem
            minima ipsum alias natus, quia, libero sed accusantium nulla
            doloremque ad repellat similique ex adipisci excepturi reiciendis
            praesentium laboriosam in. Quo, sunt nihil atque placeat ut saepe
            ab.
          </Typography>
        </div>
        <div>
          <FooterTitle>Baixar nosso App</FooterTitle>
          <AppList>
            <li>
              <a>
                <img src={"/img/logos/app-store.png"} alt={"App Store"} />
              </a>
            </li>
            <li>
              <a>
                <img src={"/img/logos/google-play.png"} alt={"App Store"} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};
