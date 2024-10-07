import os

env = os.get("ENV_PROFILE")
port = os.get("PORT")

all_environments = {
    "development": { "port": port, "debug": True, "swagger-url": "/api/swagger" },
    "production": { "port": port, "debug": False, "swagger-url": None  }
}

environment_config = all_environments[env]