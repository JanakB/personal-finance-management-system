from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import numpy as np
import joblib
import os
from .serializers import IncomeSerializer

# get to pickled model
model_path = os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','Model','IncomePredictionModel.pkl')

# load model
model = joblib.load(model_path)

@api_view(['POST'])
def predict(request):
    if request.method == 'POST':
        print("hello")
        
        # deserialize the input data from the request
        serializer = IncomeSerializer(data=request.data)
        a = serializer.is_valid()
        print(serializer.errors)
        if serializer.is_valid():
            print("hello")
            # convert input data to input format for model
            input_data = tuple(serializer.validated_data.values())
            print(input_data)
            input_data_as_numpy_array = np.array(input_data)
            input_data_as_numpy_array[2] = input_data_as_numpy_array[2] + 1
            print(input_data_as_numpy_array)
            print(input_data_as_numpy_array[0])
            print(input_data_as_numpy_array[1])
            print(input_data_as_numpy_array[2])
            input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)
            print(input_data_reshaped)
        # make prediction
        prediction = model.predict(input_data_reshaped)

        # return JSON response
        return Response(prediction)

