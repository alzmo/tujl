import { IssuePage } from "../../issue-page";
import { issue022 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";
export const metadata = issueMetadata(issue022);
export default function Issue022Page() { return <IssuePage issue={issue022} />; }
