docker rm -vf $(docker ps -aq) || true && docker rmi -f $(docker images -aq) || true && docker-compose up --build --detach
#bash <filename>.sh
