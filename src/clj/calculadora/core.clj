(ns calculadora.core
  (:require [ring.util.http-response :refer [ok]]
            [compojure.api.sweet :refer :all]))

(defn fatorial [x]
  (if (< x 2)
    1
    (* x (fatorial (dec x)))))

(defapi app
        (swagger-ui)
        (swagger-docs
          {:info {:title "Calculadora"
                  :description "API para o cálculo do fatorial  "}
           :tags [{:name "api", :description "sample api"}]})

        (GET* "/fatorial" []
              :query-params [num :- Long]
              (ok {:result (fatorial num)}))

        (GET* "/fatorial/:num" []
              :path-params [num :- Long]
              (ok {:result (str "numero = " num)}))

        (POST* "/fatorial" []
              :body-params [num :- Long]
               (ok {:result (str "numero = " num)}))

        )
