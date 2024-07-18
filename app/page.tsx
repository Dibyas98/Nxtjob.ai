import Image from "next/image";
import Navbar from "./component/navbar/Navbar";
import WorkWithUs from "./component/workwithus/WorkWithUs";
import BeforeWeGetStart from "./component/beforewegetstart/BeforeWeGetStart";
import BeTheBest from "./component/bethebest/BeTheBest";
import EqBeatIq from "./component/eqbeatiq/EqBeatIq";
import Vaccencies from "./component/vaccencies/Vaccencies";
import SoundFamilar from "./component/soundfamilar/SoundFamilar";
import MeetTheAhead from "./component/meettheahead/MeetTheAhead";
import ThinkOfYou from "./component/thinkofyou/ThinkOfYou";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <section className="mt-16">
        <EqBeatIq></EqBeatIq>
        <SoundFamilar></SoundFamilar>
        <MeetTheAhead></MeetTheAhead>
        <BeTheBest></BeTheBest>
        <ThinkOfYou></ThinkOfYou>
        <BeforeWeGetStart></BeforeWeGetStart>
        <WorkWithUs />
        <Vaccencies/>
      </section>
    </>
  );
}
