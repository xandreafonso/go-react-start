FROM golang:latest as builder
WORKDIR /app
COPY . .
RUN go mod tidy
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o newsletterapp ./cmd/main.go
CMD ["./newsletterapp"]

FROM scratch
COPY --from=builder /app/newsletterapp /
COPY --from=builder /app/ui/dist /ui/dist
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
CMD ["./newsletterapp"]