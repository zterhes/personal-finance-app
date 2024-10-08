import string
from clerk_backend_api import Clerk
from flask import request, jsonify
import jwt
import logging
from environment.configuration import environment_config


class AuthProvider:

    api_key = string

    def __init__(self) -> None:
        logging.debug("Initializing AuthProvider")
        self.api_key = environment_config["api-key"]

    def authenticate_session(self):
        clerk = Clerk(bearer_auth=self.api_key)
        bearer_token = request.headers.get("Authorization").split()[1]
        payload = jwt.decode(bearer_token, options={"verify_signature": False})
        session_id = payload["sid"]

        try:
            return clerk.sessions.get(session_id=session_id)
        except Exception as e:
            print("error ", e)
            return jsonify({"error": str(e)}), 401


authProvider = AuthProvider()
