// ** component
import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InforBoxes";

export default async function Home() {
  return (
    <main>
      <Hero></Hero>
      <HomeProperties></HomeProperties>
      <InfoBoxes></InfoBoxes>
    </main>
  );
}
