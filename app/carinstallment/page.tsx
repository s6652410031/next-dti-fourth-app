"use client"

import Image from "next/image"
import car from "./../images/car.png"

export default function page() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">


            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full mx-auto">
                <div className="text-center space-y-4">

                    <h1 className="text-3xl sm:text-4xl font-bold text-emerald-500">Car Installment Calculator</h1>
                    <p className="text-base sm:text-lg text-emerald-500 font-medium">คำนวณ Car Installment</p>


                    <div className="flex justify-center my-6">
                        <Image src={car} alt="Car Image" width={200} height={200} className="mx-auto" />
                    </div>


                    <div className="space-y-6 text-left">

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อผู้คำนวณ</label>
                            <input type="text" id="name" placeholder="กรอกชื่อของคุณ" className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200" />
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">ราคารถ (บาท)</label>
                            <input type="number" id="car-price" placeholder="ระบุราคารถ" className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200" />
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">ดอกเบี้ยต่อปี (%)</label>
                            <input type="number" id="interest-rate" placeholder="ระบุอัตราดอกเบี้ย" className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200" />
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">เงินดาวน์ (%)</label>
                            <div className="flex flex-wrap gap-2">

                                <button className="down-btn px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-emerald-50 focus:bg-emerald-100 focus:ring-2 focus:ring-emerald-500 transition-colors duration-200" data-value="15">15%</button>
                                <button className="down-btn px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-emerald-50 focus:bg-emerald-100 focus:ring-2 focus:ring-emerald-500 transition-colors duration-200" data-value="20">20%</button>
                                <button className="down-btn px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-emerald-50 focus:bg-emerald-100 focus:ring-2 focus:ring-emerald-500 transition-colors duration-200" data-value="25">25%</button>
                                <button className="down-btn px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-emerald-50 focus:bg-emerald-100 focus:ring-2 focus:ring-emerald-500 transition-colors duration-200" data-value="30">30%</button>
                                <button className="down-btn px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-emerald-50 focus:bg-emerald-100 focus:ring-2 focus:ring-emerald-500 transition-colors duration-200" data-value="35">35%</button>
                            </div>
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">จำนวนเดือนที่ผ่อน</label>
                            <select id="installment-period" className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200">
                                <option value="">เลือกจำนวนเดือน</option>
                                <option value="12">12 เดือน</option>
                                <option value="24">24 เดือน</option>
                                <option value="36">36 เดือน</option>
                                <option value="48">48 เดือน</option>
                            </select>
                        </div>
                    </div>


                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                        <button id="calculate-btn" className="w-full bg-emerald-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors duration-200">
                            คำนวณ
                        </button>
                        <button id="reset-btn" className="w-full bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors duration-200">
                            รีเซ็ต
                        </button>
                    </div>


                    <div className="mt-6 p-4 bg-emerald-50 rounded-xl">
                        <p className="text-xl font-bold text-gray-800">
                            ยอดผ่อนชำระต่อเดือน: <span id="monthly-payment" className="text-emerald-600">0.00</span> บาท
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
