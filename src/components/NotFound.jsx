import React from "react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-full flex items-center justify-center  p-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md text-center">
                <div className="flex justify-center mb-4">
                    <AlertTriangle className="text-yellow-500 w-12 h-12" />
                </div>
                <h1 className="text-3xl font-bold mb-2 text-gray-600">Сторінку не знайдено</h1>
                <p className="text-gray-600 mb-6">
                    Можливо, ви ввели неправильну адресу або сторінку було видалено.
                </p>
                <Button onClick={() => navigate("/")} className="w-full">
                    На головну
                </Button>
            </div>
        </div>
    );
}
