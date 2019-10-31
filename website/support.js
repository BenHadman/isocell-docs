/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ""}${doc}`;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: "_self"
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    Technical Support
    <small>Use the following form to submit support requests</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || "";
    return (
      <SplashContainer>
        <Logo img_src={imgUrl("logo.svg")} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl("getting-started", language)}>Get Started</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container padding={props.padding} id={props.id} background={props.background}>
    <GridBlock align={props.align} contents={props.children} layout={props.layout} />
  </Container>
);
Block.defaultProps = {
  padding: ["bottom", "top"]
};



const Update = props => (
  <Block layout="twoColumn" {...props}>
    {[
      {
        image: imgUrl("say-thanks.png"),
        imageAlign: "left"
      },
      {
        title: "Easy to maintain",
        content: `In ante risus, tempus at condimentum eget, placerat et nisl. Fusce quis massa vitae erat luctus hendrerit. Quisque tempus tellus interdum purus mollis:

\`\`\`sh
# another command here...
npx my-new-tool again
\`\`\``
      }
    ]}
  </Block>
);

class Index extends React.Component {
  render() {
    const language = this.props.language || "";

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features align="left" />
          {/*<GetStarted align="left" />
          <Update align="left" />*/}
        </div>
      </div>
    );
  }
}

module.exports = Index;
