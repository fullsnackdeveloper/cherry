module.exports = (componentName) => ({
  content: `
export interface ${componentName}Props {
    children: string;
}
`,
  extension: `.types.ts`
});
