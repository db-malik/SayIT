# middleware/request_logging.py

from starlette.middleware.base import BaseHTTPMiddleware
from starlette.middleware.trustedhost import TrustedHostMiddleware
from starlette.middleware import Middleware
import logging

class RequestLoggingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        logging.info(f"Received request: {request.method} {request.url}")
        response = await call_next(request)
        return response

log_requests = Middleware(RequestLoggingMiddleware)
