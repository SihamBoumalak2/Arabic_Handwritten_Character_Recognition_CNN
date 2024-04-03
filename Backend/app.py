from flask import Flask, request, jsonify
from keras.models import load_model
import numpy as np
from PIL import Image
import io
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app, support_credentials=True)
model = load_model('C:\\Users\\bouma\\Downloads\\Intermediate_code\\Models\\IS_THE_arabic_handwriting_model.h5')  # Load your trained model
@app.route('/convert', methods=['POST'])
@cross_origin(origin='*')
def convert():
    image = Image.open(io.BytesIO(request.files['file'].read())).convert('L')
    image = image.resize((32, 32))
    image = np.array(image).reshape(1, 32, 32, 1) / 255.0
    prediction = model.predict(image)
    predicted_class = np.argmax(prediction, axis=1)[0]
    arabic_character = map_class_to_character(predicted_class)
    return jsonify({'character': arabic_character})
def map_class_to_character(class_index):
    class_to_character = {
        1: "الف,Alif",
        2: "باء, Bae",
        3: "تاء, Tae",
        4: "ثاء, Thae",
        5: "جيم, Jim",
        6: "حاء, Hae",
        7: "خاء, Khae",
        8: "دال, Dal",
        9: "ذال, Zal",
        10: "راء, Rae",
        11: "زين, Zayn",
        12: "سين, Sin",
        13: "شين, Shin",
        14: "صاد, Sad",
        15: "ضاد, Dad",
        16: "طاء, Tae",
        17: "ظاء, Dae",
        18: "عين, Ayn",
        19: "غين, Ghayn",
        20: "فاء, Fae",
        21: "قاف, Kaf",
        22: "كاف, Kaf",
        23: "لام, Lam",
        24: "ميم, Mim",
        25: "نون, Noun",
        26: "هاء, Hae",
        27: "واو, Waw",
        28: "ياء, Yae"
    }
    return class_to_character.get(class_index, " Unrecognized Character!")
if __name__ == '__main__':
    app.run(debug=True)
