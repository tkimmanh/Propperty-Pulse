"use client";
import { useTranslation } from "react-i18next";

const NoPropertiesMessage = () => {
  const { t } = useTranslation();
  return <p>{t("no-properties-found")}</p>;
};

export default NoPropertiesMessage;
