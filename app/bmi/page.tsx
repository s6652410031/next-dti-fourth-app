"use client"
import Image from "next/image"
import bmi from "./../images/bmi.png"

export default function page() {
    return (
        <div className="bg-green-100 flex items-center justify-center min-h-screen">

            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full space-y-6">

                <div className="text-center space-y-2">

                    <h1 className="text-3xl font-bold text-emerald-500">BMI Calculator</h1>

                    <h2 className="text-xl font-semibold text-emerald-500">คำนวณ BMI</h2>
                </div>

                <div className="flex justify-center">
                    <Image src={bmi} alt="BMI Icon" width={200} height={200} className="mx-auto" />
                </div>

                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">ป้อนน้ำหนัก (กิโลกรัม)</label>
                    <input type="number" id="weight" placeholder="เช่น 60" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-200" />
                </div>

                <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">ป้อนส่วนสูง (เซนติเมตร)</label>
                    <input type="number" id="height" placeholder="เช่น 170" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-200" />
                </div>

                <div className="flex space-x-4">
                    <button className="flex-1 bg-emerald-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-emerald-700 transition duration-200">
                        คำนวณ BMI
                    </button>
                    <button className="flex-1 bg-gray-500 text-white font-bold py-3 rounded-lg shadow-md hover:bg-gray-600 transition duration-200">
                        รีเซ็ต
                    </button>
                </div>

                <div className="text-center">
                    <p className="text-xl font-bold text-gray-800">ค่า BMI คำนวณได้: <span id="bmiResult" className="text-emerald-600">0.00</span></p>
                </div>

            </div>

        </div>
    )
}
