(defproject calculadora "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [reagent "0.5.1"]
                 [garden "1.3.0"]
                 [metosin/compojure-api "0.23.0"]]

  :min-lein-version "2.5.3"

  :source-paths ["src/clj"]

  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-figwheel "0.5.0-2"]
            [lein-garden "0.2.6"]
            [lein-ring "0.9.6"]]

  :ring {:handler calculadora.core/app}

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"  
                                    "resources/public/css/compiled"]

  :garden {:builds [{:id "screen"
                     :source-paths ["src/clj"]
                     :stylesheet calculadora.css/screen
                     :compiler {:output-to "resources/public/css/compiled/screen.css"
                                :pretty-print? true}}]}

  :figwheel {:css-dirs ["resources/public/css"]}

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :figwheel {:on-jsload "calculadora.core/main"}
                        :compiler {:main calculadora.core
                                   :output-to "resources/public/js/compiled/app.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :asset-path "js/compiled/out"
                                   :source-map-timestamp true}}

                       {:id "min"
                        :source-paths ["src/cljs"]
                        :compiler {:main calculadora.core
                                   :output-to "resources/public/js/compiled/app.js"
                                   :optimizations :advanced
                                   :pretty-print false}}]})
