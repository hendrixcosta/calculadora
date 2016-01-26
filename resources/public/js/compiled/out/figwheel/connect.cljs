(ns figwheel.connect (:require [calculadora.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/calculadora.core.main (apply js/calculadora.core.main x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'calculadora.core/main' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

