import { IssuePage } from "../../issue-page";
import { issue005 } from "../../issues";
import { issueMetadata } from "../../issue-metadata";

export const metadata = issueMetadata(issue005);

export default function Issue005() {
  return <IssuePage issue={issue005} />;
}
