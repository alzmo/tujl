import { IssuePage } from "../../issue-page";
import { issue002 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";

export const metadata = issueMetadata(issue002);

export default function Issue002() {
  return <IssuePage issue={issue002} />;
}
