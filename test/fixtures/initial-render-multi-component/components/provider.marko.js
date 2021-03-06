// Compiled using marko@4.7.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-context$1.0.0/test/fixtures/initial-render-multi-component/components/provider.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    set_context_template = marko_loadTemplate(require.resolve("../../../../src/components/set-context")),
    set_context_tag = marko_loadTag(set_context_template);

function render(input, out, __component, component, state) {
  var data = input;

  set_context_tag({
      color: "red",
      __package: "marko-context",
      renderBody: function renderBody(out) {
        include_tag({
            _target: input.renderBody
          }, out, __component, "0");
      }
    }, out, __component, "1");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-context$1.0.0/test/fixtures/initial-render-multi-component/components/provider.marko",
    tags: [
      "marko/src/taglibs/core/include-tag",
      "../../../../src/components/set-context"
    ]
  };
