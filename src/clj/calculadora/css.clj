(ns calculadora.css
  (:require [garden.def :refer [defstyles]]))

(defstyles screen

   [:body {:font-size "20px"}]

   ["#calculadora" {:background "#C5CAE9"
                    :width "120px"
                    :height "250px"
                    :padding-right "20px"
                    :padding-left "20px"
                    :padding-top "20px"
                    :padding-bottom "40px"
                    :border-radius "25px";
                    :border "1px" }]

   ["#teclado" {

                }]

   ["#teclado input"
              {:background "#3F51B5"
               :color "#FFFFFF"
               :width "30px"
               :height "30px"
               :border-radius "1px"
               :border-style "solid"}]

   ["#teclado input.sinal"
              {:background "#448AFF"}]

   ["#teclado input.igual"

    {:background "#FF5722 "
     ;:height "60px"
     }]

   ["#visor"
    {:background "#123456"
     :color "#FFFFFF"
     :width "118px"
     :height "30px"
     :border-style "solid"
     :border-width "1px"
     :margin-bottom "15px"}]






)

