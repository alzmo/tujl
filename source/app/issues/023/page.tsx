import { IssuePage } from "../../issue-page";
import { issue023 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";
export const metadata = issueMetadata(issue023);
export default function Issue023Page() { return <IssuePage issue={issue023} />; }
