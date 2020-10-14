module.exports = (componentName) => ({
  content: `
import React from "react";
import ${componentName} from "./${componentName}";

export default {
    title: "${componentName}",
    component: ${componentName}
};

export const Default = () => <${componentName} foo="bar" />;
`,
  extension: `.stories.tsx`
});
