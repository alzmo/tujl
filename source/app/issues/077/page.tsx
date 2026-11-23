import { IssuePage } from "../../issue-page";
import { issue077 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";
export const metadata = issueMetadata(issue077);
export default function Issue077Page() { return <IssuePage issue={issue077} />; }
