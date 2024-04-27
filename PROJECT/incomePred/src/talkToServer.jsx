import axios from 'axios';

import React, { useState } from 'react'

const talkToServer = () => {
  return (
    <div>talkToServer</div>
  )
}

export default talkToServer




const [send, setSend] = useState(false)
const [result, setResult] = useState(false)

const [formData, setFormData] = useState({
    age: "",
    workclass: "",
    education_num: "",
    marital_status: "",
    occupation: "",
    relationship: "",
    race: "",
    gender: "",
    capital_gain: "",
    capital_loss: "",
    hours_per_week: "",
    native_country: "",
})

const [prediction, setPrediction] = useState(null)

const handleChange = (event) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value
    })
}

const modifiedFormData = {
    age: Number(formData.age),
    workclass: Number(formData.workclass),
    education_num: Number(formData.education_num),
    marital_status: Number(formData.marital_status),
    occupation: Number(formData.occupation),
    relationship: Number(formData.relationship),
    race: Number(formData.race),
    gender: Number(formData.gender),
    capital_gain: Number(formData.capital_gain),
    capital_loss: Number(formData.capital_loss),
    hours_per_week: Number(formData.hours_per_week),
    native_country: Number(formData.native_country),
}

const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch('http://127.0.0.1:8000/api/predict/', {
            method: 'POST',
            body: JSON.stringify(modifiedFormData),
            headers: {
                'content-Type': 'application/json'
            }
        })
        const data = await response.json();
        setPrediction(data);
        setSend(true);
        setResult(true);
        console.log(prediction);
        console.log(JSON.stringify(modifiedFormData));
    } catch (error) {
        console.error(error);
    }
}