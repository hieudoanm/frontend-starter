import fs from 'fs';

const main = async () => {
  const folders = await fs.readdirSync('./src/hooks');
  const hooks = folders.map((folder: string) => {
    const hook = folder
      .split('-')
      .map((text: string, index: number) =>
        index === 0 ? text : `${text[0].toUpperCase()}${text.slice(1)}`
      )
      .join('');
    return { hook, folder };
  });

  console.log(hooks);

  const body: string[] = [];

  for (const { hook, folder } of hooks) {
    const header = `### ${hook}`;
    const content = await fs.readFileSync(`./src/hooks/${folder}/index.ts`);
    const section = `${header}

\`\`\`tsx
${content}\`\`\`
`;
    body.push(`${section}`);
  }

  const nativeHooks = [
    'useState',
    'useEffect',
    'useContext',
    'useReducer',
    'useCallback',
    'useMemo',
    'useRef',
    'useImperativeHandle',
    'useLayoutEffect',
    'useDebugValue',
  ];

  const markdown = `# (React) \`useHooks\`

- [Native](#native)
- [Hooks](#hooks)
${hooks
  .map(({ hook }) => {
    return `  - [${hook}](#${hook.toLowerCase()})`;
  })
  .join('\n')}
- [Reference](#reference)

## Native

${nativeHooks
  .map((hook: string) => {
    return `- [\`${hook}\`](https://reactjs.org/docs/hooks-reference.html#${hook.toString()})`;
  })
  .join('\n')}

## Hooks

${body.join('\n')}
## Reference

- [use-hooks](https://usehooks.com/)
- [use-hooks-ts](https://usehooks-ts.com/)
`;

  await fs.writeFileSync('./README.md', markdown);
};

main().catch((error) => console.error(error));
