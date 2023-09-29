import numpy as np
import pandas as pd
import datetime as dt
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, render_template, redirect

app = Flask(__name__)
app.debug = True

# Define the path to the SQLite database file
db_file = 'publishing_trends.sqlite'

# Create an SQLAlchemy engine to connect to the database
engine = create_engine(f'sqlite:///{db_file}')

# Define route that renders the HTML template
@app.route("/")
def index():
    return render_template("index2.html")

# Route that calls user_types.html and fetches data from the database
@app.route("/user_types")
def user_types():

    # Fetch the data from the query
    data = result.fetchall()
    return render_template("user_types.html", data=data)

# Route that calls retail_prices.html
@app.route("/retail_prices")
def retail_prices():
    return render_template("retail_prices.html")

# Route that calls pub_data.html
@app.route("/pub_data")
def pub_data():
    return render_template("pub_data.html")

if __name__ == '__main__':
    app.run()







