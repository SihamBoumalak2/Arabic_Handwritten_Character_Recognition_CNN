from flask import Flask, request, jsonify  # Flask web framework
from flask_cors import CORS  # Cross-Origin Resource Sharing
from tensorflow.keras.models import load_model  # Load Keras model
import numpy as np  # Numerical operations
import cv2  # OpenCV for image processing

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for the app

# Load the trained model
model_path = 'C:/Users/bouma/Downloads/Intermediate_code/Models/model4arabic.keras'
model = load_model(model_path)

# List of Arabic characters
arabic_characters = ["أ Alif", "ب Bae", "ت Tae", "ث Thae", "ج Jim ", "ح Hae ", "خ Khae", " Dal د", "Zal ذ", "Rae ر", "Zay ز", " Sin س", "Shin ش", " Sad ص", "Dad ض", "ط Tae ", "ظ Dad ", "Ayn ع", "Ghayn غ", "Fae ف", "Kaf ق", " ك Kaf ", "ل Lam ", "م Mim", "نNoun ", "Hae ه", "و Waw ", "Yae ي"]

# Route for image conversion
@app.route('/convert', methods=['POST'])
def convert_image():
    file = request.files.get('file')  # Get the file from the request
    if not file:
        return jsonify({'error': 'No file provided'}), 400  # Return error if no file is provided

    try:
        # Read the image using OpenCV
        image = cv2.imdecode(np.frombuffer(file.read(), np.uint8), cv2.IMREAD_GRAYSCALE)
        if image is None:
            return jsonify({'error': 'Failed to read the image'}), 500  # Return error if image reading fails

        # Preprocess the image
        resized_image = cv2.resize(image, (32, 32))
        normalized_image = resized_image.astype('float32') / 255.0
        input_image = np.expand_dims(normalized_image, axis=0)
        input_image = np.expand_dims(input_image, axis=-1)

        # Make a prediction
        prediction = model.predict(input_image)
        predicted_class = np.argmax(prediction, axis=-1)[0]
        predicted_character = arabic_characters[predicted_class]

        print(f"Predicted character: {predicted_character}")  # Log the predicted character
        return jsonify({'message': predicted_character})  # Return the predicted character
    except Exception as e:
        app.logger.error('Error processing image: %s', str(e))
        return jsonify({'error': str(e)}), 500  # Return error if image processing fails

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)  # Run the app in debug mode
