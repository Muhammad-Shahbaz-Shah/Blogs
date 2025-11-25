import fs from "fs";

import H2List from "@/app/components/OnThisPage";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import matter from "gray-matter";
import { CiCircleList } from "react-icons/ci";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
const page = async ({ params }) => {
	const paramsObj = await params;
	const filePath = decodeURIComponent(paramsObj.slug);

	const { content, data } = matter(fs.readFileSync(`content/${filePath}.md`));
	const file = unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeDocument, { title: data.title })
		.use(rehypeSlug)
		.use(rehypeAutolinkHeadings)
		.use(rehypeFormat)
		.use(rehypePrettyCode, {
			theme: "github-dark-dimmed",
			transformers: [
				transformerCopyButton({
					visibility: "always",
					feedbackDuration: 3_000,
				}),
			],
		})
		.use(rehypeStringify);
	const html = (await file.process(content)).toString();

	return (
		<div className="flex  h-[89.4vh] w-full overflow-hidden">
			<div className="max-w-[24%] hidden md:block max-h-full overflow-auto">
				<H2List html={html} />
			</div>
			<div className="block md:hidden">
				<Sheet>
					<SheetTrigger>
						<Button className="absolute left-1 text-black dark:text-white z-10 top-4">
							{" "}
							<CiCircleList className=" invert   text-2xl" />
						</Button>
					</SheetTrigger>
					<SheetContent side="bottom">
						<SheetHeader>
							<SheetDescription>
								<H2List html={html} />
							</SheetDescription>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
			<div
				id="divEle"
				className="prose overflow-auto scroll-hidden h-full  dark:prose-invert min-w-[74%]  p-3 border-x px-4"
				dangerouslySetInnerHTML={{ __html: html }}></div>
		</div>
	);
};

export default page;
