// Compiled using marko@4.7.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/package1$0/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    get_context_template = marko_loadTemplate(require.resolve("../../../../src/components/get-context")),
    marko_loadTag = marko_helpers.t,
    get_context_tag = marko_loadTag(get_context_template),
    provider_template = marko_loadTemplate(require.resolve("package2/provider.marko")),
    provider_tag = marko_loadTag(provider_template);

function render(input, out, __component, component, state) {
  var data = input;

  provider_tag({
      renderBody: function renderBody(out) {
        out.w("<div>");

        get_context_tag({
            __package: "package1",
            renderBody: function renderBody(out, { color }) {
              out.w(marko_escapeXml(color));
            }
          }, out, __component, "2");

        out.w("</div>");
      }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/package1$0/template.marko",
    tags: [
      "../../../../src/components/get-context",
      "package2/provider.marko"
    ]
  };
