import bcrypt
import jwt
from dotenv import load_dotenv
import os
# Load the environment variables from .env file
load_dotenv()

# Get the secret key from the environment variables
secretKey = os.getenv("SECRET_KEY")


async def hashPassword(password):
  saltRounds = 10
  hashedPassword = await bcrypt.hash(password, saltRounds)
  return hashedPassword


async def comparePasswords(password, hashedPassword):
  isMatch = await bcrypt.compare(password, hashedPassword)
  return isMatch


def generateToken(payload, expiresIn):
  token = jwt.sign(payload, secretKey, expiresIn=expiresIn)
  return token


def decryptToken(token):
  try:
    decodedToken = jwt.verify(token, secretKey)
    return decodedToken
  except Exception as error:
    # Handle token decryption error
    print("Token decryption failed:", error)
    return None
