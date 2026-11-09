import { IssuePage } from "../../issue-page";
import { issue050 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";
export const metadata = issueMetadata(issue050);
export default function Issue050Page() { return <IssuePage issue={issue050} />; }
