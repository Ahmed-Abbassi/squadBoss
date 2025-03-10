# -*- coding: utf-8 -*-
"""
Created on Fri Mar  7 00:05:05 2025

@author: Hasnaoui
"""

from flask import Flask, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)

# Charger le modèle sauvegardé
model = joblib.load('model.joblib')

# Liste des caractéristiques attendues par le modèle
features = ['Age', 'Potential', 'Height(in cm)', 'Shooting Total', 'Passing Total', 'Dribbling Total', 'Defending Total']

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        input_data = pd.DataFrame([data])  # Créer un DataFrame à partir des données JSON
        prediction = model.predict(input_data[features])[0]
        return jsonify({'prediction': prediction})
    except Exception as e:
        return jsonify({'error': str(e)})


app.run(debug=True)