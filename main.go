package main

import (
	"fmt"
	"net/http"
)

func main()  {
	http.HandleFunc("/", HelloCharred)
	http.ListenAndServe(":8080", nil)
}

func HelloCharred(w http.ResponseWriter, r *http.Request)  {
	fmt.Fprintf(w, "Hello, %s", r.URL.Path[1:])
}