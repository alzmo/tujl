import { IssuePage } from "../../issue-page";
import { issue010 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";

export const metadata = issueMetadata(issue010);

export default function Issue010Page() {
  return <IssuePage issue={issue010} />;
}
