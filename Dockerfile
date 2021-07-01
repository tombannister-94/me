FROM python:3.8-slim as base

ENV PYTHONUNBUFFERED=1 \
  PIP_NO_CACHE_DIR=off

WORKDIR /app

RUN set -ex \
  # Basics
  && BUILD_DEPS="build-essential python3-dev gnupg1 curl" \
  && apt-get update && apt-get -y --no-install-recommends install $BUILD_DEPS make default-libmysqlclient-dev \
  # Poetry
  && curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python \
  && . $HOME/.poetry/env \
  && poetry config virtualenvs.create false \
  # FE Build Step
  && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && curl -sL https://deb.nodesource.com/setup_14.x | bash - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
  && apt-get update && apt-get -y install nodejs yarn

ENV PATH=/root/.poetry/bin:${PATH}

COPY poetry.lock pyproject.toml /app/

RUN set -ex \
  && poetry install --no-root --no-interaction --no-ansi \
  && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false $BUILD_DEPS \
  && rm -rf /var/lib/apt/lists/*

FROM base as full

COPY . /app/
