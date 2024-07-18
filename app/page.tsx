import Image from "next/image";
import Navbar from "./component/navbar/Navbar";
import WorkWithUs from "./component/workwithus/WorkWithUs";
import BeforeWeGetStart from "./component/beforewegetstart/BeforeWeGetStart";
import BeTheBest from "./component/bethebest/BeTheBest";
import EqBeatIq from "./component/eqbeatiq/EqBeatIq";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <section className="mt-16">
        <EqBeatIq></EqBeatIq>
        <BeTheBest></BeTheBest>
        <BeforeWeGetStart></BeforeWeGetStart>
        <WorkWithUs />
      </section>
    </>
  );
}
