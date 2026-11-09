import { IssuePage } from "../../issue-page";
import { issue030 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";
export const metadata = issueMetadata(issue030);
export default function Issue030Page() { return <IssuePage issue={issue030} />; }
