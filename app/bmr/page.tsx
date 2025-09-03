"use client"

import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import bmr from "./../images/bmr.png"

export default function Page() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [bmrValue, setBmrValue] = useState<string | null>(null);
    const [error, setError] = useState('');

    const calculateBMR = () => {
        const weightNum = parseFloat(weight);
        const heightNum = parseFloat(height);
        const ageNum = parseInt(age);

        if (isNaN(weightNum) || isNaN(heightNum) || isNaN(ageNum) || !gender || weightNum <= 0 || heightNum <= 0 || ageNum <= 0) {
            setError('กรุณากรอกข้อมูลให้ถูกต้องและครบทุกช่อง');
            setBmrValue(null);
            return;
        }

        setError('');
        let calculatedBmr = 0;
        if (gender === 'male') {
            calculatedBmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
        } else if (gender === 'female') {
            calculatedBmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
        }

        setBmrValue(calculatedBmr.toFixed(2));
    };

    const resetFields = () => {
        setWeight('');
        setHeight('');
        setAge('');
        setGender('');
        setBmrValue(null);
        setError('');
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full">

                <h1 className="text-3xl font-bold text-center text-emerald-500 mb-2">BMR Calculator</h1>
                <h2 className="text-2xl text-center text-emerald-500 mb-6">คำนวณ BMR</h2>


                <div className="flex justify-center mb-6">
                    <Image src={bmr} alt="Health image placeholder" width={200} height={200} className="mx-auto" />
                </div>

                <div className="space-y-4">

                    <div>
                        <label htmlFor="weight" className="block text-sm font-medium text-gray-700">ป้อนน้ำหนัก (กิโลกรัม)</label>
                        <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200" placeholder="เช่น 60" />
                    </div>


                    <div>
                        <label htmlFor="height" className="block text-sm font-medium text-gray-700">ป้อนส่วนสูง (เซนติเมตร)</label>
                        <input type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200" placeholder="เช่น 170" />
                    </div>


                    <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">อายุ (ปี)</label>
                        <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200" placeholder="เช่น 25" />
                    </div>


                    <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">เพศ</p>
                        <div className="flex items-center space-x-4">

                            <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300" />
                            <label htmlFor="male" className="text-gray-700">ชาย</label>


                            <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300" />
                            <label htmlFor="female" className="text-gray-700">หญิง</label>
                        </div>
                    </div>
                </div>


                <div className="mt-6">
                    <div className="flex space-x-4 mb-4">
                        <button onClick={calculateBMR} id="calculateBtn" className="flex-1 bg-green-600 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-200 transform hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">คำนวณ BMR</button>
                        <button onClick={resetFields} id="resetBtn" className="flex-1 bg-red-600 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-200 transform hover:scale-105 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">รีเซ็ต</button>
                    </div>

                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                    <div className="text-center bg-gray-100 p-4 rounded-xl border border-gray-200 mb-4">
                        <p className="text-lg font-semibold text-gray-800">ค่า BMR (ที่ต้องการในแต่ละวัน): <span id="bmrResult" className="text-green-600 font-bold">{bmrValue || '0.00'}</span> kcal</p>
                    </div>
                    <Link
                        href="/"
                        className="w-full text-center py-3 px-5 bg-gray-200 text-gray-800 rounded-xl shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors duration-200 block"
                    >
                        กลับสู่หน้าหลัก
                    </Link>
                </div>
            </div>
        </div>
    )
}
