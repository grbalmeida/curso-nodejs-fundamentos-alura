// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/curso-nodejs-fundamentos-alura$1.0.0/src/app/views/home/home.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"pt-br\"><head><meta charset=\"utf-8\"><title>Home</title></head><body>");

  component_globals_tag({}, out);

  out.w("<header><nav><ul><li><a href=\"http://localhost:3000\">Home</a></li><li><a href=\"http://localhost:3000/livros\">Livros</a></li></ul></nav></header><h1>Casa do Código</h1>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "13");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/curso-nodejs-fundamentos-alura$1.0.0/src/app/views/home/home.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
