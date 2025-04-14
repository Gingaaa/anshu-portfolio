import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode, { LineElement } from "rehype-pretty-code";

export async function processMDX(content: string): Promise<string> {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "github-dark-default",
      keepBackground: true,
      onVisitLine(node: LineElement) {
        if (node.children.length === 0) {
          node.children = [{ type: "text", value: " " }];
        }
      },
    })
    .use(rehypeStringify);

  const result = await processor.process(content);
  return result.toString();
}
