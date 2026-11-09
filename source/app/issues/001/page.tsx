import { IssuePage } from "../../issue-page";
import { issue001 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";

export const metadata = issueMetadata(issue001);

export default function Issue001() {
  return <IssuePage issue={issue001} />;
}
