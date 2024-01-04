FROM nixos/nix:latest
WORKDIR /app
COPY . .

RUN nix \
    --extra-experimental-features "nix-command flakes" \
    build .#app

CMD [ "/app/result/bin/app" ]

