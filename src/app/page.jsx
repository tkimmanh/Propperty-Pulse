// ** component
import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InforBoxes";
import connectDB from "@/config/database";

export default async function Home() {
  await connectDB();
  return (
    <main>
      <Hero></Hero>
      <HomeProperties></HomeProperties>
      <InfoBoxes></InfoBoxes>
    </main>
  );
}
