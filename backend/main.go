package main

import (
	"log"
	"net/http"

	"backend/database"
	"backend/models"
)

func main() {
	// Conectar a la base de datos
	database.Connect()

	// Crear tablas automáticamente
	database.DB.AutoMigrate(&models.User{})

	http.HandleFunc("/api/test", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Write([]byte(`{"status":"backend funcionando"}`))
	})

	log.Println("Servidor corriendo en http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
