import os

env = os.environ.get("ENV_PROFILE", "development")
port = os.environ.get("PORT", 8080)
api_key = os.environ.get("CLERK_API_KEY")

if api_key is None:
    raise Exception("CLERK_API_KEY must be set")

all_environments = {
    "development": {
        "port": port,
        "debug": True,
        "swagger-url": "/api/swagger",
        "api-key": api_key,
    },
    "production": {
        "port": port,
        "debug": False,
        "swagger-url": None,
        "api-key": api_key,
    },
}
print(all_environments[env])
environment_config = all_environments[env]
