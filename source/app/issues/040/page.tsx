import { IssuePage } from "../../issue-page";
import { issue040 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";
export const metadata = issueMetadata(issue040);
export default function Issue040Page() { return <IssuePage issue={issue040} />; }
