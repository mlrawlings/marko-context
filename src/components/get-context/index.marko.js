// Compiled using marko@4.7.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = ({
    onCreate: function (input, out) {
        this.package = input.__package;
        this.state = { context: peekContext(out, this.package) };
    },
    onInput: function (newInput, out) {
        this.state = { context: peekContext(out, this.package) };
        if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = subscribeContext(out, this.package, context => {
                this.state.context = context;
            });
        }
    },
    onMount: function () {
        this.unsubscribe = subscribeContext(out, this.package, context => {
            this.state.context = context;
        });
    },
    onDestroy: function () {
        this.unsubscribe();
    }
}),
    marko_componentType = "/marko-context$1.0.0/src/components/get-context/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_contextHelper_module = require("../../context-helper"),
    contextHelper_module = module_contextHelper_module.default || module_contextHelper_module,
    peekContext = module_contextHelper_module.peekContext,
    subscribeContext = module_contextHelper_module.subscribeContext,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: input.renderBody,
      _arg: state.context
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-context$1.0.0/src/components/get-context/index.marko",
    component: "./",
    tags: [
      "marko/src/taglibs/core/include-tag"
    ]
  };
