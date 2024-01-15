FROM nixos/nix:latest AS builder
WORKDIR /build
COPY . .

RUN nix \
    --extra-experimental-features "nix-command flakes" \
    build .#app

RUN mkdir -p /tmp/nix-store-closure
RUN cp -ra $(nix-store -qR result/) /tmp/nix-store-closure

FROM alpine:latest
WORKDIR /app

COPY --from=builder /tmp/nix-store-closure /nix/store
COPY --from=builder /build/result /app

CMD [ "/app/bin/app" ]

