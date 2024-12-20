# CSCI 4050U - Final Project

[Main Page](https://thinhle188.github.io/csci4050-final-project/)

## Team Members:

-   Thinh Le
-   Ellycea Burke
-   Sandeep Virk
-   Justin Marsh


# Housing Price Prediction with PyTorch

This project predicts housing prices using features such as location, number of bedrooms, bathrooms, lot size, and house size. By comparing traditional regression models (Linear Regression, Decision Tree) with a neural network (Multi-Layer Perceptron), the project explores the effectiveness of deep learning for regression tasks. The best-performing model is deployed as a web application, enabling real-time predictions.

---

## Features

- **Data Preprocessing:**
  - Cleans the dataset by handling missing values and duplicates.
  - Encodes categorical features using integer or one-hot encoding.
  - Normalizes numerical features for faster model convergence.

- **Model Implementation:**
  - Traditional models: Linear Regression, Decision Tree (built in PyTorch).
  - Neural network: Multi-Layer Perceptron (MLP) with custom architecture.

- **Model Evaluation:**
  - Evaluates models using metrics such as Mean Squared Error (MSE) and R-squared.
  - Compares the performance of traditional and neural network models.

- **Deployment:**
  - Deploys the best-performing model as a user-friendly web application.

---

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/housing-price-prediction.git
2. Navigate to the project directory:
    ```
    cd housing-price-prediction
3. Install the required dependencies:
    ```
    pip install -r requirements.txt
4. Ensure PyTorch is installed. Visit PyTorch.org to find the correct installation command for your environment.

---
## Usage

1. Data Preparation
Place your dataset in the data/ directory.
The dataset should include columns such as price, bed, bath, acre_lot, house_size, city, state, and zip_code.

2. Training the Models
Run the training script to preprocess the data and train the models:

3. Evaluating the Models
Evaluate the trained models and compare their performance:

4. Deployment
Deploy the best-performing model as a web application. It will be deployed locally!


## Technologies Used
- Programming Language: Python
- Libraries and Frameworks:
    - PyTorch: Model implementation and training
    - Pandas: Data manipulation
    - NumPy: Numerical computation
    - Matplotlib & Seaborn: Data visualization

## Future Work
Add support for more advanced models such as Gradient Boosted Trees.
Implement cross-validation for more robust performance evaluation.
Enhance the web application with a better UI and additional features.

## Acknowledgments
This project is inspired by the need for accurate housing price prediction and serves as a learning experience in machine learning and deployment using PyTorch.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
