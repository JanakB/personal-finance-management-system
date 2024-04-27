import React, { useState } from 'react'
import './Form.css'

function Form() {

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
            console.log(JSON.stringify(modifiedFormData));
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
                // console.log(JSON.stringify(modifiedFormData));
        }

  return (
    <>
        <div className="wrapper">
            <form onSubmit={handleSubmit} className='form'>
                <div className="group">
                <div className="container">
                <div className='formEle'>
                    <label htmlFor="">Age</label>
                    <input name='age' type="number" value={formData.age} onChange={handleChange} />
                </div>

                <div className='formEle'>
                    <label htmlFor="id_workclass">Workclass:</label>
                    <select name="workclass" required id="id_workclass" value={formData.workclass} onChange={handleChange}>

                        <option value="0">Private</option>
                        <option value="1">Local-gov</option>
                        <option value="2">Self-emp-not-inc</option>
                        <option value="3">Federal-gov</option>
                        <option value="4">State-gov</option>
                        <option value="5">Self-emp-inc</option>
                        <option value="6">Without-pay</option>
                        <option value="7">Never-worked</option>
                    </select>
                </div>


                <div className='formEle'>
                    <label htmlFor="id_education_num">Education num:</label>
                    <select name="education_num" required id="id_education_num" value={formData.education_num} onChange={handleChange}>

                        <option value="1">Preschool</option>
                        <option value="2">1st-4th</option>
                        <option value="3">5th-6th</option>
                        <option value="4">7th-8th</option>
                        <option value="5">9th</option>
                        <option value="6">10th</option>
                        <option value="7">11th</option>
                        <option value="8">12th</option>
                        <option value="9">HS-grad</option>
                        <option value="10">Some-college</option>
                        <option value="11">Assoc-voc</option>
                        <option value="12">Assoc-acdm</option>
                        <option value="13">Bachelors</option>
                        <option value="14">Masters</option>
                        <option value="15">Prof-school</option>
                        <option value="16">Doctorate</option>
                    </select>
                </div>

                <div className='formEle'>
                    <label htmlFor="id_marital_status">Marital status:</label>
                    <select name="marital_status" required id="id_marital_status" value={formData.marital_status} onChange={handleChange}>

                        <option value="0">Never-married</option>
                        <option value="1">Married-civ-spouse</option>
                        <option value="2">Widowed</option>
                        <option value="3">Divorced</option>
                        <option value="4">Separated</option>
                        <option value="5">Married-spouse-absent</option>
                        <option value="6">Married-AF-spouse</option>
                    </select>
                </div>

                <div className='formEle'>
                    <label htmlFor="id_occupation">Occupation:</label>
                    <select name="occupation" required id="id_occupation" value={formData.occupation} onChange={handleChange}>

                        <option value="0">Machine-op-inspct</option>
                        <option value="1">Farming-fishing</option>
                        <option value="2">Protective-serv</option>
                        <option value="3">Other-service</option>
                        <option value="4">Prof-specialty</option>
                        <option value="5">Craft-repair</option>
                        <option value="6">Adm-clerical</option>
                        <option value="7">Exec-managerial</option>
                        <option value="8">Tech-support</option>
                        <option value="9">Sales</option>
                        <option value="10">Priv-house-serv</option>
                        <option value="11">Transport-moving</option>
                        <option value="12">Handlers-cleaners</option>
                        <option value="13">Armed-Forces</option>
                    </select>
                </div>

                <div className='formEle'>
                    <label htmlFor="id_relationship">Relationship:</label>
                    <select name="relationship" required id="id_relationship" value={formData.relationship} onChange={handleChange}>

                        <option value="0">Own-child</option>
                        <option value="1">Husband</option>
                        <option value="2">Not-in-family</option>
                        <option value="3">Unmarried</option>
                        <option value="4">Wife</option>
                        <option value="5">Other-relative</option>
                    </select>
                </div>
                </div>

                <div className="container">
                <div className='formEle'>
                    <label htmlFor="id_race">Race:</label>
                    <select name="race" required id="id_race" value={formData.race} onChange={handleChange}>

                        <option value="0">Black</option>
                        <option value="1">White</option>
                        <option value="2">Asian-Pac-Islander</option>
                        <option value="3">Other</option>
                        <option value="4">Amer-Indian-Eskimo</option>
                    </select>
                </div>

                <div className='formEle'>
                    <label htmlFor="id_gender">Gender:</label>
                    <select name="gender" required id="id_gender" value={formData.gender} onChange={handleChange}>

                        <option value="0">Male</option>
                        <option value="1">Female</option>
                    </select>
                </div>

                <div className='formEle'>
                <label htmlFor="id_capital_gain">Capital gain:</label>
                <input type="number" name="capital_gain" required id="id_capital_gain" value={formData.capital_gain} onChange={handleChange} />
                </div>

                <div className='formEle'>
                <label htmlFor="id_capital_loss">Capital loss:</label>
                <input type="number" name="capital_loss" required id="id_capital_loss" value={formData.capital_loss} onChange={handleChange} />
                </div>

                <div className='formEle'>
                <label htmlFor="id_hours_per_week">Hours per week:</label>
                <input type="number" name="hours_per_week" required id="id_hours_per_week" value={formData.hours_per_week} onChange={handleChange} />
                </div>

                <div className='formEle'>
                <label htmlFor="id_native_country">Native country:</label>
                <select name="native_country" required id="id_native_country" value={formData.native_country} onChange={handleChange}>
                    <option value="0">United-States</option>
                    <option value="1">Peru</option>
                    <option value="2">Guatemala</option>
                    <option value="3">Mexico</option>
                    <option value="4">Dominican-Republic</option>
                    <option value="5">Ireland</option>
                    <option value="6">Germany</option>
                    <option value="7">Philippines</option>
                    <option value="8">Thailand</option>
                    <option value="9">Haiti</option>
                    <option value="10">El-Salvador</option>
                    <option value="11">Puerto-Rico</option>
                    <option value="12">Vietnam</option>
                    <option value="13">South</option>
                    <option value="14">Columbia</option>
                    <option value="15">Japan</option>
                    <option value="16">India</option>
                    <option value="17">Cambodia</option>
                    <option value="18">Poland</option>
                    <option value="19">Laos</option>
                    <option value="20">England</option>
                    <option value="21">Cuba</option>
                    <option value="22">Taiwan</option>
                    <option value="23">Italy</option>
                    <option value="24">Canada</option>
                    <option value="25">Portugal</option>
                    <option value="26">China</option>
                    <option value="27">Nicaragua</option>
                    <option value="28">Honduras</option>
                    <option value="29">Iran</option>
                    <option value="30">Scotland</option>
                    <option value="31">Jamaica</option>
                    <option value="32">Ecuador</option>
                    <option value="33">Yugoslavia</option>
                    <option value="34">Hungary</option>
                    <option value="35">Hong</option>
                    <option value="36">Greece</option>
                    <option value="37">Trinadad&amp;Tobago</option>
                    <option value="38">Outlying-US(Guam-USVI-etc)</option>
                    <option value="39">France</option>
                    <option value="40">Holand-Netherlands</option>
                </select>
                </div>
                </div>
                </div>

                <button className='btn' type='submit' onClick={handleSubmit}>Predict Income</button>
            </form>

            <div className="predict">
            {result && (
                <h1>{prediction[0] ? (
                    <span>You probably have income greater than $50,000</span>
                  ) : (
                    <span>You probably have income less than $50,000</span>
                  )}</h1>
            )}
            {/* [[46  0 15  1 10  1  1  0  0  0 40  0]] */}
            </div>
        </div>

        
    </>
  )
}

export default Form

