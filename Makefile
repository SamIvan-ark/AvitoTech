TOKEN=$(shell cat .env | grep TOKEN= | cut -d '=' -f2)

install:
	npm ci

start:
	TOKEN=$(TOKEN) npm start

build:
	npm run build

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

.PHONY: build