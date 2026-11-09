import { IssuePage } from "../../issue-page";
import { issue042 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";
export const metadata = issueMetadata(issue042);
export default function Issue042Page() { return <IssuePage issue={issue042} />; }
