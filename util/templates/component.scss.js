module.exports = (componentName) => ({
  content: `
@import "../styles/stylesIndex.scss";

.${componentName} {

}

`,
  extension: `.scss`
});
