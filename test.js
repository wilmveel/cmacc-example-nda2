const url = require('path');
const path = require('path');
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
        assert.equal(ast.xnum, "1.1");

        assert.equal(ast.xnum_Amend, "1.1");
        assert.equal(ast.amend.xnum, "1.1");
        assert.equal(ast.amend.ti, "Amendment");

        return ast;
      })
      .then(cmacc.render)
      .then(x => {
        return cmacc.remarkable.render(x)
      })
      .then(html => {
        const expect = '<p>1.1. Amendment</p>\n<p>This <a href="#Agreement">Agreement</a> may be amended, supplemented or otherwise modified only by a writing executed by the <a href="#Parties">Parties</a></p>\n';
        assert.equal(html, expect);
        done();
      })
      .catch(done);

  });


  it('_test_NDA_Mutual', function (done) {
    const file = url.join('file://', __dirname, '/_test_NDA_Mutual.cmacc');

    cmacc.compile(file, opts)
      .then(ast => {
        assert.equal(ast.conf_Xnum, "1");
        assert.equal(ast.limit_Xnum , "2");
        assert.equal(ast.rep_Xnum , "3");
        assert.equal(ast.term_Xnum , "4");
        assert.equal(ast.misc_Xnum , "7");

        return ast;
      })
      .then(cmacc.render)
      .then(x => {
        return cmacc.remarkable.render(x)
      })
      .then(html => {
        const expect = `<h3>2. Limits</h3>
<p>2.1. Property of Disclosing Party</p>
<p><a href="#Confidential-Information">Confidential Information</a> is and shall remain the sole property of the Disclosing Party.</p>
<p>2.2. No License</p>
<p>The Receiving Party recognizes and agrees that nothing contained in this <a href="#Agreement">Agreement</a> will be construed as granting any property rights, by license or otherwise, to any <a href="#Confidential-Information">Confidential Information</a> of the Disclosing_Party, or to any invention or any patent, copyright, trademark, or other intellectual property right that has issued or that may issue, based on such <a href="#Confidential-Information">Confidential Information</a>.</p>
<p>2.3. No Other Use</p>
<p>The Receiving Party shall not make, have made, use, or sell for any purpose any service, product, or item using, incorporating, or derived from any <a href="#Confidential-Information">Confidential Information</a> of the Disclosing Party.</p>
<p>2.4. No Agreement to Deal</p>
<p>Neither this <a href="#Agreement">Agreement</a> nor the disclosure of any <a href="#Confidential-Information">Confidential Information</a> hereunder shall result in any obligation on the part of either Party to enter into any further agreement with the other, license any products or services to the other, or to require either Party to disclose any particular <a href="#Confidential-Information">Confidential Information</a>.</p>
<p>2.5. No Agency</p>
<p>Nothing in this <a href="#Agreement">Agreement</a> creates or shall be deemed to create any employment, joint venture, or agency between the Parties.</p>
<p>2.6. No Warranty Regarding Information</p>
<p>THE DISCLOSING PARTY IS PROVIDING CONFIDENTIAL INFORMATION ON AN &quot;AS IS&quot; BASIS FOR USE BY THE RECEIVING PARTY AT ITS OWN RISK. THE DISCLOSING PARTY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF TITLE, NON-INFRINGEMENT OF THIRD PARTY RIGHTS, MERCHANTABILITY, OR FITNESS FOR A PARTICULAR PURPOSE.</p>
<h3>3. Representation Against Violation of Third-Party Intellectual Property Rights</h3>
<p>The Disclosing Party represents that its communication of <a href="#Confidential-Information">Confidential Information</a> to the Receiving Party does not violate any law or proprietary rights of, or agreement with, any third party.</p>
<h3>4.Termination</h3>
<p>4.1.Term</p>
<p>This <a href="#Agreement">Agreement</a> will terminate on Life_End_YMD.</p>
<p>4.2.Termination</p>
<p>This <a href="#Agreement">Agreement</a> may be terminated by either Party at any time upon thirty (30) days written notice to the other Party.</p>
<p>4.3.Survival</p>
<p>The Receiving Party's obligations with respect to <a href="#Confidential-Information">Confidential Information</a> of the Disclosing Party will survive termination of this <a href="#Agreement">Agreement</a>.</p>
<h3>7. Miscellaneous</h3>
<p>7.1. Amendment</p>
<p>This <a href="#Agreement">Agreement</a> may be amended, supplemented or otherwise modified only by a writing executed by the <a href="#Parties">Parties</a></p>
<p>7.2. Successors and Assigns</p>
A Party shall not subcontract or otherwise delegate or assign this <a href="#Agreement">Agreement</a> or any of its obligations under this Agreement without the other Party's prior written consent.Any attempted assignment, subcontract, delegation, or transfer in violation of the foregoing shall be null and voidSubject to the foregoing, this Agreement will be for the benefit of each Party's successors and assigns, and will be binding on each Party's assignees.<p>Xnum. Entire Agreement</p>
This Agreement is the final, complete, and exclusive agreement of the Parties with respect to the subject matters hereof and supersedes and merges all prior discussions between the Parties with respect to such matters.<p>7.4. Notices</p>
<p>Any notice required or permitted by this <a href="#Agreement">Agreement</a> shall be in writing and shall be delivered as follows with notice deemed given as indicated:</p>
<p>1.by personal delivery when delivered personally; or</p>
<p>2.by overnight courier upon written verification of receipt; or</p>
<p>3.by telecopy or facsimile transmission upon acknowledgment of receipt of electronic transmission; or</p>
<p>4.by certified or registered mail, return receipt requested, upon verification of receipt</p>
<p>Notice shall be sent to the addresses set forth at the bottom of this <a href="#Agreement">Agreement</a> or such other address as either Party may specify in writing.</p>
<p>7.5. Interpretation to Make Valid</p>
<p>If any provision of this <a href="#Agreement">Agreement</a> is held invalid or unenforceable by any court of competent jurisdiction, the other provisions of this <a href="#Agreement">Agreement</a> will remain in full force and effect. Any provision of this <a href="#Agreement">Agreement</a> held invalid or unenforceable only in part or degree will remain in full force and effect to the extent not held invalid or unenforceable.</p>
<p>7.6. U.S. Export Laws</p>
<p>The Receiving Party will not export, directly or indirectly, any U.S. technical data acquired pursuant to this <a href="#Agreement">Agreement</a>, or any products utilizing such data, in violation of the United States export laws or regulations.</p>
<p>7.7. Waiver</p>
<ol>
<li><p>A failure or delay by a <a href="#Party">Party</a> in exercising a Legal Right under this <a href="#Agreement">Agreement</a> or any of the documents referred to in this <a href="#Agreement">Agreement</a> will not operate as a waiver of such Legal Right.</p></li>
<li><p>A single or partial exercise of a Legal Right will not preclude any other or further exercise of such Legal Right or the exercise of any other Legal Right.</p></li>
<li><p>To the maximum extent permitted by applicable Legal Requirements:</p>
<p>a. a claim or right arising out of this <a href="#Agreement">Agreement</a> or any of the documents referred to in this <a href="#Agreement">Agreement</a> can be waived by a <a href="#Party">Party</a>, in whole or in part, only if such waiver is made in a writing signed by such <a href="#Party">Party</a>;</p>
<p>b. a waiver given by a <a href="#Party">Party</a> will be applicable only to the specific instance for which it is given; and</p>
<p>c. a notice to or demand made by a <a href="#Party">Party</a> will not: (i) waive or otherwise affect any obligation of the other <a href="#Party">Party</a>; or (ii) affect the right of the <a href="#Party">Party</a> giving such notice or demand to take further action without notice or demand as provided in this <a href="#Agreement">Agreement</a> or the documents referred to in this <a href="#Agreement">Agreement</a>.</p></li>
</ol>
<p>7.8. Counterparts</p>
<p>This <a href="#Agreement">Agreement</a> and other documents to be delivered pursuant to this <a href="#Agreement">Agreement</a> may be executed in one or more counterparts, each of which will be deemed to be an original copy and all of which, when taken together, will be deemed to constitute one and the same agreement or document, and will be effective when counterparts have been signed by each of the <a href="#Parties">Parties</a> and delivered to the other <a href="#Parties">Parties</a>. A manual signature on this <a href="#Agreement">Agreement</a> or other documents to be delivered pursuant to this <a href="#Agreement">Agreement</a>, an image of which shall have been transmitted electronically, will constitute an original signature for all purposes. The delivery of copies of this <a href="#Agreement">Agreement</a> or other documents to be delivered pursuant to this <a href="#Agreement">Agreement</a>, including executed signature pages where required, by electronic transmission will constitute effective delivery of this <a href="#Agreement">Agreement</a> or such other document for all purposes.</p>
`;
        assert.equal(html, expect);
        done();
      })
      .catch(done);

  });

  it('_test_Definitions_In_Options', function (done) {
    const file = url.join('file://', __dirname, '/_test_Definitions_In_Options.cmacc');

    cmacc.compile(file, opts)
      .then(ast => {
        assert.equal(ast.xnum, "Xnum");


        return ast;
      })
      .then(cmacc.render)
      .then(x => {
        return cmacc.remarkable.render(x)
      })
      .then(html => {
        const expect = `<h3>Xnum. Miscellaneous</h3>
<p>Xnum. Entire Agreement</p>
This <a href="#Agreement">Agreement</a> is the final, complete, and exclusive agreement of the Parties with respect to the subject matters hereof and supersedes and merges all prior discussions between the Parties with respect to such matters.<p><a href="#Agreement">Agreement</a> is defined in the introduction section of this <a href="#Agreement">Agreement</a></p>
`;
        assert.equal(html, expect);
        done();
      })
      .catch(done);

  });

  it('_test_def_yarn', function (done) {
    const file = url.join('file://', __dirname, '/_test_def_yarn.cmacc');

    cmacc.compile(file, opts)
      .then(cmacc.render)
      .then(x => {
        return cmacc.remarkable.render(x)
      })
      .then(html => {
        const expect = `<p><a href="#Specific-Confidential Information Included">Specific Confidential Information Included</a> is for infos related to the <a href="#Disclosing-Party">Disclosing Party</a> , including without limitation the Disclosing Party's information concerning whatever</p>
`;
        assert.equal(html, expect);
        done();
      })
      .catch(done);

  });

  it('_test_Xref', function (done) {
    const file = url.join('file://', __dirname, '/_test_Xref.cmacc');

    cmacc.compile(file, opts)
      .then(ast => {

        return ast;
      })
      .then(cmacc.render)
      .then(x => {
        return cmacc.remarkable.render(x)
      })
      .then(html => {
        const expect = `<h3>Xnum. Confidentiality</h3>
<p>Xnum.1. <a href="#Confidential-Information">Confidential Information</a></p>
<p>As used herein, the <a href="#Confidential-Information">Confidential Information</a> shall mean any and all technical and non-technical information disclosed</p>
disclose_Type<p>including without limitation information regarding</p>
<ol>
<li><p>patent and patent applications</p></li>
<li><p>trade secrets</p></li>
<li><p>info_Types related to subject the Disclosing Party, including without limitation the Disclosing Party's information concerning info_Examples</p></li>
<li><p>information the Disclosing Party provides regarding third parties</p></li>
<li><p>all other information that the Receiving Party knew, or reasonably should have known, was the Confidential Information of the_Disclosing Party</p></li>
</ol>
<p>Xnum.2. Engagement</p>
<p>Xnum.2.1. Disclosure and Use</p>
Subject to Section Xnum.3, the Receiving Party agrees that at all times and notwithstanding any termination or expiration of this <a href="#Agreement">Agreement</a> that:<ol>
<li><p>the Receiving Party will hold in strict confidence and not disclose to any third party any <a href="#Confidential-Information">Confidential Information</a> of the Disclosing Party, except as approved in writing by the Disclosing Party and;</p></li>
<li>the Receiving Party will use the <a href="#Confidential-Information">Confidential Information</a> of the Disclosing Party for no purpose other than the Permitted Use</li>
</ol>
<p>Xnum.2.2. Care</p>
<p>The Receiving Party will protect <a href="#Confidential-Information">Confidential Information</a> with a degree of care that is at least the same as the Receiving Party uses to protect its own confidential information, and in any event at least a reasonable degree of care.</p>
<p>Xnum.2.3. Access</p>
<p>The Receiving Party will limit access to the Confidential Information of the Disclosing Party to only those of the Receiving Party's employees or authorized representatives who have a need to know and who have signed confidentiality agreements.</p>
<p>Xnum.7. Term of Confidentiality</p>
<p>The Receiving Party's obligations with respect to all <a href="#Confidential-Information">Confidential Information</a> of the Disclosing Party will terminate only pursuant to Xnum.3.</p>
`;
        assert.equal(html, expect);
        done();
      })
      .catch(done);

  });





});