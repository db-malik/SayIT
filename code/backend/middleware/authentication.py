from fastapi import HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

security = HTTPBearer()

def authenticate(token: str) -> bool:
  # Add your authentication logic here
  
  
  # For example, you can validate the token against a database or external service
  
  
  

  # Return True if the token is valid, False otherwise
  return token == "your_secret_token"


async def auth_middleware(request, call_next):
  credentials: HTTPAuthorizationCredentials = await security.__call__(request)
  token = credentials.credentials

  if not authenticate(token):
    raise HTTPException(status_code=401, detail="Invalid token")

  response = await call_next(request)
  return response
