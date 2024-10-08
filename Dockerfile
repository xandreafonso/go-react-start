FROM golang:latest as builder
WORKDIR /app
COPY . .
RUN go mod tidy
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o oneapp ./cmd/main.go
CMD ["./oneapp"]

FROM scratch
COPY --from=builder /app/oneapp /
COPY --from=builder /app/ui/dist /ui/dist
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
CMD ["./oneapp"]
