.PHONY: build

serve:
	poetry run python manage.py runserver 0.0.0.0:5000

build:
	cd static && yarn && yarn run build

watch:
	cd static && yarn && yarn run build:watch

static-html:
	poetry run python manage.py collectstatic -i node_modules --noinput
	poetry run python manage.py distill-local --quiet --force
