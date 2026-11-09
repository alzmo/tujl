import { IssuePage } from "../../issue-page";
import { issue011 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";

export const metadata = issueMetadata(issue011);

export default function Issue011Page() {
  return <IssuePage issue={issue011} />;
}
