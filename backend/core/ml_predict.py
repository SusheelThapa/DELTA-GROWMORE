import numpy as np
import tensorflow as tf
from io import BytesIO
from PIL import Image

def predict_disease():
    CLASS_NAMES = ["Early Blight", "Late Blight", "Healthy"]
    MODEL = tf.keras.models.load_model('ml_model')
    image = np.array(Image.open(BytesIO('potato.jpeg')))
    img_batch = np.expand_dims(image, 0)
    predictions = MODEL.predict(img_batch)
    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }