// Compiled using marko@4.7.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = ({
    onMount: function () {
        this.mounted = true;
    },
    onInput: function (input) {
        if (this.mounted) {
            emitContext(this.elId(), input);
        }
    }
}),
    marko_componentType = "/marko-context$1.0.0/src/components/set-context/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_contextHelper_module = require("../../context-helper"),
    contextHelper_module = module_contextHelper_module.default || module_contextHelper_module,
    pushContext = module_contextHelper_module.pushContext,
    emitContext = module_contextHelper_module.emitContext,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  let popContext = pushContext(out, input.__package, component.elId(), input);

  include_tag({
      _target: input.renderBody
    }, out, __component, "0");

  popContext();
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-context$1.0.0/src/components/set-context/index.marko",
    component: "./",
    tags: [
      "marko/src/taglibs/core/include-tag"
    ]
  };
