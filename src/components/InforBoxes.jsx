"use client";
// ** react
import React from "react";

// ** hooks
import { useTranslation } from "react-i18next";

// ** components
import InfoBox from "@/components/InforBox";

const InfoBoxes = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading={t("for-renters")}
            backgroundColor="bg-gray-200"
            buttonInfo={{
              text: t("browe-properties"),
              link: "/properties",
              backgroundColor: "bg-black",
            }}
          >
            {t("find-your-dream-rental-property")}
          </InfoBox>

          <InfoBox
            heading={t("for-property-owners")}
            backgroundColor="bg-blue-100"
            buttonInfo={{
              text: t("add-property"),
              link: "/properties/add",
              backgroundColor: "bg-blue-500",
            }}
          >
            {t("list-your-properties")}
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
