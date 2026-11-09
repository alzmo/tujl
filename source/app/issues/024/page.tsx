import { IssuePage } from "../../issue-page";
import { issue024 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";
export const metadata = issueMetadata(issue024);
export default function Issue024Page() { return <IssuePage issue={issue024} />; }
