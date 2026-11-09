import { IssuePage } from "../../issue-page";
import { issue025 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";
export const metadata = issueMetadata(issue025);
export default function Issue025Page() { return <IssuePage issue={issue025} />; }
