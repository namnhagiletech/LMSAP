# LMS App

## Install

```bash
npm install or yarn
```

## Start

```bash
npm start
```

## Deploy

```bash
# Docker build image
docker build Dockerfile -t lmsapp .

# Docker run container
docker run -d -p 3001:80 --name lmsapp-deploy lmsapp

Demo: localhost:3001
```
