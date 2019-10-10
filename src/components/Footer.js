import React from "react";
import { Face, CameraFront, AccessTime } from "@material-ui/icons";

import FooterButton from "./FooterButton";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer>
      <FooterButton thisSortType="member">
        <Face />
        メンバー順
      </FooterButton>
      <FooterButton thisSortType="costume">
        <CameraFront />
        テーマ順
      </FooterButton>
      <FooterButton thisSortType="createTime">
        <AccessTime />
        登録順
      </FooterButton>
    </footer>
  );
};

export default Footer;
