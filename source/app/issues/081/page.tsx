import { IssuePage } from "../../issue-page";
import { issue081 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";
export const metadata = issueMetadata(issue081);
export default function Issue081Page() { return <IssuePage issue={issue081} />; }
