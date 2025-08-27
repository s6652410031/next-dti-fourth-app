"use client"

import Image from "next/image"
import bmr from "./../images/bmr.png"

export default function page() {
    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full">

                <h1 className="text-3xl font-bold text-center text-emerald-500 mb-2">BMR Calculator</h1>
                <h2 className="text-2xl text-center text-emerald-500 mb-6">คำนวณ BMI</h2>


                <div className="flex justify-center mb-6">
                    <Image src={bmr} alt="Health image placeholder" width={200} height={200} className="mx-auto" />
                </div>


                <div className="space-y-4">

                    <div>
                        <label className="block text-sm font-medium text-gray-700">ป้อนน้ำหนัก (กิโลกรัม)</label>
                        <input type="number" id="weight" className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200" placeholder="เช่น 60" />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700">ป้อนส่วนสูง (เซนติเมตร)</label>
                        <input type="number" id="height" className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200" placeholder="เช่น 170" />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700">อายุ (ปี)</label>
                        <input type="number" id="age" className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200" placeholder="เช่น 25" />
                    </div>


                    <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">เพศ</p>
                        <div className="flex items-center space-x-4">

                            <input type="radio" id="male" name="gender" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300" />
                            <label className="text-gray-700">ชาย</label>


                            <input type="radio" id="female" name="gender" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300" />
                            <label className="text-gray-700">หญิง</label>
                        </div>
                    </div>
                </div>


                <div className="mt-6">
                    <div className="flex space-x-4 mb-4">
                        <button id="calculateBtn" className="flex-1 bg-green-600 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-200 transform hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">คำนวณ BMI</button>
                        <button id="resetBtn" className="flex-1 bg-red-600 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-200 transform hover:scale-105 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">รีเซ็ต</button>
                    </div>


                    <div className="text-center bg-gray-100 p-4 rounded-xl border border-gray-200">
                        <p className="text-lg font-semibold text-gray-800">ค่า BMI คำนวณได้: <span id="bmiResult" className="text-green-600 font-bold">0.00</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
