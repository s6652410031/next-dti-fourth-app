import Image from "next/image";
import bmi from "./images/bmi.png";
import bmr from "./images/bmr.png";
import car from "./images/car.png";
import logo from "./images/logo.png";
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-teal-50 flex items-center justify-center min-h-screen p-4">

      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image src={logo} alt="logo" width={150} height={150} className="mx-auto" />
        </div>

        <h1 className="text-4xl font-bold text-teal-800 mb-6 md:text-5xl">เครื่องคำนวณออนไลน์</h1>
        <p className="text-lg text-teal-700 mb-12">เลือกเครื่องมือคำนวณที่คุณต้องการใช้งาน</p>

        <div className="grid gap-8 md:grid-cols-3">
          <Link href="/bmi" className="card bg-white p-8 rounded-2xl shadow-lg border border-teal-200 block">
            <div className="flex flex-col items-center">
              {/*CARD BMI*/}
              <Image src={bmi} alt="bmi" width={150} height={150} className="mx-auto" />
              {/*CARD BMI*/}
              <h2 className="text-2xl font-semibold text-lime-800">เครื่องคำนวณ BMI</h2>
              <p className="text-teal-600 mt-2">คำนวณดัชนีมวลกาย</p>
            </div>
          </Link>
          <Link href="/bmr" className="card bg-white p-8 rounded-2xl shadow-lg border border-teal-200 block">
            <div className="flex flex-col items-center">
              {/*CARD BMR*/}
              <Image src={bmr} alt="bmr" width={150} height={150} className="mx-auto" />
              {/*CARD BMR*/}
              <h2 className="text-2xl font-semibold text-indigo-800">เครื่องคำนวณ BMR</h2>
              <p className="text-teal-600 mt-2">คำนวณอัตราการเผาผลาญ</p>
            </div>
          </Link>
          <Link href="/carinstallment" className="card bg-white p-8 rounded-2xl shadow-lg border border-teal-200 block">
            <div className="flex flex-col items-center">
              {/*CARD CAR*/}
              <Image src={car} alt="car" width={150} height={150} className="mx-auto" />
              {/*CARD CAR*/}
              <h2 className="text-2xl font-semibold text-red-800">เครื่องคำนวณค่างวดรถ</h2>
              <p className="text-teal-600 mt-2">คำนวณค่างวดรถยนต์</p>
            </div>
          </Link>

        </div>
      </div>

    </div>
  );
}