const url = require('path');
const assert = require('assert');
const cmacc = require('cmacc-compiler');

describe('helpers_definition_ref_in_def', function () {

  global.fs = require('fs');
  global.fetch = require('node-fetch');

  const opts = {
    base: __dirname
  };

  it('_test_Xnum', function (done) {
    const file = url.join('file://', __dirname, '/_test_Xnum.cmacc');

    cmacc.compile(file, opts)
      .then(ast => {
        assert.equal(ast.xnum, "Xnum");

        assert.equal(ast.xnum_Amend, "{{xnum}}.1");
        assert.equal(ast.amend.xnum, "{{xnum}}.1");
        assert.equal(ast.amend.ti, "Amendment");

        return ast;
      })
      .then(cmacc.render)
      .then(x => {
        return cmacc.remarkable.render(x)
      })
      .then(html => {
        const expect = '<p>{{xnum}}.1.1.\nAmendment</p>\n<p>This <a href="#Agreement">Agreement</a> may be amended, supplemented or otherwise modified only by a writing executed by the <a href="#Parties">Parties</a></p>\n';
        assert.equal(html, expect);
        done();
      })
      .catch(done);

  });

});