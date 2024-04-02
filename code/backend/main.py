# main.py

from fastapi import FastAPI, Request
import logging as log
import uvicorn
from fastapi.exceptions import HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware


from routes.admin_router import admin_router
from routes.model_ml_router import model_ml_router
from routes.user_router import user_router
from routes.home_router import home_router

from database.db_config import get_database_connection

# Create a FastAPI app
app = FastAPI()
#get_database_connection()


# Configure CORS settings
origins = [
    "http://localhost",
    "http://localhost:3000",  # Replace with your frontend URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],  # Include OPTIONS method
    allow_headers=["*"],
)




# Middleware: Add authentication middleware here
# async def auth_middleware(request: Request, call_next):
#     # Perform authentication logic here
#     # Example: Check if the request contains a valid authentication token
#     auth_token = request.headers.get("Authorization")
#     if not auth_token or not is_valid_token(auth_token):
#         raise HTTPException(status_code=401, detail="Unauthorized")

    # response = await call_next(request)
    # return response

# app.middleware("http")(auth_middleware)

# Exception handler for HTTPException
@app.exception_handler(HTTPException)
async def handle_http_exception(request, exc):
    print(f"HTTP Exception: {exc.detail}")
    return JSONResponse(content={"error": exc.detail}, status_code=exc.status_code)


# Exception handler for general exceptions
@app.exception_handler(Exception)
async def handle_exception(request, exc):
    print(f"Error: {str(exc)}")
    return JSONResponse(content={"error": str(exc)}, status_code=500)

# Include routers
app.include_router(home_router)
app.include_router(user_router, prefix="/user", tags=["user"])
app.include_router(admin_router, prefix="/admin", tags=["admin"])
app.include_router(model_ml_router, prefix="/model_ml", tags=["model_ml"])




