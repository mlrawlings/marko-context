// Compiled using marko@4.7.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-context$1.0.0/test/fixtures/initial-render-nested/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    get_context_template = marko_loadTemplate(require.resolve("../../../src/components/get-context")),
    marko_loadTag = marko_helpers.t,
    get_context_tag = marko_loadTag(get_context_template),
    set_context_template = marko_loadTemplate(require.resolve("../../../src/components/set-context")),
    set_context_tag = marko_loadTag(set_context_template);

function render(input, out, __component, component, state) {
  var data = input;

  set_context_tag({
      name: "Frank",
      __package: "marko-context",
      renderBody: function renderBody(out) {
        set_context_tag({
            name: "Jane",
            __package: "marko-context",
            renderBody: function renderBody(out) {
              get_context_tag({
                  __package: "marko-context",
                  renderBody: function renderBody(out, { name }) {
                    out.w(marko_escapeXml(name));
                  }
                }, out, __component, "2");
            }
          }, out, __component, "1");

        get_context_tag({
            __package: "marko-context",
            renderBody: function renderBody(out, { name }) {
              out.w(marko_escapeXml(name));
            }
          }, out, __component, "3");
      }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-context$1.0.0/test/fixtures/initial-render-nested/template.marko",
    tags: [
      "../../../src/components/get-context",
      "../../../src/components/set-context"
    ]
  };
