import { IssuePage } from "../../issue-page";
import { issue076 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";
export const metadata = issueMetadata(issue076);
export default function Issue076Page() { return <IssuePage issue={issue076} />; }
