# run command:
# uvicorn app.server:app --reload
from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np
import onnxruntime as ort


app = FastAPI()
ort_session = ort.InferenceSession("app/my_model.onnx")
CLASS_LABELS = ["setosa", "versicolor", "virginica"]


# Define input schema
class InputData(BaseModel):
    sepal_length: float
    sepal_width: float
    petal_length: float
    petal_width: float


@app.get("/")
def read_root():
    return {"message": "Welcome to the MLP Model API for predicting housing prices"}


@app.post("/predict")
def predict(data: InputData):
    input_data = np.array([[data.sepal_length, data.sepal_width, data.petal_length, data.petal_width]], dtype=np.float32)
    outputs = ort_session.run(None, {"input": input_data})
    logits = outputs[0]  # Get raw logits
    predicted_class_idx = np.argmax(logits, axis=1)[0]
    predicted_class = CLASS_LABELS[predicted_class_idx]
    return {"prediction": predicted_class}
