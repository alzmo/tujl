import { IssuePage } from "../../issue-page";
import { issue031 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";
export const metadata = issueMetadata(issue031);
export default function Issue031Page() { return <IssuePage issue={issue031} />; }
