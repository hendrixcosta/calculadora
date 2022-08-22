(ns calculadora.core
  (:require [compojure.api.sweet :refer :all]
                [ring.util.http-response :refer :all]
                [schema.core :as s]))

;;funcao fatorial do webservice
(defn fatorial [x]
  (if (< x 2)
    1
     (* x (fatorial (dec x)))))

;; funcao que cria respostas com o resultado do fatorial no corpo e com o header setado para CORS
;(defn fatorial-response [num]
;  (-> (response {:result (fatorial num)} )
;      (header "Access-Control-Allow-Origin" "*")))

(def cors-headers
  "Generic CORS headers"
  {"Access-Control-Allow-Origin"  "*"
   "Access-Control-Allow-Headers" "*"
   "Access-Control-Allow-Methods" "GET"})

(def app
  (api
    {:swagger
     {:ui "/"
      :spec "/swagger.json"
      :data {:info {:title "API FATORIAL"}}}}

    (context "/api" []
      :tags ["api"]

      ;;rota para variaveis no caminho da URI
      ;; dominio.com/valor/3
      (GET "/fatorial" []
        :return {:result Long}
        :query-params [num :- Long]
        :summary "calc fatorial"
        {:status 200, :headers cors-headers, :body {:result (fatorial num)}}
      )

      ;;rota especifica para o pre flight
      (OPTIONS "/fatorial" []
                (ok))

      (GET "/fatorial/:num" []
        :return {:result Long}
        :path-params [num :- Long]
        :summary "calc fatorial"
        {:status 200, :headers cors-headers, :body {:result (fatorial num)}}
      )

)))
