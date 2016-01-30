(ns calculadora.core
  (:require [compojure.api.sweet :refer :all]
            [clojure.tools.logging :as log]
            [ring.middleware.cors :refer [wrap-cors]])
  (:use  ring.util.response))

(defn fatorial [x]
  (if (< x 2)
    1
    (* x (fatorial (dec x)))))


(defn fatorial-response [num]
  (-> (response {:result (fatorial num)} )
      ;(header "Access-Control-Allow-Origin" "*")
      ;(header "Access-Control-Allow-Headers" "Content-Type")
      ;(header "Access-Control-Allow-Methods" "GET")
      ;(content-type "application/json")
  )
)

( ->  (defapi app
              (swagger-ui)
              (swagger-docs
                {:info {:title "Calculadora"
                        :description "API para o cálculo do fatorial  "}
                 :tags [{:name "api", :description "sample api"}]})

              (GET* "/fatorial" []
                    :query-params [num :- Long]
                    (log/info (str "GET com parametro na QueryString = " num))
                    (fatorial-response num))

              (GET* "/fatorial/:num" []
                    :path-params [num :- Long]

                    (log/info (str "GET com parametro na path = " num))
                    (fatorial-response num))


              (POST* "/fatorial" []
                     :body-params [num :- Long]
                     (log/info (str "POST com num = " num))
                     (fatorial-response num)))

      (wrap-cors :access-control-allow-origin [#"http://example.com"]
                 :access-control-allow-methods [:get :put :post :delete])



)