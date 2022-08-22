(defproject calculadora "0.1.0-SNAPSHOT"

  :min-lein-version "2.9.1"

  :dependencies [
                 [org.clojure/clojure "1.11.1"]
                 [compojure "1.7.0"]
                 [org.clojure/tools.logging "1.2.4"]
                 [ring/ring-defaults "0.3.3"]
                 [org.clojure/clojurescript "1.10.773"]
                 [org.clojure/core.async "1.5.648"]
                 [reagent "1.1.1" :exclusions [cljsjs/react cljsjs/react-dom]]
                 [cljsjs/react "18.2.0-0"]
                 [cljsjs/react-dom "18.2.0-0"]
                 [garden "1.3.10"]
                 [metosin/jsonista "0.3.6"]
                 [metosin/compojure-api "2.0.0-alpha31"]
                 [cljs-ajax "0.8.4" :exclusions [org.clojure/clojure]]
                 [org.clojure/tools.analyzer "1.1.0"]
                 ]

  :plugins [[lein-cljsbuild "1.1.8" :exclusions [[org.clojure/clojure]]]
            [lein-figwheel "0.5.20"]
            [lein-garden "0.3.0"]
            [lein-ring "0.12.6"]]

  :source-paths ["src/clj"]

  ;servidor do webservice fatorial
  :ring {:handler calculadora.core/app}

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"  
                                    "resources/public/css/compiled"]

  ;compilador do css
  :garden {:builds [{:id "screen"
                     :source-paths ["src/clj"]
                     :stylesheet calculadora.css/screen
                     :compiler {:output-to "resources/public/css/compiled/screen.css"
                                :pretty-print? true}}]}

  ;servidor da aplicação calculadora
  :figwheel {
             ;diretorio do css para o server recarregar a cada change
             :css-dirs ["resources/public/css"]
             }

  ;plugin do compilador do clojure script
  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src/cljs"]

                ;; The presence of a :figwheel configuration here
                ;; will cause figwheel to inject the figwheel client
                ;; into your build
                :figwheel {:on-jsload "calculadora.core/on-js-reload"
                           ;; :open-urls will pop open your application
                           ;; in the default browser once Figwheel has
                           ;; started and compiled your application.
                           ;; Comment this out once it no longer serves you.
                           :open-urls ["http://localhost:3449/index.html"]}

                :compiler {:main calculadora.core
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/calculadora.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true
                           ;; To console.log CLJS data-structures make sure you enable devtools in Chrome
                           ;; https://github.com/binaryage/cljs-devtools
                           :preloads [devtools.preload]}}
               ;; This next build is a compressed minified build for
               ;; production. You can build this with:
               ;; lein cljsbuild once min
               {:id "min"
                :source-paths ["src/cljs"]
                :compiler {:output-to "resources/public/js/compiled/calculadora.js"
                           :main calculadora.core
                           :optimizations :advanced
                           :pretty-print false}}]}

  :profiles {:dev {:dependencies [[binaryage/devtools "1.0.0"]
                                  [figwheel-sidecar "0.5.20"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths ["src/cljs" "dev"]
                   ;; need to add the compiled assets to the :clean-targets
                   :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                                     :target-path]}}

)
