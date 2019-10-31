/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc) {
    // FIXME: this is a second argument but for some reason /en/ links don't work.
    let language = "";

    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${language ? `${language}/` : ""}${doc}`;
  }

  pageUrl(doc) {
    // FIXME: this is a second argument but for some reason /en/ links don't work.
    let language = "";

    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && <img src={this.props.config.baseUrl + this.props.config.footerIcon} alt={this.props.config.title} width="150" height="39" />}
          </a>
          <div>
            <a href={this.docUrl("isocell-manual", this.props.language)}>Documentation</a>
            <a href={this.docUrl("support", this.props.language)}>Support</a>
            <a href={this.docUrl("store", this.props.language)}>Store</a>
          </div>
          
          
      
         
       </section>

        <section className="generated-details">
          
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
