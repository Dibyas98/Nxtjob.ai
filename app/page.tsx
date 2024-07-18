import Image from "next/image";
import Navbar from "./component/navbar/Navbar";
import WorkWithUs from "./component/workwithus/WorkWithUs";
import BeforeWeGetStart from "./component/beforewegetstart/BeforeWeGetStart";
import BeTheBest from "./component/bethebest/BeTheBest";
import EqBeatIq from "./component/eqbeatiq/EqBeatIq";
import Vaccencies from "./component/vaccencies/Vaccencies";
import SoundFamilar from "./component/soundfamilar/SoundFamilar";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <section className="mt-16">
        <EqBeatIq></EqBeatIq>
        <SoundFamilar></SoundFamilar>
        <BeTheBest></BeTheBest>
        {/* <BeforeWeGetStart></BeforeWeGetStart> */}
        <WorkWithUs />
        <Vaccencies/>
      </section>
    </>
  );
}
