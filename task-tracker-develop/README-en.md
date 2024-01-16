**Tasks**
1. Write a Dockerfile for your application
2. Write in a single repository on gitlab.com (back+front) CI for back
    1. Linter stage (you can use echo output instead of real ones)
    2. Test stage (you can use echo output instead of real ones)
    3. Stage of building and uploading the docker image to the gitlab registry
3. Write a config for nginx, in which
  1. Proxy servers for front and back are registered
  2. Statics is distributed via the /static/ URL (if available)
  3. Service logs are divided into separate directories. Each directory contains access and error logs
  4. The headers Host, X-Real-IP, X-Forwarded-Host, X-Forwarded-Proto, X-Forwarded-For are transmitted to the back and front services from the proxy
4. Write docker-compose.yml to deploy the entire system
  1. Services: proxy server, back, front, database (names at your discretion)
  2. The database state is transferred to the project directory so that re-creating the container does not reset the data
  3. The directory with nginx logs is moved to the project directory so that the logs can be viewed in the local directory where the compose file is located
  4. Running containers:
    1. nginx depends on running front and back containers
    2. Back depends on the base
  5. *For nginx the restart policy is set to “always”, for other services - “always, except for manual stop”
  6. *Container networks are isolated so that:
    1. only the back can access the database
    2. The back and front can only be accessed through a proxy server (nginx)
