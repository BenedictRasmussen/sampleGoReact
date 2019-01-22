package main

import (
	"log"
	"net/http"
)

func main() {
	// Register anony func to handle all requests
	/*
		http.HandleFunc("/weather", func(w http.ResponseWriter, r *http.Request) {
			http.ServeFile(w, r, r.URL.Path[1:])
		})

		http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
			fmt.Fprint(w, "You have requested", r.URL.Path)
		})
	*/

	http.Handle("/", http.FileServer(http.Dir("./dist")))

	//http.ListenAndServe(":80", nil)
	log.Fatal(http.ListenAndServeTLS(":8080", "certs/server.crt", "certs/server.key", nil))
}
