import { IssuePage } from "../../issue-page";
import { issue029 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";
export const metadata = issueMetadata(issue029);
export default function Issue029Page() { return <IssuePage issue={issue029} />; }
