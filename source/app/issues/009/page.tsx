import { IssuePage } from "../../issue-page";
import { issue009 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";

export const metadata = issueMetadata(issue009);

export default function Issue009Page() {
  return <IssuePage issue={issue009} />;
}
