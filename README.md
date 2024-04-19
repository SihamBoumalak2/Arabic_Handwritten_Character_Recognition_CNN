# Arabic Handwritten Character Recognition Using Convolutional Neural Networks

## Project Overview
TThe project is a web-based application called AraboScripto designed to recognize handwritten Arabic characters. It Utilizes Convolutional Neural Networks (CNNs) to process the character in the image uploaded and output the corresponding name of that character.

## Key Features
- **Upload Handwriting:** Users can upload images of handwritten Arabic characters in PNG format.
- **Character Recognition:** Using CNN model, the application accurately identifies handwritten characters and outputs their corresponding name.

## Technologies Used
- **Frontend:** Java (with React.js), HTML, CSS
- **Backend:** Flask (python with version Python 3.11.7)
- **Machine Learning:** Jupyter (Python 3.11.7 | packaged by Anaconda) , Keras, TensorFlow, Pandas, Numpy, Matplotlib
- **DataSet:** [Kaggle Dataset](https://www.kaggle.com/datasets/mloey1/ahcd1/download?datasetVersionNumber=2)

## How to Run the Flask App
###For the Backend:
- Create a virtual environemnt (python -m venv venv)
- Activate the environment
- Run app.py
###For the Frontend:
- Install Node.js and npm
- Run npm start


## Accomplishments
- Developed a user friendly website where the user can click to learn about the website and click to upload a png image of a handwritten arabic character. When the user uploads a picture they are able to see the image they have uploaded. they can change the image or click convert to recognize the character in the image
- Developed the CNN model with three convolutional layers, three max pooling layers, and one dense layer, achieving an accuracy of 94.7%.
  
## Future Enhancements
- Expand the dataset to include more diverse handwriting samples for improved accuracy.
- Data Augmentation to avoid overfitting.
- I will use transfer learning to leverage a pre-trained convolutional neural network's knowledge and adapt it to my Arabic handwritten character recognition task, potentially improving the model's performance and training efficiency.
