(ns calculadora.core
  (:require [compojure.api.sweet :refer :all]
            [clojure.tools.logging :as log])
  (:use  ring.util.response))

;;funcao fatorial do webservice
(defn fatorial [x]
  (if (< x 2)
    1
    (bigint (* x (fatorial (dec x))))))

;; funcao que cria respostas com o resultado do fatorial no corpo e com o header setado para CORS
(defn fatorial-response [num]
  (-> (response {:result (fatorial num)} )
      (header "Access-Control-Allow-Origin" "*")))

;; Parametros do Swagger e rotas do WebService
 (defapi app
         {:swagger {:ui "/api-docs", :spec "/api/swagger.json"}}
              (swagger-ui)
              (swagger-docs
                {:info {:title "Calculadora"
                        :description "API para o cálculo do fatorial  "}
                 :tags [{:name "api", :description "sample api"}]})

              ;; Rota para requisição GET com variavel na QueryString
              ;; dominio.com/fatorial?val=3
              (GET* "/fatorial" []
                    :query-params [num :- Long]
                    (log/info (str "GET com parametro na QueryString = " num))
                    (fatorial-response num))

              ;;rota especifica para o pre flight
              (OPTIONS* "/fatorial" []
                     :query-params [num :- Long]
                     (log/info (str "OPTIONS com parametro na QueryString = " num))
                     (fatorial-response 1))

              ;;rota para variaveis no caminho da URI
              ;; dominio.com/valor/3
              (GET* "/fatorial/:num" []
                    :path-params [num :- Long]
                    (log/info (str "GET com parametro na path = " num))
                    (fatorial-response num))

              ;;rota para requisições POST
              (POST* "/fatorial" []
                     :body-params [num :- Long]
                     (log/info (str "POST com num = " num))
                     (fatorial-response num)))

