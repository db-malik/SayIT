# main.py

from fastapi import FastAPI, Request
import logging as log
import uvicorn
from fastapi.exceptions import HTTPException
from fastapi.responses import JSONResponse


from routes.admin_router import admin_router
from routes.model_ml_router import model_ml_router
from routes.user_router import user_router
from routes.home_router import home_router

from database.db_config import test_db_connection

# Create a FastAPI app
app = FastAPI()

# Middleware: Add  middleware here if needed




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

# Include  routers
app.include_router(home_router)
app.include_router(user_router, prefix="/user", tags=["user"])
app.include_router(admin_router, prefix="/admin", tags=["admin"])
app.include_router(model_ml_router, prefix="/model_ml", tags=["model_ml"])


# Check for a database connection before starting the server
if __name__ == "__main__":
    log.info("Starting server...")
    if test_db_connection():
        print("Database connection successful!")
    else:
        print("Database connection failed.")

