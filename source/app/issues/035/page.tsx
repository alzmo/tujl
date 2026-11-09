import { IssuePage } from "../../issue-page";
import { issue035 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";
export const metadata = issueMetadata(issue035);
export default function Issue035Page() { return <IssuePage issue={issue035} />; }
