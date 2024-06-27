"use client";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-blue-700 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {t("find-the-perfect-rental")}
          </h1>
          <p className="my-4 text-xl text-white">{t("discover")}</p>
        </div>
        <form className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
            <label htmlFor="location" className="sr-only">
              {t("location")}
            </label>
            <input
              type="text"
              id="location"
              placeholder="Enter Location (City, State, Zip, etc"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-2/5 md:pl-2">
            <label htmlFor="property-type" className="sr-only">
              {t("property-type")}
            </label>
            <select
              id="property-type"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="All">{t("all")}</option>
              <option value="Apartment">{t("apartment")}</option>
              <option value="Studio">Studio</option>
              <option value="Condo">{t("condo")}</option>
              <option value="House">{t("house")}</option>
              <option value="Cabin Or Cottage">{t("cabin-or-cottage")}</option>
              <option value="Loft">{t("loft")}</option>
              <option value="Room">{t("room")}</option>
              <option value="Other">{t("other")}</option>
            </select>
          </div>
          <button
            type="submit"
            className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
          >
            {t("search")}
          </button>
        </form>
      </div>
    </section>
  );
};
export default Hero;
