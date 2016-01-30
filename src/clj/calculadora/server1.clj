(ns calculadora.server1
  (:use ring.util.response
        clojure.pprint)
  (:require [compojure.handler :as handler]
    ;[ring.middleware.cors :refer [wrap-cors]]
            [compojure.core :refer [GET POST defroutes]]))


(defroutes my-routes
           (GET "/" []
             (->  (resource-response "index.html" {:root "public"})
                  (content-type "text/html")
                  (header "Access-Control-Allow-Headers" "Content-Type")
                  (header "Access-Control-Allow-Origin" "*")
                  ))

(def handler
   (handler/api my-routes))





