package main

import (
	"log"
	"net/http"
	"os"
	"time"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
)

func main() {
	router := chi.NewRouter()
	router.Use(middleware.Logger)

	router.Handle("/assets/*", http.FileServer(http.Dir("./ui/dist")))

	router.Get("/*", func(w http.ResponseWriter, r *http.Request) {
		contentType := "text/html"
		file := "index.html"

		if r.URL.Path == "/favicon.ico" {
			contentType = "image/x-icon"
			file = "favicon.ico"
		}

		w.Header().Add("Content-Type", contentType)
		w.WriteHeader(http.StatusOK)

		rawFile, _ := os.ReadFile("./ui/dist/" + file)
		w.Write(rawFile)
	})

	serverPort := os.Getenv("PORT")

	if serverPort == "" {
		serverPort = "3000"
	}

	log.Println("Starting server at port", serverPort)

	err := http.ListenAndServe(":"+serverPort, router)

	log.Println("Stopping server at", time.Now().Format(time.RFC3339))

	log.Fatal(err)
}
