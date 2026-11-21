import { IssuePage } from "../../issue-page";
import { issue075 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";
export const metadata = issueMetadata(issue075);
export default function Issue075Page() { return <IssuePage issue={issue075} />; }
