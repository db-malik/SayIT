# backend/database/database.py
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy.exc import SQLAlchemyError
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Database configuration
# Load environment variables from .env file
load_dotenv()

# Database configuration
DATABASE_URL = f"mysql+mysqlconnector://{os.environ['Username']}:{os.environ['Password']}@{os.environ['Server']}:{os.environ['Port_number']}/{os.environ['Name']}"

# SQLAlchemy setup
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Function to get a database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Test the database connection
def test_db_connection():
    try:
        connection = engine.connect()
        connection.close()
        return True
    except SQLAlchemyError as e:
        print(f"Error connecting to the database: {e}")
        return False

# Usage example
if __name__ == "__main__":
    if test_db_connection():
        print("Database connection successful!")
    else:
        print("Database connection failed.")
