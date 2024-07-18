import Image from "next/image";
import Navbar from "./component/navbar/Navbar";
import WorkWithUs from "./component/workwithus/WorkWithUs";
import BeforeWeGetStart from "./component/beforewegetstart/BeforeWeGetStart";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <section className="mt-16">
        <BeforeWeGetStart></BeforeWeGetStart>
        <WorkWithUs />
      </section>
    </>
  );
}
