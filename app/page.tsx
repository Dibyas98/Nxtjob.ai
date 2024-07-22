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
import SelfImprovement from "./component/selfimprovement/SelfImprovement";
import MasterYourLife from "./component/masteryourlife/MasterYourLife";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <section className="mt-16">
        <MasterYourLife></MasterYourLife>
        {/* <EqBeatIq></EqBeatIq>
        <SoundFamilar></SoundFamilar>
        <MeetTheAhead></MeetTheAhead>
        <SelfImprovement></SelfImprovement>
        <BeTheBest></BeTheBest>
        <ThinkOfYou></ThinkOfYou>
        <BeforeWeGetStart></BeforeWeGetStart>
        <WorkWithUs />
        <Vaccencies/> */}
      </section>
    </>
  );
}
