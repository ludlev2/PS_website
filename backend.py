from flask import Flask, request
import pandas as pd

app = Flask(__name__)

@app.route('/save', methods=['POST'])
def save_data():
    data = request.form['data']
    df = pd.DataFrame([data])
    df.to_excel('data.xlsx', index=False)
    return 'Data saved'