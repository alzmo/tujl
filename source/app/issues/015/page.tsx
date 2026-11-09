import { IssuePage } from "../../issue-page";
import { issue015 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";

export const metadata = issueMetadata(issue015);

export default function Issue015Page() {
  return <IssuePage issue={issue015} />;
}
