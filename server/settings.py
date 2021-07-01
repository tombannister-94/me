from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[1]

# Settings
SECRET_KEY = "SomethingThatShouldBeMoreSecretThanThis"
DEBUG = True
ALLOWED_HOSTS = ["127.0.0.1", "localhost"]

STATIC_URL = "/static/"
STATICFILES_DIRS = [
    str(PROJECT_ROOT / "static"),
]
STATIC_ROOT = str(PROJECT_ROOT / "var" / "static")

ROOT_URLCONF = "server.urls"

INSTALLED_APPS = [
    "server",
    "django.contrib.staticfiles",
    "django_distill",
]

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": ["templates"],
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.static",
                "django.template.context_processors.request",
            ],
            "debug": DEBUG,
        },
    }
]

DISTILL_DIR = "build"
